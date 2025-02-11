import { test, expect } from '@playwright/test';

test('Solution 23/10/24', async ({ page }) => {
    await page.goto('https://playwright.dev/docs/test-use-options');
    for (let i = 0; i < 5; i++) {
        await page.keyboard.press('Shift');
    }
    const message = page.locator('div.theme-doc-version-banner');
    await expect(message).toBeVisible();
    await expect(page).toHaveURL(/.*docs\/next.*/);
});