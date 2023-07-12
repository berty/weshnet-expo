make_dir := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))
default_deps := Makefile

# ARGS
OUTPUT_FRAMEWORK ?= $(make_dir)/ios/Frameworks/WeshnetCore.xcframework
API_FOLDER ?= ./api

### commands

all build: build.ios build.android

init:
	go run golang.org/x/mobile/cmd/gomobile init

build.ios: init $(OUTPUT_FRAMEWORK)
build.android: init output/android/core.aar

fclean:
	rm -rf output

.PHONY: build.ios build.android fclean

proto_commit_hash=c72d5759847b4dedb5411c19485e1a37
### generate
generate.api:
	mkdir -p $(API_FOLDER)
	buf export buf.build/berty/weshnet:$(proto_commit_hash) --output $(API_FOLDER)

### go bind

go_files := $(shell find . -iname '*.go')
go_deps := go.mod go.sum $(go_files)
$(OUTPUT_FRAMEWORK): $(default_deps) $(go_deps)
	mkdir -p $(dir $@)
	echo 'building weshnet, can take a while on the first install...' 1>&2
	go run golang.org/x/mobile/cmd/gomobile bind -tags 'nowatchdog' -prefix=Weshnet -v -o $@ -target ios $(make_dir)/framework/core

output/android/core.aar: $(default_deps) $(go_deps)
	@mkdir -p $(dir $@)
	go run golang.org/x/mobile/cmd/gomobile bind -v -o $@ -target android $(make_dir)/framework/core

include makefiles/asdf.mk