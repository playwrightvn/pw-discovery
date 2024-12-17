/*
# Playwright challenge
Tập tục trang trí cây thông Noel bắt nguồn từ châu Âu, tượng trưng cho sự sống và hy vọng trong mùa đông giá lạnh. Cây thông thường được trang trí bằng đèn, quả cầu, và ngôi sao, tạo không khí ấm áp, vui tươi cho mùa lễ hội.

# Đề bài:
Hãy viết test cho đề bài sau:
- Truy cập trang: https://material.playwrightvn.com/
- Click vào: Game 05: Trang trí cây thông Noel
- Chọn đúng vật phẩm trang trí, số lượng theo yêu cầu
- Verify thông báo: "Chúc mừng! Bạn đã hoàn thành xuất sắc!" hiển thị
*/

import {test, expect} from '@playwright/test'

test('Decoration', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/')
    await page.locator(`//a[normalize-space(text())='Game 04: Trang trí cây thông Noel']`).click()
    const mission = []
    const rows = await page.locator(`//div[@class='mission']//ul/li`).count()
    for (let i = 1; i <= rows; i++) {
        const items = await page.locator(`//div[@class='mission']//ul/li[${i}]`).innerText()
        const parts = items.split(' ')
        let qty = parseInt(parts[1])
        let name = parts.slice(2).join(' ')
        name = name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
        mission.push({ name: name, quantity: Number(qty) })
    }
    console.log(mission)
    for (const item of mission) {
        const element = await page.locator(`//button[text()="Thêm ${item.name}"]`)
        if (await element.count() > 0) {
            await page.locator(`//button[text()="Thêm ${item.name}"]`).click({ clickCount: item.quantity})
        }
    }
    page.once('dialog', async dialog => {
        const expectedMessage = 'Chúc mừng! Bạn đã hoàn thành xuất sắc!'
        expect(dialog.message()).toBe(expectedMessage)
        await dialog.accept()
    })
})