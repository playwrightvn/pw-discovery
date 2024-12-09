/*
# Playwright challenge
Túi mù, hay còn gọi là “blind bag” hoặc “mystery bag,” là loại sản phẩm chứa những món đồ ngẫu nhiên, khách hàng không biết trước nội dung bên trong cho đến khi mở túi.

# Đề bài:
Hãy viết test cho đề bài sau:
- Truy cập trang: https://material.playwrightvn.com/
- Click vào: Game 04: Túi mù pokemon
- Chọn đúng pokemon theo yêu cầu. Khi tìm được Pokemon, hãy dừng lại.
*/

import {test, expect} from '@playwright/test'

test('Find Pokemon', async ({ page }) => {
    const regex = /Tìm Pokemon: (.+)/
    await page.goto(`https://material.playwrightvn.com/`)
    await page.locator(`//a[normalize-space(text())='Game 04: Túi mù pokemon']`).click()
    await page.waitForLoadState()
    let pokemon = await page.locator(`//div[@id="target-pokemon"]`).innerText()
    const targetName = pokemon.slice(pokemon.indexOf(': ') + 2).trim()
    const numberOfBags = await page.locator(`//div[@class="mystery-bags"]/div`).count()
    for(let i = 1; i <= numberOfBags; i++){
        await page.locator(`//div[@class="mystery-bags"]/div[${i}]`).click()
        await page.waitForLoadState()
        let bag = await page.locator(`//div[@class="bag opened"][${i}]//div[@class="pokemon-name"]`).innerText()
        if(bag == targetName){
            await expect(page.locator(`//div[@id='result']`)).toHaveText(`Chúc mừng! Bạn đã tìm thấy ${targetName}!`)
            break
        } 
        if(bag != targetName){
            await expect(page.locator(`//div[@id='result']`)).toHaveText(`Tiếp tục tìm kiếm! Đây là ${bag}`)
        }
    }
})