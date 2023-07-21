make_dir := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))
default_deps := node_modules Makefile

### ARGS
OUTPUT_FRAMEWORK ?= $(make_dir)/ios/Frameworks/WeshnetCore.xcframework
PROTO_COMMIT_HASH ?= c72d5759847b4dedb5411c19485e1a37

# commands

all build: build.ios build.android

build.ios: generate $(OUTPUT_FRAMEWORK)
build.android: generate output/android/core.aar

generate: api.generate

clean: api.clean bind.clean
fclean: clean
	rm -rf node_modules

.PHONY: generate build.ios build.android fclean

## node

node_modules: package.json yarn.lock
	(yarn && touch $@) || true

## api

api.generate: node_modules _api.generate.protocol _api.generate.rpcmanager
api.clean: _api.clean.protocol _api.clean.rpcmanager

pbjs := ./node_modules/.bin/pbjs
pbts := ./node_modules/.bin/pbts

.PHONY: api.generate api.clean

### protocoltypes

_api.generate.protocol: src/api/protocoltypes.pb.js \
						src/api/protocoltypes.pb.d.ts \
						src/weshnet.types.gen.ts
_api.clean.protocol:
	rm -f src/api/protocoltypes.pb.js src/api/protocoltypes.pb.d.ts src/weshnet.types.gen.ts

api/protocoltypes.proto: buf.yaml
	mkdir -p $(dir $@)
	buf export buf.build/berty/weshnet:$(PROTO_COMMIT_HASH) --output $(dir $@)
src/api/protocoltypes.pb.js: api/protocoltypes.proto
	$(pbjs) -t json-module -w es6 -o $@ $<
src/api/protocoltypes.pb.d.ts: api/protocoltypes.proto
	$(pbjs) -t static-module $< | $(pbts) -o $@ -
src/weshnet.types.gen.ts: api/protocoltypes.proto gen-clients.js
	node gen-clients.js > $@

### rpcmanager

_api.generate.rpcmanager: api/rpcmanager.proto src/api/rpcmanager.pb.js src/api/rpcmanager.pb.d.ts
_api.clean.rpcmanager:
	rm -f api/rpcmanager.proto src/api/rpcmanager.pb.js src/api/rpcmanager.pb.d.ts

api/rpcmanager.proto: go.sum go.mod
	go run github.com/gfanton/grpcutil/rpcmanager/protofile > $@
src/api/rpcmanager.pb.js: api/rpcmanager.proto
	$(pbjs) -t json-module -w es6 -o $@ $<
src/api/rpcmanager.pb.d.ts: api/rpcmanager.proto
	$(pbjs) -t static-module $< | $(pbts) -o $@ -

.PHONY: api.generate _api.generate.rpcmanager _api.generate.protocol

## go bind

bind.init: $(TMP)/.tool-versions .cache/bind/gomobile
.cache/bind/gomobile: go.sum go.mod
	@mkdir -p $(dir $@)
	go build -o $@ golang.org/x/mobile/cmd/gomobile && chmod +x $@
	$@ init
# FIXME(gfanton): find a more elegant way to make asdf works in the tmp directory
$(TMP)/.tool-versions: .tool-versions
	@echo "> copying current `.tool-versions` in '$(TMP)' folder in order to make asdf works"
	@echo "> this hack is needed in order for gomobile (who is building from '$(TMP)') bind to use the correct javac and go version"
	@cp -v $< $@
bind.clean: _bind.clean.framework
	rm -f $(TMP)/.tool-versions
	rm -rf .cache/bind

# use `nowatchdog` tags to build, see https://github.com/libp2p/go-libp2p-connmgr/issues/98
go_files := $(shell find . -iname '*.go')
go_deps := go.mod go.sum $(go_files)
$(OUTPUT_FRAMEWORK): bind.init $(go_deps)
	@mkdir -p $(dir $@)
	.cache/bind/gomobile bind -v \
		-tags 'nowatchdog' -prefix=Weshnet \
		-o $@ -target ios $(make_dir)/framework/core
_bind.clean.framework:
	rm -rf $(OUTPUT_FRAMEWORK)

output/android/core.aar: bind.init $(go_deps)
	@mkdir -p $(dir $@)
	.cache/bind/gomobile bind -v -o $@ -target android $(make_dir)/framework/core

include makefiles/asdf.mk
