import {test, expect} from '@playwright/test';

test('Verify canary release mode in Playwright documentation', async ({ page }) => {
    await page.goto('https://playwright.dev/docs/test-use-options');
    for ( let i = 0; i < 5; i++){
        await  page.keyboard.press('Shift');
    }
    const message = await page.locator('div.theme-doc-version-banner:has-text("This is unreleased documentation for Playwright Next version.")');
    await expect(message).toBeVisible();
    await expect(page).toHaveURL(/.*docs\/next.*/);
});