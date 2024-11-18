import {test, expect, Page} from '@playwright/test';

test('Solution 06/10/2024', async ({page}) => {
    await expect.poll(
        async () => {
            await page.goto("https://material.playwrightvn.com/019-enable-form.html");
            return page.locator("//span[@id='inputDelay']").textContent();
        },
        {
            timeout: 30 * 1000,
            intervals: [1000]
        }
    ).toBe("7")
});