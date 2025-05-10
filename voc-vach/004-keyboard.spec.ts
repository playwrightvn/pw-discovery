import { test } from '@playwright/test';

test('Voc vach 04: Keyboard actions', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
    const element = page.locator("#username");

    // Fill text
    // option: force
    // option: timeout
    await element.fill("Playwright Viet Nam", {
        // force: true,
        // timeout: 3_000,
    });
    
    // press: Gõ một phím
    // option: force
    // option: timeout
    // option: delay
    await element.press("a", {
        delay: 2_000,
    });

    // pressSequentially: Gõ từng phím một (một chuỗi các phím)
    await element.pressSequentially("Better Bytes Academy", {
        delay: 200
    });
});