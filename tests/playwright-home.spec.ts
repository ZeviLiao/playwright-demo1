import { test, expect } from '@playwright/test';

// 規格（模板欄位）直接寫在每個 test 上方的註解，測試碼以 AAA 結構撰寫。
// AAA：Arrange（準備）/ Act（執行）/ Assert（驗證）

test.describe('playwright.dev 首頁', () => {
  /**
   * 測試案例 1.1：首頁標題與主標題正確顯示
   * 優先順序：高
   * 分類：功能
   * 前置條件：可連線到 https://playwright.dev/
   * 預期結果：首頁正確載入，標題與 H1 主標題皆正確
   * 驗收標準：title 含 "Playwright" 且 H1 可見 → 通過；否則失敗
   */
  test('1.1 首頁標題與主標題正確顯示', async ({ page }) => {
    // Arrange + Act：開啟首頁
    await page.goto('/');

    // Assert：title 含 Playwright，且 H1 主標題可見
    await expect(page).toHaveTitle(/Playwright/);
    await expect(
      page.getByRole('heading', {
        level: 1,
        name: /Playwright enables reliable web automation/i,
      })
    ).toBeVisible();
  });

  /**
   * 測試案例 1.2：點擊導覽列 Docs 可進入安裝文件頁
   * 優先順序：高
   * 分類：功能
   * 前置條件：已在首頁
   * 預期結果：成功進入文件安裝頁
   * 驗收標準：URL 為 /docs/intro 且 title 含 "Installation" → 通過；否則失敗
   */
  test('1.2 點擊 Docs 進入安裝文件頁', async ({ page }) => {
    // Arrange：在首頁
    await page.goto('/');

    // Act：點擊導覽列 Docs
    await page.getByRole('link', { name: 'Docs' }).click();

    // Assert：導向 /docs/intro 且 title 變為 Installation
    await expect(page).toHaveURL(/\/docs\/intro/);
    await expect(page).toHaveTitle(/Installation \| Playwright/);
  });

  /**
   * 測試案例 1.3：導覽列關鍵連結與外部連結存在
   * 優先順序：中
   * 分類：介面
   * 前置條件：已在首頁
   * 預期結果：導覽列關鍵連結齊全且指向正確
   * 驗收標準：Docs/API 連結可見且 GitHub href 正確 → 通過；否則失敗
   */
  test('1.3 導覽列關鍵連結與 GitHub 外部連結存在', async ({ page }) => {
    // Arrange：在首頁
    await page.goto('/');

    // Act：取得導覽列
    const nav = page.getByRole('navigation', { name: 'Main' });

    // Assert：Docs / API 可見，GitHub 連結 href 正確
    await expect(nav.getByRole('link', { name: 'Docs' })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'API' })).toBeVisible();
    await expect(
      nav.getByRole('link', { name: 'GitHub repository' })
    ).toHaveAttribute('href', 'https://github.com/microsoft/playwright');
  });

  /**
   * 測試案例 1.4：頁尾版權資訊顯示 Microsoft
   * 優先順序：低
   * 分類：介面
   * 前置條件：已在首頁
   * 預期結果：頁尾版權資訊正確顯示
   * 驗收標準：頁尾文字含 "Microsoft" → 通過；否則失敗
   */
  test('1.4 頁尾版權資訊顯示 Microsoft', async ({ page }) => {
    // Arrange：在首頁
    await page.goto('/');

    // Act：定位頁尾
    const footer = page.locator('footer');

    // Assert：頁尾含 Microsoft
    await expect(footer).toContainText('Microsoft');
  });
});
