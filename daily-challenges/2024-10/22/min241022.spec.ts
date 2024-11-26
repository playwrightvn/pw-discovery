/*
# Playwright
- Concert "Anh trai vượt ngàn chông gai" là một concert cực hot.
- Vé của concert thường được sold out trong 2 phút.
- Bạn là một fan của chương trình, muốn sử dụng Playwright để viết code automation và mua vé.
- Biết trang web đặt vé là:
  - https://material.playwrightvn.com/01-concert-ticket/
  - Tài khoản và mật khẩu đăng nhập: vn84 / StrongPassword@123

## Đề bài:
Viết code cho test case sau:
- Test group 1:
  - Name: authenticate
  - Test cases:
    - Test 1:
      - Name: Login
      - Step:
        - Step 1: Fill username, password
        - Step 2: Click button login
        - Step 3: Save authentication information to `const authFile = path.join(__dirname, '../../../playwright/.auth/user.json')`
- Test group 2:
  - Name: Book ticket
  - Test cases:
    - Test 1:
      - Name: Book ticket
      - Sử dụng lại authentication information từ test group 1
      - Step:
        - Step 1: Truy cập trang: https://material.playwrightvn.com/01-concert-ticket, verify heading xuất hiện mà không cần đăng nhập: "Chào mừng đến với trang đặt vé concert"
        - Step 1: Click button "Đặt vé", hạng vé: "Phát Tài và Tinh Tú". Verify popup xuất hiện
        - Step 2: Đặt 2 vé. Verify sau khi bấm xác nhận, alert hiển thị thông tin đặt vé thành công: 
        ```
        Đặt vé thành công!
        Hạng vé: Phát Tài và Tinh Tú
        Số lượng: 2
*/
import test, { test as setup, expect } from '@playwright/test'
import path from 'path'

const authFile = path.join(__dirname, '../playwright/.auth/user.json')
const username = 'vn84'
const pwd = 'StrongPassword@123'


test.describe('authenticate', () => {
    test('Login', async ({ page }) => {
        await page.goto('https://material.playwrightvn.com/01-concert-ticket/login.html')
        await page.locator(`//input[@id="username"]`).fill(username)
        await page.locator(`//input[@id="password"]`).fill(pwd)
        await page.click('//button[@id="login-btn"]')
        await expect(page.getByRole('heading', { name: 'Chào mừng đến với trang đặt vé concert' })).toBeVisible()
        await page.context().storageState({ path: authFile })
    }) 
})

test.describe('Book ticket', () => {
    test.use({ storageState: authFile })
    test('Book ticket', async({ page }) => {
        await page.goto('https://material.playwrightvn.com/01-concert-ticket/login.html')
        await expect(page.getByRole('heading', { name: 'Chào mừng đến với trang đặt vé concert' })).toBeVisible()
        await page.locator(`//button[@data-ticket-name='Phát Tài và Tinh Tú']`).click()
        await expect(page.locator(`//div[@id='popup']`)).toBeVisible()
        await expect(page.getByRole('heading', { name: 'Đặt vé concert', exact: true})).toBeVisible()
        await page.locator('//input[@id="ticket-quantity"]').fill('2')
        await page.getByRole('button', { name: 'Xác nhận' }).click()
    
        page.once('dialog', async dialog => {
            const expectedMessage = 'Đặt vé thành công!\nHạng vé: Phát Tài và Tinh Tú\nSố lượng: 2'
            expect(dialog.message()).toBe(expectedMessage)
            await dialog.accept()
        })
    })
    
})

