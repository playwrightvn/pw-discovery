/*
# Javascript
## Đề bài:
Tìm số lớn nhất trong mảng.

Cho một mảng các số nguyên, bạn cần tìm ra số lớn nhất trong mảng đó. Trong bài tập này, bạn sẽ viết một hàm để thực hiện việc tìm kiếm số lớn nhất.

### Yêu cầu:
- Viết một hàm JavaScript có tên findLargestNumber để tìm số lớn nhất trong một mảng các số nguyên.
- Nếu mảng rỗng, trả về thông báo "Mảng rỗng".
*/

function findLargestNumber(arr) {
    let max = arr[0]
    if (arr.length === 0){
        console.log(`Mảng rỗng`)
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

let arr = [1,5,2,6,8,4,9,23,5,8,3,17,7]
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

test('min240920', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/')
    await page.locator(`//a[normalize-space(text())='Bài học 5: Xử lý mouse event']`).click()
    
    await page.click(`//div[@id='clickArea']`)
    await expect(page.locator(`//p[@id='clickCount']`)).toHaveText('Số lần nhấn: 1')
    await expect(page.locator(`//p[@id='clickType']`)).toHaveText('Loại nhấn: Đơn')
    await expect(page.locator(`//p[@id='modifierKeys']`)).toHaveText('Phím kèm theo: Không có')

    await page.dblclick(`//div[@id='clickArea']`)
    await expect(page.locator(`//p[@id='clickCount']`)).toHaveText('Số lần nhấn: 3')
    await expect(page.locator(`//p[@id='clickType']`)).toHaveText('Loại nhấn: Đúp')
    await expect(page.locator(`//p[@id='modifierKeys']`)).toHaveText('Phím kèm theo: Không có')

    await page.click(`//div[@id='clickArea']`, { modifiers: ['Shift'] }) 
    await expect(page.locator(`//p[@id='clickCount']`)).toHaveText('Số lần nhấn: 4')
    await expect(page.locator(`//p[@id='clickType']`)).toHaveText('Loại nhấn: Đơn')
    await expect(page.locator(`//p[@id='modifierKeys']`)).toHaveText('Phím kèm theo: Shift')
})