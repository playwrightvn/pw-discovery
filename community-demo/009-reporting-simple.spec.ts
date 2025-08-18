import test, { expect } from "@playwright/test";

test.describe("Demo reporting", () => {
    test('@TC001 should pass successfully', async ({ page }) => {
        await page.goto('https://playwright.dev/');
        await expect(page).toHaveTitle(/Playwright/);
    });

    test('@TC002 should demonstrate a failure', async ({ page }) => {
        await page.goto('https://playwright.dev/');
        await expect(page).toHaveTitle('This will fail');
    });

    test.skip('@TC003 should be skipped', async ({ page }) => {
        await page.goto('https://playwright.dev/');
    });

    test('@TC004 should pass after retry', async ({ page }) => {
        const randomNum = Math.random();
        if (randomNum < 0.5) {
            throw new Error('Random failure for retry demonstration');
        }
        await page.goto('https://playwright.dev/');
        await expect(page).toHaveTitle(/Playwright/);
    });

    test('Test without case ID', async ({ page }) => {
        await page.goto('https://playwright.dev/');
        await expect(page.locator('text=Get started')).toBeVisible();
    });
});