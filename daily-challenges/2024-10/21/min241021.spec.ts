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
- beforeEach: login vào hệ thống
- afterEach: logout
- test case:
  - Đặt vé: Hỏa lực 1,2,3,4
  - Verify giỏ hàng có 1 sản phẩm
  - Đi tới trang giỏ hàng
  - Verify tổng tiền đúng với giá đã thêm ngoài trang chủ
*/
import { test, expect } from '@playwright/test'
let username = 'vn84'
let pwd = 'StrongPassword@123'
let quantity = '1'

test.describe('Authentication Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/01-concert-ticket/login.html')
    await page.locator(`//input[@id="username"]`).fill(username)
    await page.locator(`//input[@id="password"]`).fill(pwd)
    await page.click('//button[@id="login-btn"]')
  })

  test.afterEach(async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/01-concert-ticket/login.html')
    await page.click('//button[@id="logout-btn"]')
  })

  test('2024-10-21', async ({ page }) => {
    await page.locator('//button[@data-ticket-name="Hỏa lực 1,2,3,4"]').click()
    const button = await page.$('button.btn-book-ticket')
    const ticketPrice = await button.getAttribute('data-ticket-price')
    const formattedPrice = new Intl.NumberFormat().format(ticketPrice)
    page.on('dialog', async dialog => {
        console.log(dialog.message())
        await dialog.accept()
    })
    await page.locator(`//input[@id="ticket-quantity"]`).fill(quantity)
    await page.getByRole("button", {name: 'Xác nhận'}).click()
    const qty = await page.locator('//span[@id="cart-count"]').innerText()
    console.log(qty)
    expect(qty).toEqual(quantity)
    await page.locator(`//div[@id="cart-icon"]`).click()
    await expect(page.getByRole('heading', { name: 'Giỏ hàng của bạn' })).toBeVisible()
    expect(await page.locator(`//div[@id="total-price"]`).innerText()).toContain(formattedPrice)
  })

})

