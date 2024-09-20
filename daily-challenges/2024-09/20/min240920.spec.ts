/*
# Javascript
## Đề bài:
Tìm số lớn nhất trong mảng.

Cho một mảng các số nguyên, bạn cần tìm ra số lớn nhất trong mảng đó. Trong bài tập này, bạn sẽ viết một hàm để thực hiện việc tìm kiếm số lớn nhất.

### Yêu cầu:
- Viết một hàm JavaScript có tên findLargestNumber để tìm số lớn nhất trong một mảng các số nguyên.
- Nếu mảng rỗng, trả về thông báo "Mảng rỗng".
*/

function findLargestNumber (arr) {
    if (arr.length === 0){
        return 'Mảng rỗng'
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

let arr = [1, 5, 4, 7, 3, 9, 0, 12, 2, 8, 19, 6]
let max = findLargestNumber(arr)
console.log(max)

/*
# Playwright
## Đề bài
Viết code automation cho test case sau:
- Đi tới trang: https://material.playwrightvn.com/
- Click vào: Bài học 5: Xử lý mouse event
- Click vào ô: "Nhấn hoặc nhấn đúp vào đây!"
- Kiểm tra: số lần nhấn = 1, loại nhấn: đơn, phím kèm theo: không có
- Double click vào ô: "Nhấn hoặc nhấn đúp vào đây!"
- Kiểm tra: số lần nhân = 3, loại nhấn: đúp, phím kèm theo: không có
- Giữ shift và click vào ô: "Nhấn hoặc nhấn đúp vào đây!"
- Kiểm tra: số lần nhấn = 4, loại nhấn: đơn, phím kèm theo: Shift
*/

import { test, expect } from '@playwright/test'
import exp from 'constants'

test('min240920', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/")
    await page.locator(`//a[normalize-space(text())='Bài học 5: Xử lý mouse event']`).click()
    await page.locator(`//div[@class="click-area"]`).click()
    await expect(page.locator(`//p[@id="clickCount"]`)).toHaveText('Số lần nhấn: 1')
    await expect(page.locator(`//p[@id="clickType"]`)).toHaveText('Loại nhấn: Đơn')
    await expect(page.locator(`//p[@id="modifierKeys"]`)).toHaveText('Phím kèm theo: Không có')
    await page.dblclick(`//div[@class="click-area"]`)
    await expect(page.locator(`//p[@id="clickCount"]`)).toHaveText('Số lần nhấn: 3')
    await expect(page.locator(`//p[@id="clickType"]`)).toHaveText('Loại nhấn: Đúp')
    await expect(page.locator(`//p[@id="modifierKeys"]`)).toHaveText('Phím kèm theo: Không có')
    await page.keyboard.down('Shift')
    await page.locator(`//div[@class="click-area"]`).click()
    await page.keyboard.up('Shift')
    await expect(page.locator(`//p[@id="clickCount"]`)).toHaveText('Số lần nhấn: 4')
    await expect(page.locator(`//p[@id="clickType"]`)).toHaveText('Loại nhấn: Đơn')
    await expect(page.locator(`//p[@id="modifierKeys"]`)).toHaveText('Phím kèm theo: Shift')
})
