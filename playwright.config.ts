import { defineConfig, devices } from "@playwright/test"

export default defineConfig({
  testDir: "./playwright",
  testMatch: "**/*.spec.ts",
  fullyParallel: true,
  reporter: "list",

  use: {
    baseURL: "http://127.0.0.1:4173",
    trace: "retain-on-failure",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],

  webServer: {
    command:
      "pnpm exec vite playwright --configLoader native --host 127.0.0.1 --port 4173 --strictPort",
    url: "http://127.0.0.1:4173",
    reuseExistingServer: !process.env.CI,
  },
})
