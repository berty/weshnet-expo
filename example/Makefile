METRO_RN_PORT ?= 8081
IOS_DEVICE ?=
ANDROID_DEVICE ?=
EXPO_DEVICE_FLAG = --device

## Internal variables
check-program = $(foreach exec,$(1),$(if $(shell PATH="$(PATH)" which $(exec)),,$(error "Missing deps: no '$(exec)' in PATH")))

node_modules: package.json
	$(call check-program, yarn)
	yarn $(if $(filter $(CI), true), --frozen-lockfile --network-timeout 1200000 --network-concurrency 1)
	touch $@

ios/weshnetexpoexample.xcworkspace: app.json node_modules
	$(call check-program, pod)
	npx expo prebuild --clean -p ios
	touch $@

build.ios: ios/weshnetexpoexample.xcworkspace
	$(call check-program, npx)
	npx expo run:ios \
		--port="$(METRO_RN_PORT)" \
		$(if $(IOS_DEVICE),$(EXPO_DEVICE_FLAG)='$(IOS_DEVICE)',)

android/app: app.json node_modules
	$(call check-program, pod)
	npx expo prebuild --clean -p android
	touch $@

build.android: android/app
	$(call check-program, npx)
	npx expo run:android \
		--port="$(METRO_RN_PORT)" \
		$(if $(ANDROID_DEVICE),$(EXPO_DEVICE_FLAG)='$(ANDROID_DEVICE)',)

.PHONY: help
help:
	@echo "  build.ios            Launch iOS app            IOS_DEVICE=<virtual/real device>"
