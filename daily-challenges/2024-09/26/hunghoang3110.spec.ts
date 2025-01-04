// Javascript
function calculateTip(totalRep, perTip) {
    if (typeof totalRep !== 'number' || typeof perTip !== 'number' || totalRep <= 0 || perTip < 0 ) {
        throw new Error('Inputs must be a positive number');
    }
    return totalRep * perTip / 100
}

// Playwright
import { test, expect } from '@playwright/test';

test('filter student database', async ({ page }) => {

  // Navigate to data page
  await page.goto('https://material.playwrightvn.com/021-import-export.html');
  await expect(page).toHaveTitle('Quản Lý Dữ Liệu Học Sinh');
  const rows = await page.locator('tbody > tr').count()

  // Filter and verify
  await page.getByRole('combobox').selectOption('lop')
  await page.getByPlaceholder('Nhập nội dung tìm kiếm...').fill('A4');
  await page.getByRole('button', { name: 'Tìm kiếm' }).click();
  let visibleRows = await page.locator('tbody > tr:not([style*="display: none"])');

  await expect(visibleRows).toHaveCount(1, { timeout: 5000 });
  await expect(visibleRows.locator('td').nth(2))
        .toContainText('A4');

  // Remove filter and verify
  await page.getByPlaceholder('Nhập nội dung tìm kiếm...').fill('');
  await page.getByRole('button', { name: 'Tìm kiếm' }).click();
  await expect(visibleRows).toHaveCount(rows, { timeout: 5000 });

});