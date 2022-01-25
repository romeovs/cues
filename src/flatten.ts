import { File } from "./file"
import { Cue } from "./cue"

export function flatten(file: File, offset: number): File {
	return {
		...file,
		cues: file.cues.map(function (cue: Cue): Cue {
			return {
				...cue,
				text: clean(cue.text),
			}
		}),
	}
}

function clean(text: string): string {
	return text.replace(/<\/?[^>]+/g, "")
}
