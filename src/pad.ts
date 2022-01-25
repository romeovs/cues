export function pad(x: number, len: number = 2): string {
	const [pre, post = ""] = x.toString().split(".")
	const suffix = post ? `.${post}` : ""
	if (pre.length >= len) {
		return pre.concat(suffix)
	}

	const prefix = "0".repeat(len - pre.length)
	return prefix.concat(pre).concat(suffix)
}
