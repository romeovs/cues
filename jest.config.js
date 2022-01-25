const config = {
	verbose: true,
	roots: ["<rootDir>"],
	transform: {
		"^.+\\.(ts|vtt|srt)$": [
			"esbuild-jest",
			{
				loaders: {
					".vtt": "text",
					".srt": "text",
				},
			},
		],
	},
	testRegex: "(_|/)test\\.ts$",
	moduleFileExtensions: ["js", "ts"],
	modulePaths: ["<rootDir>"],
	modulePathIgnorePatterns: ["dist"],
}

export default config
