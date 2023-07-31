npm.publish: clean build.ios build.android
	$(call check-program, yarn)
	@echo "Publishing on NPM registry..."
	yarn publish -w berty --access public --registry https://registry.npmjs.org
	@echo "Publishing on NPM done."
