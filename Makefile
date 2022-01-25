bin = node_modules/.bin

jest = $(bin)/jest
tsc = $(bin)/tsc

build:
	@node esbuild.config.js

JEST_FLAGS =
test:
	@$(jest)

test.watch: JEST_FLAGS += --watch
test.watch: test

test.ci: JEST_FLAGS += --reporters=jest-github-actions-reporter
test.ci: test


TSC_FLAGS = --noEmit
typecheck:
	@$(tsc) $(TSC_FLAGS)

typecheck.watch: TSC_FLAGS += --watch
typecheck.watch: typecheck
