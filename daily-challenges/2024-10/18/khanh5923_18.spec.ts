import { test, expect } from '@playwright/test';

test('daily 10/18', async ({ page }) => {
    await page.clock.install();
    await page.goto('https://material.playwrightvn.com/026-count-time-in-page.html');
    page.on('dialog', async dialog => {
        const alert = dialog.message();
        expect(alert).toBe('Bạn đã ở lại trang web hơn 5 phút!');
    });
    await page.clock.fastForward('05:00')
});