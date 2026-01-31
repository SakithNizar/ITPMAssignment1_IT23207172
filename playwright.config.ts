import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 10000,
  expect: { timeout: 5000 },
  reporter: 'html',
  use: {
    headless: false, // Runs browser visibly
    baseURL: 'https://tamil.changathi.com/',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});