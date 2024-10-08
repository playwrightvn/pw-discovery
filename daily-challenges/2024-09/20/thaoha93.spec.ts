function findLargestNumber(myArr: number[]) {
    if (myArr.length === 0) {
        console.log('Mảng rỗng');
    }
    myArr.sort((a, b) => b - a);
    console.log(`Kết quả: Số lớn nhất là: ${myArr[0]}`);
}

let myArr: number[] = [4, 8, 1, 3, 11, 44, 56, 8, 66, 48];
findLargestNumber(myArr);

import { expect, test } from "@playwright/test";

test("Day 20", async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.locator('[href|="018-mouse.html"]').click();

    const clickAreaEle = page.locator('#clickArea');
    const clickCountEle = page.locator('#clickCount');
    const clickTypeEle = page.locator('#clickType');
    const modifierKeysEle = page.locator('#modifierKeys');

    await clickAreaEle.click();
    await expect(clickCountEle).toHaveText('Số lần nhấn: 1');
    await expect(clickTypeEle).toHaveText('Loại nhấn: Đơn');
    await expect(modifierKeysEle).toHaveText('Phím kèm theo: Không có');

    await clickAreaEle.dblclick();
    await expect(clickCountEle).toHaveText('Số lần nhấn: 3');
    await expect(clickTypeEle).toHaveText('Loại nhấn: Đúp');
    await expect(modifierKeysEle).toHaveText('Phím kèm theo: Không có');

    await clickAreaEle.click({ modifiers: ['Shift'] });
    await expect(clickCountEle).toHaveText('Số lần nhấn: 4');
    await expect(clickTypeEle).toHaveText('Loại nhấn: Đơn');
    await expect(modifierKeysEle).toHaveText('Phím kèm theo: Shift');
})