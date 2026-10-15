import { defineConfig } from "tsup"

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/string.ts",
    "src/number.ts",
    "src/array.ts",
    "src/date.ts",
    "src/object.ts",
    "src/json.ts",
    "src/duration.ts",
  ],
  format: ["esm"],
  target: "es2020",
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
})
