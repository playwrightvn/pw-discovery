import { test, expect } from '@playwright/test';

test.describe("demo", async () => {
  test('demo scroll dọc', async ({ page }, testInfo) => {
    await page.goto('https://material.playwrightvn.com/029-scroll.html');

    // Scroll to "Sản phẩm 48" in the internal scroll container
    const product48 = page.locator('#internalScrollContainer').locator('text="Sản phẩm 48"');
    await product48.scrollIntoViewIfNeeded();
  });

  test('demo scroll ngang', async ({ page }, testInfo) => {
    await page.goto('https://material.playwrightvn.com/029-scroll.html');

    // Scroll to Image 15 in #galleryContainer (horizontal scroll)
    const image15 = page.locator('#galleryContainer').locator('text="Image 15"');
    await image15.scrollIntoViewIfNeeded();
  });

  test('demo scroll lazy load', async ({ page }, testInfo) => {
    await page.goto('https://material.playwrightvn.com/029-scroll.html');

    const container = page.locator('#lazyInternalScrollContainer');
    await container.scrollIntoViewIfNeeded();
    const targetProduct = container.locator('text="Lazy Product 100"');

    // Keep scrolling until the target product is loaded
    let attempts = 0;
    const maxAttempts = 30;

    while (attempts < maxAttempts) {
      // Check if the target product exists
      const count = await targetProduct.count();
      if (count > 0) {
        break;
      }

      // Scroll to the bottom of currently loaded content
      await container.evaluate(el => {
        el.scrollTop = el.scrollHeight;
      });

      // Wait for lazy loading to complete
      await page.waitForTimeout(500);
      attempts++;
    }

    // Now scroll the target product into view and verify it's visible
    await targetProduct.scrollIntoViewIfNeeded();
    await expect(targetProduct).toBeVisible();
  });
})