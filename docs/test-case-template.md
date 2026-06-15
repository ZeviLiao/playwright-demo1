# 測試案例產生 Prompt（精簡版）

> 用途：餵給 AI（Claude）的指令，直接產出 Playwright 測試碼。
> 特色：規格與測試碼**合在同一份 `.spec.ts`**，不另外產獨立的案例文件（適合單人 / 練習）。
> 用法：對 AI 說「照 `docs/test-case-template.md`，幫我產生 XX 功能的 Playwright 測試」。

---

## Prompt 內容

請為 [功能 / 頁面] 產生 Playwright 自動化測試（`.spec.ts`），規則如下：

1. **每個測試前，用 JSDoc 註解寫出規格**，包含以下欄位：
   - 測試案例 X.Y：[清楚且具描述性的標題]
   - 優先順序：[高/中/低]
   - 分類：[功能/介面]
   - 前置條件：[需要的環境或設定]
   - 預期結果：[整體測試後的最終結果]
   - 驗收標準：[通過/失敗的判斷依據]

2. **測試碼本身用 AAA 結構**，並以註解標出三段：
   - Arrange（準備）：設定前置條件、準備測試資料
   - Act（執行）：執行被測試的動作
   - Assert（驗證）：檢查結果是否符合預期（＝驗收標準）

3. **`test('X.Y 標題', ...)` 的名稱帶上案例編號**，方便對照 Playwright report。

4. **斷言前先驗證真實頁面結構**（用真實的 role / text / href），不要憑印象寫。

---

## 產出範例（節錄）

```ts
import { test, expect } from '@playwright/test';

test.describe('playwright.dev 首頁', () => {
  /**
   * 測試案例 1.2：點擊導覽列 Docs 可進入安裝文件頁
   * 優先順序：高
   * 分類：功能
   * 前置條件：已在首頁
   * 預期結果：成功進入文件安裝頁
   * 驗收標準：URL 為 /docs/intro 且 title 含 "Installation" → 通過
   */
  test('1.2 點擊 Docs 進入安裝文件頁', async ({ page }) => {
    // Arrange：在首頁
    await page.goto('/');
    // Act：點擊導覽列 Docs
    await page.getByRole('link', { name: 'Docs' }).click();
    // Assert：導向 /docs/intro 且 title 變為 Installation（＝驗收標準）
    await expect(page).toHaveURL(/\/docs\/intro/);
    await expect(page).toHaveTitle(/Installation \| Playwright/);
  });
});
```
