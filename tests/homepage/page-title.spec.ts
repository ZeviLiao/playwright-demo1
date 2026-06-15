// spec: specs/playwright-homepage.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('首頁核心功能', () => {
  test('驗證首頁標題與 URL', async ({ page }) => {
    // 1. 開啟瀏覽器並導覽至 https://playwright.dev/
    await page.goto('https://playwright.dev/');

    // expect: 頁面 URL 為 https://playwright.dev/
    await expect(page).toHaveURL('https://playwright.dev/');

    // expect: 網頁標題為 'Fast and reliable end-to-end testing for modern web apps | Playwright'
    await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
  });
});
