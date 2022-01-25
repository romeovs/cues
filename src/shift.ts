import { File } from "./file"
import { Cue } from "./cue"

export function shift(file: File, offset: number): File {
	return {
		...file,
		cues: file.cues.map(function (cue: Cue): Cue {
			return {
				...cue,
				start: cue.start + offset,
				end: cue.end + offset,
			}
		}),
	}
}
