check-program = $(foreach exec,$(1),$(if $(shell PATH="$(PATH)" which $(exec)),,$(error "Missing deps: no '$(exec)' in PATH")))

asdf.install_plugins:
	$(call check-program, asdf)
	@echo "Installing asdf plugins..."
	@set -e; \
	for PLUGIN in $$(cut -d' ' -f1 .tool-versions | grep "^[^\#]"); do \
		asdf plugin add $$PLUGIN || [ $$?==2 ] || exit 1; \
	done

asdf.install_tools: asdf.install_plugins
	$(call check-program, asdf)
	@echo "Installing asdf tools..."
	@asdf install

