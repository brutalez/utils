import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./tests/setup/index.ts"],
    include: ["tests/**/*.test.{ts,tsx}"],
  },
})
