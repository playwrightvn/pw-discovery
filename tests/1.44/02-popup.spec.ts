import { test, expect } from '@playwright/test';

test('Demo popup', async( { page }) => {
  await page.addLocatorHandler(page.locator("#myForm"), async overlay => {
    await overlay.locator("#close").click();
  })
  
  await page.goto("http://127.0.0.1:5500/html/1.44/html/02-popup.html");
  await page.waitForTimeout(4000);
  await page.locator("#clickMe").click();

  await page.waitForTimeout(2000);
  await page.locator("#clickMe").click();
})