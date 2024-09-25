//javaScript
let array = [3, 7, 2, 5, 9]
function findLargestNumber(arr){
    return Math.max.apply(null, arr)
}
console.log('So lon nhat la: ',findLargestNumber(array))

//playwright
import {test, expect} from '@playwright/test'
async function checkContent(page, count, type, key) {
    let clickCount = page.locator(`//p[@id='clickCount']`)
    let clickType = page.locator(`//p[@id='clickType']`)
    let modifierKeys = page.locator(`//p[@id='modifierKeys']`)
    expect(await clickCount.textContent()).toContain(count)
    expect(await clickType.textContent()).toContain(type)
    expect(await modifierKeys.textContent()).toContain(key)
}
test('basic test', async ({ page }) => {
    const testData = {
        sigleClick : {
            count: `Số lần nhấn: 1`,
            type: `Loại nhấn: Đơn`,
            key: `Phím kèm theo: Không có`
        },
        doubleClick : {
            count: `Số lần nhấn: 3`,
            type: `Loại nhấn: Đúp`,
            key: `Phím kèm theo: Không có`
        },
        modifierKey : {
            count: `Số lần nhấn: 4`,
            type: `Loại nhấn: Đơn`,
            key: `Phím kèm theo: Shift` 
        }
    }
    await page.goto('https://material.playwrightvn.com/');
    await page.click(`//a[contains(text(),'Bài học 5: Xử lý mouse event')]`)
    const clickArea = page.locator(`//div[@id='clickArea']`)
    // 1 click
    await clickArea.click()
    checkContent(page, testData.sigleClick.count, testData.sigleClick.type, testData.sigleClick.key)
    // 2 click
    await clickArea.dblclick()
    await page.waitForTimeout(500);
    checkContent(page, testData.doubleClick.count, testData.doubleClick.type, testData.doubleClick.key)
    // 1 nhan shift + 1 click
    await page.keyboard.down('Shift');
    await clickArea.click()
    checkContent(page, testData.modifierKey.count, testData.modifierKey.type, testData.modifierKey.key)
});

