/*
# Playwright challenge
Bạn đang nhận nhiệm vụ quan trọng: đi chợ giúp mẹ

## Đề bài:
Hãy code để đi chợ giúp mẹ:
- Truy cập trang: https://material.playwrightvn.com/games/001-di-cho.html
- Thêm các sản phẩm vào giỏ hàng theo "Danh sách đi chợ"
- Bấm nút "Kiểm tra kết quả"
- Verify kết quả hiển thị: "Bạn đã đi chợ chính xác!"
*/

import {test, expect} from '@playwright/test'

test('Go to the market', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/games/001-di-cho.html')
    const shoppingList = []
    const rows = await page.locator('//tbody[@id="wishlist"]/tr').count()
    for (let i = 1; i <= rows; i++) {
        const items = await page.locator(`//tbody[@id="wishlist"]/tr[${i}]/td[1]`).innerText()
        const qty = await page.locator(`//tbody[@id="wishlist"]/tr[${i}]/td[2]`).innerText()
        shoppingList.push({name: items, quantity: Number(qty)})
    }
    
    const pages = await page.locator(`//div[@class="right-column"]/div`).count()

    for (let i = 0; i < pages && shoppingList.length > 0; i++) {

        for (const item of shoppingList) {
            const element = await page.locator(`//div[text() = '${item.name}']`)
            if (await element.count() > 0) {
                await page.locator(`//button[@onclick="changeQuantity('${item.name}', 1)"]`).click({ clickCount: item.quantity})
            } else {
                await page.locator('button:has-text("Trang sau")').click()
                await page.waitForLoadState()
                if (await element.count() > 0) {
                    for (const item of shoppingList) {
                        if (await element.count() > 0) {
                            await page.locator(`//button[@onclick="changeQuantity('${item.name}', 1)"]`).click({ clickCount: item.quantity})
                        }
                    }
                } else {
                    await page.locator('button:has-text("Trang trước")').click()
                    await page.waitForLoadState()
                    for (const item of shoppingList) {
                        if (await element.count() > 0) {
                            await page.locator(`//button[@onclick="changeQuantity('${item.name}', 1)"]`).click({ clickCount: item.quantity})
                        }
                    }
                }
            }
        }
    }    
    await page.locator(`//button[@class="check-result"]`).click()
    page.once('dialog', async dialog => {
        const expectedMessage = 'Bạn đã đi chợ chính xác!'
        expect(dialog.message()).toBe(expectedMessage)
        await dialog.accept()
    })
})

