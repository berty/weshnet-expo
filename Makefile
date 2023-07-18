make_dir := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))
default_deps := node_modules Makefile

# ARGS
OUTPUT_FRAMEWORK ?= $(make_dir)/ios/Frameworks/WeshnetCore.xcframework
PROTO_COMMIT_HASH ?= c72d5759847b4dedb5411c19485e1a37

### commands

all build: build.ios build.android

init:
	go run golang.org/x/mobile/cmd/gomobile init

build.ios: init $(OUTPUT_FRAMEWORK)
build.android: init output/android/core.aar

generate: generate.api

fclean:
	rm -rf output

generate: generate.api

.PHONY: generate build.ios build.android fclean

### node
node_modules: package.json package-lock.json
	yarn && touch $@

### proto
generate.api: node_modules _generate.api.protocol _generate.api.rpcmanager

pbjs := ./node_modules/.bin/pbjs
pbts := ./node_modules/.bin/pbts

# protocoltypes

_generate.api.protocol: src/api/protocoltypes.pb.js src/api/protocoltypes.pb.d.ts
api/protocoltypes.proto: buf.yaml
	mkdir -p $(dir $@)
	buf export buf.build/berty/weshnet:$(PROTO_COMMIT_HASH) --output $(dir $@)
src/api/protocoltypes.pb.js: api/protocoltypes.proto
	$(pbjs) -t json-module -w es6 -o $@ $<
src/api/protocoltypes.pb.d.ts: api/protocoltypes.proto
	$(pbjs) -t static-module $< | $(pbts) -o $@ -

# rpcmanager

_generate.api.rpcmanager: api/rpcmanager.proto src/api/rpcmanager.pb.js src/api/rpcmanager.pb.d.ts
api/rpcmanager.proto: go.sum go.mod
	go run github.com/gfanton/grpcutil/rpcmanager/protofile > $@
src/api/rpcmanager.pb.js: api/rpcmanager.proto
	$(pbjs) -t json-module -w es6 -o $@ $<
src/api/rpcmanager.pb.d.ts: api/rpcmanager.proto
	$(pbjs) -t static-module $< | $(pbts) -o $@ -

.PHONY: generate.api _generate.api.rpcmanager _generate.api.protocol

### go bind

go_files := $(shell find . -iname '*.go')
go_deps := go.mod go.sum $(go_files)
$(OUTPUT_FRAMEWORK): $(go_deps)
	mkdir -p $(dir $@)
	echo 'building weshnet, can take a while on the first install...' 1>&2
	go run golang.org/x/mobile/cmd/gomobile bind -tags 'nowatchdog' -prefix=Weshnet -v -o $@ -target ios $(make_dir)/framework/core

output/android/core.aar: $(go_deps)
	@mkdir -p $(dir $@)
	go run golang.org/x/mobile/cmd/gomobile bind -v -o $@ -target android $(make_dir)/framework/core

include makefiles/asdf.mk