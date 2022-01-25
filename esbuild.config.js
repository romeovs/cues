import { build } from "esbuild"

await build({
	entryPoints: ["./src/index.js"],
	bundle: true,
	target: "esnext",
	format: "esm",
	platform: "node",
	outfile: "./dist/index.js",
	sourcemap: true,
})
