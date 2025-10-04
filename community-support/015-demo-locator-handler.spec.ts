import { test } from '@playwright/test';

test('Demo handle random popup', async ({ page }) => {
    await page.addLocatorHandler(page.locator("#cookie-popup"), async overlay => {
        await overlay.locator("#accept").click();
    })

    await page.goto("website have popup");
    await page.locator("#clickMe").click();
})