// spec: specs/playwright-homepage.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('首頁核心功能', () => {
  test('驗證 Hero 區主標語文字', async ({ page }) => {
    // 1. 導覽至 https://playwright.dev/
    await page.goto('https://playwright.dev/');

    // expect: H1 標題文字為 'Playwright enables reliable web automation for testing, scripting, and AI agents.'
    await expect(page.getByRole('heading', { name: 'Playwright enables reliable web automation for testing, scripting, and AI agents.' })).toBeVisible();
  });
});
