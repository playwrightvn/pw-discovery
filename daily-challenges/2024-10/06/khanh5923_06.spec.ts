import { test, expect } from '@playwright/test';

test('daily 10/06', async ({ page }) => {
    await expect.poll(async () => {
        await page.goto('https://material.playwrightvn.com/019-enable-form.html');
        const number = await page.locator(`//span[@id='inputDelay']`).textContent();
        return Number(number);
    }, {
        intervals: [1_000],
        timeout: 8_000
    }).toBeGreaterThan(7);
});