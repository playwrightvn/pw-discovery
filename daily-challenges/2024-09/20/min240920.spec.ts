import { test, expect } from '@playwright/test'

test("mocks a fruit and doesn't call api", async ({ page }) => {
    // Mock the api call before navigating
    await page.route('https://demo.playwright.dev/api-mocking/api/v1/fruits', async route => {
      const json = [{ name: 'Strawberry', id: 21 }];
      await route.fulfill({ json });
    });
    // Go to the page
    await page.goto('https://demo.playwright.dev/api-mocking');
  
    // Assert that the Strawberry fruit is visible
    await expect(page.getByText('Strawberry')).toBeVisible();
  });