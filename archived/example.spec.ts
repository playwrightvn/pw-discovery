import { test, expect } from '@playwright/test';

test('<tên test>', async ({ page }) => {
  // Code của test
});

test('get started link', async ({ page }) => {
  await page.locator("//button").dblclick();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
