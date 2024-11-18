import {expect, test} from '@playwright/test'

const ACCOUNT_INFO = {
    userName: 'vn84',
    password: 'StrongPassword@123'
}

test.describe('Solution 21/10/2024', async () => {
    test.beforeEach('Login', async ({page}) => {
        await page.goto('https://material.playwrightvn.com/01-concert-ticket/');
        await page.getByPlaceholder('Tên đăng nhập').fill(ACCOUNT_INFO.userName);
        await page.getByPlaceholder('Mật khẩu').fill(ACCOUNT_INFO.password);
        await page.getByRole('button', {name: 'Đăng nhập'}).click();
        await page.waitForURL((url => url.pathname.includes('01-concert-ticket/index.html')), {
            timeout: 3000,
            waitUntil: 'domcontentloaded'
        })
        console.log('Login thành công')
    });

    test.afterEach('Logout', async ({page}) => {
        await page.getByRole('button', {name: 'Đăng xuất'}).click();
        await page.waitForURL((url => url.pathname.includes('01-concert-ticket/login.html')), {
            timeout: 3000,
            waitUntil: 'domcontentloaded'
        });
        console.log('Logout thành công')

    })

    test('OrderTicket', async ({page}) => {
        await page.locator('//button[@data-ticket-name="Hỏa lực 1,2,3,4"]').click();
        await page.getByPlaceholder('Số lượng vé').fill('1');
        await page.getByRole('button', {name: 'Xác nhận'}).click();
        await expect(page.locator('#cart-count')).toHaveText('1');
        await page.locator('#cart-icon').click();
        await expect(page.locator('#total-price')).toContainText('1,800,000');
        await page.getByRole('button', {name: 'Trở về trang chủ'}).click();
    });


})
