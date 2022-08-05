# codemirror-riscv

RISC-V mode for CodeMirror.

- `defineMode(CodeMirror)`: Define `riscv` mode and MIME `text/x-riscv`

## Usage

```javascript
import CodeMirror from "codemirror";
import "codemirror/addon/mode/simple.js"; // `CodeMirror.defineSimpleMode`

import { defineMode } from "@codewars/codemirror-riscv";

defineMode(CodeMirror);
```

## Demo

See https://codewars.github.io/codemirror-riscv/

## Development

Run `npm run dev` to start a local dev server.
