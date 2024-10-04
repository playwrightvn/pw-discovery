//Javascript

function calculateTip(totalBill, tipPercentage) {
  const tipAmount = (totalBill * tipPercentage) / 100;
  return tipAmount;
}

const totalBill = 100;
const tipPercentage = 15;
const tip = calculateTip(totalBill, tipPercentage);
console.log(`Tiền tip: ${tip}`);

// Playwright

import { test, expect } from '@playwright/test';

test('2024-09 day 26', async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/021-import-export.html");

  let searchBtn = page.locator('#searchButton');
  async function filterByClass(page, className) {
    await page.selectOption('#filterCriteria', 'Lớp');
    await page.fill("#searchInput", className);
    await searchBtn.click();
  }

  await filterByClass(page, 'A4');
  let visibleCount = 0
  let rows = await page.locator('#studentTable tbody tr').all();
  for (const row of rows) {
      if (await row.isVisible()) {
          const classCell = row.locator('td').nth(2);
          await expect(classCell).toContainText('A4');
          visibleCount++;
      }
  }
  expect(visibleCount).toBe(1);

  await page.fill("#searchInput", "");
  await searchBtn.click();

  visibleCount = 0;
  for (const row of rows) {
      if (await row.isVisible()) {
          visibleCount++;
      }
  }
  expect(visibleCount).toBe(rows.length);
});