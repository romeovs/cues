import { pad } from "./pad"

export function parse(str: string): number {
	const [h, m, ss] = str.split(":")
	const [s, ns = "0"] = ss.split(/[.,]/)

	let v = 0
	v += parseInt(ns, 10) / 10 ** (ns.length - 3)
	v += 1000 * parseInt(s, 10)
	v += 1000 * 60 * parseInt(m, 10)
	v += 1000 * 60 * 60 * parseInt(h, 10)

	return v
}

export function format(ts: number, type: "webvtt" | "srt"): string {
	let rest = ts
	const ns = ts % 1000
	rest -= ns

	const s = (rest / 1000) % 60
	rest -= 1000 * s

	const m = (rest / (1000 * 60)) % 60
	rest -= 60 * 1000 * m

	const h = (rest / (1000 * 60 * 60)) % 60
	rest -= 60 * 60 * 1000 * h

	if (rest !== 0) {
		throw new Error(`assertion failed: rest = 0`)
	}

	const sep = type === "srt" ? "," : "."

	return `${pad(h)}:${pad(m)}:${pad(s)}${sep}${pad(ns, 3).replace(".", "")}`
}
