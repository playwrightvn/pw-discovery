// # Javascript
function getCurrentDate() {
    const curDate = new Date();
    const DAY = curDate.getDate().toString().padStart(2, '0');
    const MONTH = (curDate.getMonth() + 1).toString().padStart(2, '0');
    const YEAR = curDate.getFullYear();
    return `Current date is: ${DAY}/${MONTH}/${YEAR}`;
}

// # Playwright
import { test, expect } from '@playwright/test'

test('should display mocked fruit list from API response', async ({ page }) => {
    // Get the response and add to it
    await page.route('*/**/api/v1/fruits', async route => {

        // Mock the api call before navigating
        const json = [{
            "name": "Cam",
        },
        {
            "name": "Tao",
        },
        {
            "name": "Xoai",
        }];
        await route.fulfill({ json });
    });

    // Go to the page
    await page.goto('https://demo.playwright.dev/api-mocking');

    // Assert that the new fruit is visible
    await expect(page.locator('ul > li')).toContainText(['Cam', 'Tao', 'Xoai']);
});