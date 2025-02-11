import {expect, test} from '@playwright/test';
import path from "path";

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

test.describe('authenticate', () => {
    test('Login', async ({page}) => {
        const testUser = {
            username: 'vn84',
            password: 'StrongPassword@123'
        }
        // Perform authentication steps.
        await page.goto('https://material.playwrightvn.com/01-concert-ticket/');
        await expect(page).toHaveTitle('Đăng nhập');
        await page.getByPlaceholder('Tên đăng nhập')
            .fill(testUser.username);
        await page.getByPlaceholder('Mật khẩu')
            .fill(testUser.password);
        await page.getByRole('button', {name: 'Đăng nhập'})
            .click();

        // Wait until the page reaches a state where all cookies are set.
        await expect(page).toHaveTitle('Đặt Vé Concert');

        // End of authentication steps.
        await page.context().storageState({path: authFile});
    });
});

test.describe('Book ticket', () => {
    test.use({
        storageState: 'playwright/.auth/user.json', // Path to the saved authentication state
    });
    test('Book ticket', async ({page}) => {
        // Set up dialog handler first
        page.on('dialog', dialog => {
            expect(dialog.message()).toBe('Đặt vé thành công! \nHạng vé: Phát Tài và Tinh Tú \nSố lượng: 2');
            dialog.accept();
        });
        // Navigate to the page
        await page.goto('https://material.playwrightvn.com/01-concert-ticket');
        expect(page.getByRole('heading', {name: /Chào mừng đến với trang đặt vé concert/}));
        // Book ticket
        const ticketSection = page.locator('.ticket-category')
            .filter({has: page.getByRole('heading', {name: /Phát Tài và Tinh Tú/})});
        await ticketSection
            .getByRole('button', {name: 'Đặt vé'})
            .click();
        await page.getByPlaceholder('Số lượng vé')
            .fill('2');
        await page.getByRole('button', {name: 'Xác nhận'})
            .click();
    })
});
