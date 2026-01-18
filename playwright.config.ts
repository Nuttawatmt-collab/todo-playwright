
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    headless: false,
    screenshot: 'on'
  },
  reporter: [['html', { open: 'never' }]],
});
