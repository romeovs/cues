import { File } from "./file"
import * as timestamp from "./timestamp"

export function format(file: File): string {
	const groups = file.cues.map(cue => print(cue, file.type))

	if (file.type === "webvtt") {
		groups.unshift("WEBVTT")
	}

	return groups.join("\n\n")
}

function print(cue: Cue, type: "webvtt" | "srt"): string {
	const start = timestamp.format(cue.start, type)
	const end = timestamp.format(cue.end, type)
	return [cue.id, `${start} --> ${end}`, cue.text].join("\n")
}
