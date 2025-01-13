import { test, expect } from '@playwright/test';
const testData = {
    text: 'This is unreleased documentation for Playwright Next version.',
    url: `docs/next`
}

test('daily 10/23', async ({ page }) => {
    await page.goto(`https://playwright.dev/docs/test-use-options`);
    for (let i = 1; i <= 5; i++) {
        await page.keyboard.press('Shift');
    }
    await page.waitForTimeout(100);
    const testVersion = page.locator(`//div[@role='alert']//div[1]`);
    const urlVersion = page.url();
    await expect(testVersion).toContainText(testData.text);
    expect(urlVersion.includes(testData.url)).toBe(true);
});