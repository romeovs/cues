import { Cue } from "./cue"
import { File } from "./file"
import * as timestamp from "./timestamp"

const WEBVTT = "WEBVTT"

export function parse(content: string): File {
	const groups = content.split("\n\n")

	const vtt = groups[0].toUpperCase() === WEBVTT
	const type = vtt ? "webvtt" : "srt"

	const cues = groups.map(parseCue).filter(isCue)

	return { type, cues }
}

function parseCue(content: string): Cue | null {
	const lines = content.split("\n")
	if (lines[0].toUpperCase() === WEBVTT || lines.length < 3) {
		return null
	}

	const [start, end] = lines[1].split(" --> ")

	return {
		id: lines[0],
		text: lines[2],
		start: timestamp.parse(start),
		end: timestamp.parse(end),
	}
}

function isCue(cue: Cue | null): cue is Cue {
	return cue !== null
}
