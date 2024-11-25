SHELL := /bin/bash

# Get the temporary directory of the system
TMPDIR := $(shell dirname $(shell mktemp -u))

# Define the directory that contains the current Makefile
make_dir := $(realpath $(dir $(abspath $(lastword $(MAKEFILE_LIST)))))
cache_dir := $(make_dir)/.cache

# Argument Defaults
IOS_OUTPUT_FRAMEWORK_DIR ?= $(make_dir)/ios/Frameworks
ANDROID_OUTPUT_LIBS_DIR ?= $(make_dir)/android/libs
PROTOCOLTYPES_COMMIT_HASH ?= 62415a228a054c23a397b1c6689392d1
GO_BIND_BIN_DIR ?= $(cache_dir)/bind

# IOS definitions
weshnetcore_xcframework := $(IOS_OUTPUT_FRAMEWORK_DIR)/WeshnetCore.xcframework

# Android definitions
weshnetcore_aar := $(ANDROID_OUTPUT_LIBS_DIR)/WeshnetCore.aar
weshnetcore_jar := $(ANDROID_OUTPUT_LIBS_DIR)/WeshnetCore-sources.jar

# Utility definitions
pbjs := ./node_modules/.bin/pbjs
pbts := ./node_modules/.bin/pbts
gomobile := $(GO_BIND_BIN_DIR)/gomobile
gobind := $(GO_BIND_BIN_DIR)/gobind

# go files and dependencies
go_files := $(shell find . -iname '*.go')
go_deps := go.mod go.sum $(go_files)

# rewrite shell path
# this is mostly for gomobile to have the correct gobind in his path
PATH := $(GO_BIND_BIN_DIR):$(PATH)

# * Main commands

# `all` and `build` command builds everything (generate, build.ios, build.android)
all build: generate build.ios build.android

# Build iOS framework
build.ios: generate $(weshnetcore_xcframework)

# Build Android aar & jar
build.android: generate $(weshnetcore_aar) $(weshnetcore_jar)

# Generate API from protofiles
generate: api.generate

# Clean all generated files
clean: api.clean bind.clean
	rm -rf .eslintcache

# Force clean (clean and remove node_modules)
fclean: clean
	rm -rf node_modules

.PHONY: generate build.ios build.android fclean

# - Node: Handle node_modules

node_modules: package.json
	(yarn && touch $@) || true

# - API : Handle API generation and cleaning

api.generate: node_modules _api.generate.protocol _api.generate.rpcmanager
api.clean: _api.clean.protocol _api.clean.rpcmanager

# - API - protocoltypes

_api.generate.protocol: src/api/protocoltypes.pb.js \
						src/api/protocoltypes.pb.d.ts \
						src/weshnet.types.gen.ts
_api.clean.protocol:
	rm -f src/vendor src/api/protocoltypes.pb.js src/api/protocoltypes.pb.d.ts src/weshnet.types.gen.ts

api/vendor/protocoltypes.proto:
	mkdir -p $(dir $@)
	buf export buf.build/berty-technologies/weshnet:$(PROTOCOLTYPES_COMMIT_HASH) --output $(dir $@)
src/api/protocoltypes.pb.js: api/vendor/protocoltypes.proto
	$(pbjs) -t json-module -w es6 -o $@ $<
src/api/protocoltypes.pb.d.ts: api/vendor/protocoltypes.proto
	$(pbjs) -t static-module $< | $(pbts) -o $@ -
src/weshnet.types.gen.ts: api/vendor/protocoltypes.proto gen-clients.js
	node gen-clients.js > $@

# - API - rpcmanager

_api.generate.rpcmanager: api/rpcmanager.proto src/api/rpcmanager.pb.js src/api/rpcmanager.pb.d.ts
_api.clean.rpcmanager:
	rm -f api/rpcmanager.proto src/api/rpcmanager.pb.js src/api/rpcmanager.pb.d.ts

api/rpcmanager.proto: go.sum go.mod
	go run github.com/gfanton/grpcutil/rpcmanager/protofile > $@
src/api/rpcmanager.pb.js: api/rpcmanager.proto
	$(pbjs) -t json-module -w commonjs -o $@ $<
src/api/rpcmanager.pb.d.ts: api/rpcmanager.proto
	$(pbjs) -t static-module $< | $(pbts) -o $@ -

.PHONY: api.generate _api.generate.rpcmanager _api.generate.protocol

# - Bind : Handle gomobile bind

# - Bind - initialization
bind_init_files := $(TMPDIR)/.tool-versions $(gobind) $(gomobile)

$(gobind): go.sum go.mod
	@mkdir -p $(dir $@)
	go build -o $@ golang.org/x/mobile/cmd/gobind && chmod +x $@

$(gomobile): $(gobind) go.sum go.mod
	@mkdir -p $(dir $@)
	go build -o $@ golang.org/x/mobile/cmd/gomobile && chmod +x $@
	$(gomobile) init || (rm -f $@ && exit 1) # in case of failure, remove gomobile so we can init again

$(TMPDIR)/.tool-versions: .tool-versions
	@echo "> copying current '.tool-versions' in '$(TMPDIR)' folder in order to make asdf works"
	@echo "> this hack is needed in order for gomobile (who is building from '$(TMPDIR)') bind to use the correct javac and go version"
	@cp -v $< $@

.PHONY: bind.init

# - Bind - ios framework

$(weshnetcore_xcframework): $(bind_init_files) $(go_deps)
	@mkdir -p $(dir $@)
    # need to use `nowatchdog` tags, see https://github.com/libp2p/go-libp2p-connmgr/issues/98
	$(gomobile) bind -v \
		-tags 'nowatchdog' -prefix=Weshnet \
		-o $@ -target ios ./framework/core
_bind.clean.ios:
	rm -rf weshnetcore_xcframework

# - Bind - android aar and jar

$(weshnetcore_jar): $(ANDROID_OUTPUT_LIBS_DIR)/WeshnetCore.aar
$(weshnetcore_aar): $(bind_init_files) $(go_deps)
	@mkdir -p $(dir $@) .cache/bind/android
	$(gomobile) bind -v \
		-javapkg=network.weshnet \
		-o $@ -target android -androidapi 21 ./framework/core
_bind.clean.android:
	rm -rf $(weshnetcore_jar) $(weshnetcore_aar)


# - Bind - cleaning

bind.clean: _bind.clean.ios _bind.clean.android
	rm -f $(bind_init_files)

# lint

lint: node_modules
	npx eslint --cache --quiet --ext=.js,.jsx,.ts,.tsx .
	npx tsc # check static typing

lint.fix: node_modules
	npx eslint --cache --quiet --ext=.js,.jsx,.ts,.tsx --fix .
	npx tsc # check static typing

include makefiles/utils.mk
include makefiles/asdf.mk
include makefiles/npm.mk
