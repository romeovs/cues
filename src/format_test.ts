import { parse } from "./parse"
import { format } from "./format"

import vtt from "../mocks/test.vtt"
import srt from "../mocks/test.srt"

test("format() should format a vtt file correctly", function () {
	const file = parse(vtt)
	expect(format(file)).toBe(vtt.trim())
})

test("format() should format a vtt file correctly", function () {
	const file = parse(srt)
	expect(format(file)).toBe(srt.trim())
})
