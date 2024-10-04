//TypeScript
let productList: { [name: string]: number } = {};

const addProduct = (name: string, price: number): void => {
    productList[name] = price;
    console.log(`Thêm sản phẩm ${name}, giá ${price}.`);
};
const removeProduct = (name: string): void => {
    if (productList[name]) {
        delete productList[name];
        console.log(`Xóa sản phẩm: ${name}`);
    } else {
        console.log(`${name} không tồn tại trong danh sách.`);
    }
};
const calculateTotal = (): number => {
    let total = 0;
    for (let price of Object.values(productList)) {
        total += price;
    }
    return total;
};
addProduct("Táo", 30);
addProduct("Chuối", 15);
addProduct("Cam", 20);
addProduct("Ổi", 33);
addProduct("Nhãn", 50);
console.log("Tổng giá trị sản phẩm:", calculateTotal());
removeProduct("Ổi");
console.log("Tổng giá trị sau khi xoá:", calculateTotal());

// Playwright
import { expect, test } from '@playwright/test';
test('Day 19', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.locator('[href|="05"]').click();
    let items = await page.locator('.puzzle-container').locator('div').count();
    page.on('dialog', async dialog => {
        expect(dialog.message()).toBe("Congratulations! You completed the puzzle.");
        await dialog.dismiss();
    });
    for (let i = 1; i <= items; i++) {
        const source = page.locator('.puzzle-container').locator(`#piece-${i}`);
        const target = page.locator('.dropzones-container').locator('.dropzone').nth(i - 1);
        await source.dragTo(target);
    }
});