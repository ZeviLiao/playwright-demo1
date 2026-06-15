# Playwright 官網首頁測試計畫

## Application Overview

針對 https://playwright.dev/ 首頁的核心功能測試計畫，只涵蓋最關鍵的幾個使用者可見功能與導覽流程。

## Test Scenarios

### 1. 首頁核心功能

**Seed:** ``

#### 1.1. 驗證首頁標題與 URL

**File:** `tests/homepage/page-title.spec.ts`

**Steps:**
  1. 開啟瀏覽器並導覽至 https://playwright.dev/
    - expect: 頁面 URL 為 https://playwright.dev/
    - expect: 網頁標題為 'Fast and reliable end-to-end testing for modern web apps | Playwright'

#### 1.2. 驗證 Hero 區主標語文字

**File:** `tests/homepage/hero-heading.spec.ts`

**Steps:**
  1. 導覽至 https://playwright.dev/
    - expect: H1 標題文字為 'Playwright enables reliable web automation for testing, scripting, and AI agents.'

#### 1.3. 點擊 Get started 導覽至安裝文件頁

**File:** `tests/homepage/hero-get-started.spec.ts`

**Steps:**
  1. 導覽至 https://playwright.dev/
  2. 點擊 Hero 區的 'Get started' 連結
    - expect: 頁面導覽至 https://playwright.dev/docs/intro
    - expect: 出現 'Installation' 標題

#### 1.4. 搜尋功能顯示即時結果

**File:** `tests/homepage/search.spec.ts`

**Steps:**
  1. 導覽至 https://playwright.dev/
  2. 點擊導覽列右側的搜尋按鈕
    - expect: 搜尋彈窗出現，輸入框取得焦點
  3. 在搜尋框輸入 'page'
    - expect: 出現分類的搜尋結果列表，含符合 'page' 的條目
