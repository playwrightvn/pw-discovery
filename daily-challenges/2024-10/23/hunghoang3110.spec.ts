import {expect, test} from '@playwright/test';

test('Canary reelease', async ({ page }) => {
    await page.goto('https://playwright.dev/docs/test-use-options');
    for (let index = 0; index < 5; index++) {
        await page.keyboard.press('Shift');
    }
    await expect(page.getByText(/This is unreleased documentation for Playwright Next version./)).toBeVisible();
    await expect(page).toHaveURL(/.*docs\/next/);
});