export function pad(x: number, len: number = 2): string {
	const str = x.toString()
	if (str.length >= len) {
		return str
	}

	const prefix = "0".repeat(len - str.length)
	return prefix.concat(str)
}
