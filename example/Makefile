METRO_RN_PORT ?= 8081
IOS_DEVICE ?=

## Internal variables
check-program = $(foreach exec,$(1),$(if $(shell PATH="$(PATH)" which $(exec)),,$(error "Missing deps: no '$(exec)' in PATH")))

node_modules: package.json
	$(call check-program, yarn)
	yarn $(if $(filter $(CI), true), --frozen-lockfile --network-timeout 1200000 --network-concurrency 1)
	touch $@

ios/weshnetexpoexample.xcworkspace: ios/weshnetexpoexample.xcodeproj ios/Podfile node_modules
	$(call check-program, pod)
	cd ios pod install --repo-update
	touch $@

build.ios: ios/weshnetexpoexample.xcworkspace
	$(call check-program, npx)
	npx react-native run-ios \
		--no-packager \
		--port="$(METRO_RN_PORT)" \
		$(if $(IOS_DEVICE),$(IOS_RN_FLAGS)='$(IOS_DEVICE)',)

.PHONY: help
help:
	@echo "  build.ios            Launch iOS app            IOS_DEVICE=<virtual/real device>"
