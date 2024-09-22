// Javascript

const findLargestNumber = (arr: number[]): number | string => {
    if (arr.length === 0) {
        return 'Mảng rỗng';
    }

    let max = arr[0];
    arr.forEach(item => {
        if (item > max) {
            max = item
        }
    });

    return max;
}

console.log(findLargestNumber([1, 5, 2, 5, -4]));
console.log(findLargestNumber([]));

// Playwright
/*
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

import { test, expect } from '@playwright/test';

test('2024-09-20', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.getByText("Bài học 5: Xử lý mouse event").click();

    const clickLoc = page.locator("//div[@id='clickArea']");
    const clickCountLoc = page.locator("//p[@id='clickCount']");
    const clickTypeLoc = page.locator("//p[@id='clickType']");
    const modifierKeysLoc = page.locator("//p[@id='modifierKeys']");

    await clickLoc.click();
    // Kiểm tra: số lần nhấn = 1, loại nhấn: đơn, phím kèm theo: không có
    await expect(clickCountLoc).toHaveText('Số lần nhấn: 1');
    await expect(clickTypeLoc).toHaveText('Loại nhấn: Đơn');
    await expect(modifierKeysLoc).toHaveText('Phím kèm theo: Không có');

    // - Double click vào ô: "Nhấn hoặc nhấn đúp vào đây!"
    await clickLoc.dblclick();

    // - Kiểm tra: số lần nhân = 3, loại nhấn: đúp, phím kèm theo: không có
    await expect(clickCountLoc).toHaveText('Số lần nhấn: 3');
    await expect(clickTypeLoc).toHaveText('Loại nhấn: Đúp');
    await expect(modifierKeysLoc).toHaveText('Phím kèm theo: Không có');

    // - Giữ shift và click vào ô: "Nhấn hoặc nhấn đúp vào đây!"
    await clickLoc.click({ modifiers: ['Shift'] });

    // - Kiểm tra: số lần nhấn = 4, loại nhấn: đơn, phím kèm theo: Shift
    await expect(clickCountLoc).toHaveText('Số lần nhấn: 4');
    await expect(clickTypeLoc).toHaveText('Loại nhấn: Đơn');
    await expect(modifierKeysLoc).toHaveText('Phím kèm theo: Shift');
})