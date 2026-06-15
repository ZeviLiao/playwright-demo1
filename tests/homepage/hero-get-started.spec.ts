// spec: specs/playwright-homepage.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('首頁核心功能', () => {
  test('點擊 Get started 導覽至安裝文件頁', async ({ page }) => {
    // 1. 導覽至 https://playwright.dev/
    await page.goto('https://playwright.dev/');

    // 2. 點擊 Hero 區的 'Get started' 連結
    await page.locator('a[href=\'/docs/intro\']:has-text(\'Get started\')').click();

    // expect: 頁面導覽至 https://playwright.dev/docs/intro
    await expect(page).toHaveURL('https://playwright.dev/docs/intro');

    // expect: 出現 'Installation' 標題
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
});
