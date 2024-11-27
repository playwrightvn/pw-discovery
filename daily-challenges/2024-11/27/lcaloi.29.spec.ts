import { expect, Locator, test } from '@playwright/test';

test('solution for day 27/11/24', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await expect(page.locator(`a[href='games/003-vi-tinh-tu.html']`)).toBeVisible();
    await page.click(`a[href='games/003-vi-tinh-tu.html']`);
    const targetName = await page.locator(`span#target-name`).textContent();
    expect(targetName).toBeTruthy();
    const mysteryBoxTarget: Locator = page.locator(`//*[@class='constellation-name' and text()='${targetName}']`);
    page.on('dialog', async dialog => {
        await dialog.accept();
    });
    await mysteryBoxTarget.click();
})