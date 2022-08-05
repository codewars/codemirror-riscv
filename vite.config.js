import { defineConfig } from "vite";

import nesting from "postcss-nesting";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/codemirror-riscv/" : "",
  css: { postcss: { plugins: [nesting] } },
}));
