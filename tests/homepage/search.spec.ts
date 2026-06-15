// spec: specs/playwright-homepage.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('首頁核心功能', () => {
  test('搜尋功能顯示即時結果', async ({ page }) => {
    // 1. 導覽至 https://playwright.dev/
    await page.goto('https://playwright.dev/');

    // 2. 點擊導覽列右側的搜尋按鈕
    await page.locator('button:has-text(\'Search\')').click();

    // expect: 搜尋彈窗出現，輸入框取得焦點
    await expect(page.getByRole('searchbox', { name: 'Search' })).toBeVisible();

    // 3. 在搜尋框輸入 'page'
    await page.locator('input[type=\'search\'], [role=\'searchbox\']').fill('page');

    // expect: 出現分類的搜尋結果列表，含符合 'page' 的條目
    await expect(page.getByRole('listbox', { name: 'Search' }).first()).toBeVisible();
    // 驗證搜尋結果中至少有一個 option 項目出現（不硬指定分類名稱，避免 strict mode 錯誤）
    await expect(page.getByRole('option').first()).toBeVisible();
  });
});
