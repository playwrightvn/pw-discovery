import { test, expect } from '@playwright/test';

test('2024-10-06', async ({ page }) => {
    await expect.poll(
        async () => {
            await page.goto("https://material.playwrightvn.com/019-enable-form.html");
            return page.locator("//span[@id='inputDelay']").textContent();
        },
        {
            timeout: 30_000,
            intervals: [2_000]
        }
    ).toBe("7");
})