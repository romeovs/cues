import { Cue } from "./cue"

export type File = {
	type: "webvtt" | "srt"
	cues: Cue[]
}
