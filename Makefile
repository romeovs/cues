bin = node_modules/.bin

jest = $(bin)/jest
tsc = $(bin)/tsc

build:
	@node esbuild.config.js

test:
	@jest

test.watch:
	@(jest) --watch

typecheck:
	@(tsc) --noEmit

typecheck.watch:
	@(tsc) --noEmit --watch
