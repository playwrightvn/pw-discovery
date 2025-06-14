import { test, expect } from '@playwright/test';
import path from 'path';
const authFile = path.join(__dirname, '../../../playwright/.auth/user.json');
test.describe('authenticate', () => {
    test('login', async ({ page }) => {
        await page.goto('https://material.playwrightvn.com/01-concert-ticket/');
        await page.fill(`//input[@id='username']`, 'vn84');
        await page.fill(`//input[@id="password"]`, 'StrongPassword@123');
        await page.click(`//button[@id='login-btn']`);
        await page.waitForURL(`https://material.playwrightvn.com/01-concert-ticket/index.html`);
        await page.context().storageState({ path: authFile });
    });
});

test.describe('Book ticket', () => {
    test.use({ storageState: authFile });
    test('Book ticket', async ({ page }) => {
        await page.goto('https://material.playwrightvn.com/01-concert-ticket/');
        expect(await page.locator(`//h1[contains(text(),'Chào mừng đến với trang đặt vé concert')]`).textContent()).toContain('Chào mừng đến với trang đặt vé concert');
        await page.click(`//button[@data-ticket-name='Phát Tài và Tinh Tú']`);
        expect(page.locator(`//div[@id='popup']`)).toBeVisible();
        await page.fill(`//input[@id='ticket-quantity']`, '2');
        page.on('dialog', async dialog => {
            const messageSuccess = dialog.message().trim().replace(/\s+/g, ' ');
            expect(messageSuccess).toContain(`Đặt vé thành công! Hạng vé: Phát Tài và Tinh Tú Số lượng: 2`);
            await dialog.accept();
        });
        await page.click(`//button[@class='btn-confirm']`);
    });
});
