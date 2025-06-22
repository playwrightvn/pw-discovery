import { test, expect } from '@playwright/test';

test('Fast forwards the time using Clock api', async ({ page }) => {
    // Set up dialog handler first
    page.on('dialog', dialog => {
        expect(dialog.message()).toBe('Bạn đã ở lại trang web hơn 5 phút!');
        dialog.accept();
    });
    // Pick current time
    await page.clock.install();
    // Navigate to the page
    await page.goto('https://material.playwrightvn.com/026-count-time-in-page.html');
    // Fast forward time 5 minutes
    await page.clock.fastForward('05:00');
});