import { build } from "esbuild"
import { dtsPlugin } from "esbuild-plugin-d.ts"

await build({
	entryPoints: ["./src/index.js"],
	bundle: true,
	target: "esnext",
	format: "esm",
	platform: "node",
	outfile: "./dist/index.js",
	sourcemap: true,
	plugins: [dtsPlugin()],
})
