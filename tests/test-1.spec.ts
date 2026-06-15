import { test, expect } from '@playwright/test';

test('get started 導覽到安裝文件', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();

  await expect(page).toHaveURL(/.*intro/);
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await expect(page.getByRole('main')).toContainText('Playwright Test');
});
