import * as timestamp from "./timestamp"

const table = {
	"00:00:00.000": 0,
	"00:00:00.001": 1,
	"00:00:00.0012": 1.2,
	"00:00:01.001": 1001,
	"00:01:01.001": 61001,
	"01:01:01.001": 3661001,
	"50:01:01.001": 180061001,
}

test("timestamp.parse should parse the timestamp correctly", function () {
	for (const ts in table) {
		const n = table[ts as keyof typeof table]
		expect(timestamp.parse(ts)).toBe(n)
	}
})

test("timestamp.format should format the timestamp correctly", function () {
	for (const ts in table) {
		const n = table[ts as keyof typeof table]
		expect(timestamp.format(n, "webvtt")).toBe(ts)
	}
})

test("timestamp.format should be the inverse of timestamp.parse", function () {
	for (let x = 0; x < 500; x++) {
		const n = Math.floor(Math.random() * 1000 * 60 * 60 * 5)
		const ts = timestamp.format(n, "webvtt")
		expect(timestamp.parse(ts)).toBe(n)
	}
})
