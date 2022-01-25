entrypoint=./src/index.ts

bin=./node_modules/.bin
esbuild=$(bin)/esbuild

build:
	@$(esbuild) --sourcemap --outdir=dist  --bundle src/index.ts --target=esnext --format=esm
