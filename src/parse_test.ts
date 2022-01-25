import dedent from "dedent"
import { parse } from "./parse"

import vtt from "../mocks/test.vtt"
import srt from "../mocks/test.srt"

test("parse() should parse a vtt file correctly", function () {
	expect(parse(vtt)).toStrictEqual({
		type: "webvtt",
		cues: [
			{ id: "1", text: "Hello world!", start: 61000, end: 65002 },
			{ id: "2", text: "Foo bar", start: 205120, end: 351200 },
		],
	})
})

test("parse() should parse a srt file correctly", function () {
	expect(parse(srt)).toStrictEqual({
		type: "srt",
		cues: [
			{ id: "1", text: "Hello world!", start: 61000, end: 65002 },
			{ id: "2", text: "Foo bar", start: 205120, end: 351200 },
		],
	})
})
