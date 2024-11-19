import { expect, Page, test } from '@playwright/test';

test('validation', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html'); // Replace URL here

    await page.locator("//button[@type='submit']").click();
    await page.waitForTimeout(5000);
    const validationMsg = await page.locator("//input[@id='username']").getAttribute('value');
    console.log(validationMsg);
});