import { test, expect } from '@playwright/test';

test.describe('Automation suite for authentication', async () => {
    // Hooks
    test('Home page Playwright Viet Nam', async ({ page }) => {
        await test.step('Step name', async () => {
            // Step 1: Goto home page
            await page.goto("https://playwrightvn.com")
        })
    
        // Step 2: verify title: "Học Automation Test từ chưa biết gì"
        await expect(page).toHaveTitle("Playwright Việt Nam – Học Automation Test từ chưa biết gì");
    
        // Click master class
        await page.getByRole('link', { name: "Playwright Master Class: From Zero To Hero" }).first().click();
    });
})