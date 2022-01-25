export function shift(file: File, offset: number): File {
	return {
		...file,
		cues: file.cues.map(function (cue: Cue): Cue {
			return {
				...cue,
				start: start + offset,
				end: end + offset,
			}
		}),
	}
}
