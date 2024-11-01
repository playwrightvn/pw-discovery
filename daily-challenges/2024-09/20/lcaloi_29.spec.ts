//Javascript
import {test, expect, Locator} from "@playwright/test";

function findLargestNumber(input: number[]): string {
    if (input.length === 0) {
        return 'This array is empty';
    }

    const largestNumber: number = Math.max(...input);
    return `The largest number is: ${largestNumber}`;
}

const arr: number[] = [-1, 39, 84, 5, 7, 3, 7, 8, 8, 9, 4, 3, 2, 90, 6, 3]
console.log(findLargestNumber(arr))

//Playwright
test('Solution 20/09/2024', async ({page}) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.getByRole("link", {name: /mouse event/}).click();

    const clickArea: Locator = page.locator('//div[@id="clickArea"]');
    const txtClickCount: Locator = page.locator('//p[@id="clickCount"]');
    const txtClickType: Locator = page.locator('//p[@id="clickType"]');
    const txtModifierKeys: Locator = page.locator('//p[@id="modifierKeys"]')

    await clickArea.click();
    await expect(txtClickCount).toHaveText('Số lần nhấn: 1');
    await expect(txtClickType).toHaveText('Loại nhấn: Đơn');
    await expect(txtModifierKeys).toHaveText('Phím kèm theo: Không có');

    await clickArea.dblclick();
    await expect(txtClickCount).toHaveText('Số lần nhấn: 3');
    await expect(txtClickType).toHaveText('Loại nhấn: Đúp');
    await expect(txtModifierKeys).toHaveText('Phím kèm theo: Không có');

    await clickArea.click({modifiers: ['Shift']});
    await expect(txtClickCount).toHaveText('Số lần nhấn: 4');
    await expect(txtClickType).toHaveText('Loại nhấn: Đơn');
    await expect(txtModifierKeys).toHaveText('Phím kèm theo: Shift');
});