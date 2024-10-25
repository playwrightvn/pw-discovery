import { test, expect } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../../../playwright/.auth/user.json');
interface User {
    username: string;
    password: string;
}
const user: User = {
    username: 'vn84',
    password: 'StrongPassword@123'
};

test.describe('Authentication', () =>{
    test('Login', async ({ page }) => {
        await page.goto('https://material.playwrightvn.com/01-concert-ticket/');
        await page.locator('//*[@id="username"]').fill(user.username);
        await page.locator('//*[@id="password"]').fill(user.password);
        await page.locator('//*[@id="login-btn"]').click();
        
        await page.waitForSelector('//*[@id="logout-btn"]');
        await page.context().storageState({ path: authFile });
    })
})

test.describe('Book ticket',() => {
    test.use({ storageState: authFile });

    test('Book ticket', async ({ page }) => {
        await page.goto('https://material.playwrightvn.com/01-concert-ticket/');
        await page.getByRole('heading', { name: 'Chào mừng đến với trang đặt vé concert' }).isVisible();

        await page.locator('//*[@id="ticket-section"]/div[3]/button').click();
        await page.locator('//*[@id="ticket-quantity"]').fill('2');
        await page.getByRole('button', { name: 'Xác nhận' }).click();
    
        page.once('dialog', async dialog => {
            const expectedMessage = 'Đặt vé thành công!\nHạng vé: Phát Tài và Tinh Tú\nSố lượng: 2';
            expect(dialog.message()).toBe(expectedMessage);
            await dialog.accept();
        })
    })
})

