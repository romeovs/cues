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
