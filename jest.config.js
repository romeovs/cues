const config = {
	verbose: true,
	roots: ["<rootDir>"],
	transform: {
		"^.+\\.ts$": "esbuild-jest",
	},
	testRegex: "(_|/)test\\.ts$",
	moduleFileExtensions: ["js", "ts"],
	modulePaths: ["<rootDir>"],
	modulePathIgnorePatterns: ["dist"],
}

export default config
