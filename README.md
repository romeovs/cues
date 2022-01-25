# 🎱 cues

`cues` is a utility library and cli tool to edit .srt and .vtt files.

### Installation
```
npm install cues
```
or
```
yarn add cues
```

### Library usage

```ts
import { parse, format, shift } from 'cues'

const content: string = `WEBVTT ...`

// Parse vtt or srt content into a cue.File
const file = parse(content)

// Shift cues by -300ms
const shifted = shift(file, -300)

// Convert the file to srt
file.type = 'srt'

// Format the subtitles to a string containing the srt file
const result = format(shifted)

console.log(result)
```

#### API

##### Functions
| Function | Description |
|----------|-------------|
| `parse(str: string): File` | Parse an .srt or .vtt file into cues' `File` representation. The filetype is automatically detected. |
| `format(file: File): string` | Format a `cue.File` into a string containing .srt or .vtt. The format is selected based on `file.type` |
| `shift(file: File, ms: number): File` | Shift all the cues in `file` by `ms` milliseconds. Negative values for `ms` mean the subtitles render earlier |
| `flatten(file: File): File` | Remove all styling and other xml tags from the cues, like `<font>`, `<color>` etc. |

##### Types

| Type | | Description |
|----------|-|-------------|
| `File` | | Represents a subtitle file |
| | `File.type: "webvtt" \| "srt"` | Indicates what the type of the file is |
| | `File.cues: Cue[]` | Holds all the files cues |
| `Cue` | | Represents a single subtitle cue |
| | `Cue.id: string` | The cues inique id |
| | `Cue.text: string` | The raw subtitle text for the cue |
| | `Cue.start: number` | The timestamp when the subtitle should start showing, in ms |
| | `Cue.end: number` | The timestamp when the subtitle should stop showing, in ms |
