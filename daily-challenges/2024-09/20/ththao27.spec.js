import { test, expect } from '@playwright/test';

// Javascript

function findLargestNumber(arr) {
    if (arr.length === 0) {
        return "This array is null"
    }

    let largestNumber = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largestNumber) {
            largestNumber = arr[i];
        }
    }
    return `The largest number is: ${largestNumber}`;
}

const numbers = [3, 7, 2, 5, 9];
console.log(findLargestNumber(numbers));

// Playwright

test('ththao27 -20-09 -clickmouse', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.getByRole('link', { name: 'Bài học 5: Xử lý mouse event' }).click();

    const mouseBox = page.locator('text=Nhấn hoặc nhấn đúp vào đây!');
    let clickCount = page.locator('//*[@id="clickCount"]');
    let clickType = page.locator('//*[@id="clickType"]');
    let modifierKeys = page.locator('//*[@id="modifierKeys"]');

    // Click 1 lần
    await mouseBox.click();
    await expect(clickCount).toHaveText('Số lần nhấn: 1');
    await expect(clickType).toHaveText('Loại nhấn: Đơn');
    await expect(modifierKeys).toHaveText('Phím kèm theo: Không có');

    // Double click
    await mouseBox.dblclick();
    await expect(clickCount).toHaveText('Số lần nhấn: 3');
    await expect(clickType).toHaveText('Loại nhấn: Đúp');
    await expect(modifierKeys).toHaveText('Phím kèm theo: Không có');

    //Giữ shift và click
    await mouseBox.click({ modifiers: ['Shift'] });
    await expect(clickCount).toHaveText('Số lần nhấn: 4');
    await expect(clickType).toHaveText('Loại nhấn: Đơn');
    await expect(modifierKeys).toHaveText('Phím kèm theo: Shift');

  });