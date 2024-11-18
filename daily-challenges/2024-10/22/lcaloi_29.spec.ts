import {expect, test} from '@playwright/test'
// @ts-ignore
import path from "path";

const ACCOUNT_INFO = {
    userName: 'vn84',
    password: 'StrongPassword@123'
}

const authFile = path.join(__dirname, '../../../playwright/.auth/user.json')

test.describe('authenticate', async () => {
    test('Login', async ({page}) => {
        await page.goto('https://material.playwrightvn.com/01-concert-ticket/');
        await page.getByPlaceholder('Tên đăng nhập').fill(ACCOUNT_INFO.userName);
        await page.getByPlaceholder('Mật khẩu').fill(ACCOUNT_INFO.password);
        await page.getByRole('button', {name: 'Đăng nhập'}).click();
        await page.waitForURL((url => url.pathname.includes('01-concert-ticket/index.html')), {
            timeout: 3000,
            waitUntil: 'domcontentloaded'
        })
        console.log('Login thành công');
        await page.context().storageState({path: authFile});
    });
});

test.describe('Book ticket', async ()=>{
    test.use({ storageState: authFile });

    test('Book ticket', async ({page}) =>{
        await page.goto('https://material.playwrightvn.com/01-concert-ticket');
        await page.getByRole('heading', { name: 'Chào mừng đến với trang đặt vé concert' }).isVisible();
        await page.pause();
    })
})
