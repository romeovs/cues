export function parse(str: string): number {
	const [h, m, ss] = str.split(":")
	const [s, ns = 0] = ss.split(/[.,]/)

	let v = 0
	v += parseInt(ns, 10)
	v += 1000 * parseInt(s, 10)
	v += 1000 * 60 * parseInt(m, 10)
	v += 1000 * 60 * 60 * parseInt(h, 10)

	return v
}

export function format(ts: number, type: "webvtt" | "srt"): string {
	const ns = ts % 1000
	const s = Math.floor((ts - ns) / 1000) % 60
	const m = Math.floor((ts - ns - 60 * s) / (1000 * 60)) % (60 * 1000)
	const h = Math.floor((ts - ns - 60 * s - 60 * 60)/ (1000* 60 * 60)) % (60 * 60 * 1000)

	const sep = type === "srt" ? "," : "."

	return `${pad(h)}:${pad(m)}:${pad(s)}${sep}${pad(ns, 3)}`
}
