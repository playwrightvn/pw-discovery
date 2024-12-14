// Javascript
function findLargestNumber(array) {
    if (!Array.isArray(array) || array.length === 0) {
        throw new Error('Input must be a non-empty array');
    }
    if (!array.every(num => typeof num === 'number')) {
        throw new Error('All elements must be numbers');
    }
    const maxNumber = Math.max(...array);
    return `Maximum number is : ${maxNumber}`;
}

// Playwright
import { test, expect } from '@playwright/test'

test('mouse event', async ({ page }) => {

    // Navigate to Mouse event page
    await page.goto('https://material.playwrightvn.com/');
    await expect(page).toHaveTitle('Tài liệu học automation test - Playwright Việt Nam');
    await page.getByRole('link', { name: /mouse event/ }).click();
    await expect(page).toHaveTitle('Kiểm Tra Bàn Phím và Chuột');

    const CLICK_TARGET = page.getByText('Nhấn hoặc nhấn đúp vào đây!');

    //Click
    await CLICK_TARGET.click();
    await expect(page.getByText(/số lần nhấn: 1/i)).toBeVisible();
    await expect(page.getByText(/loại nhấn: đơn/i)).toBeVisible();
    await expect(page.getByText(/phím kèm theo: không có/i)).toBeVisible();

    // Double click
    await CLICK_TARGET.dblclick();
    await expect(page.getByText(/số lần nhấn: 3/i)).toBeVisible();
    await expect(page.getByText(/loại nhấn: đúp/i)).toBeVisible();
    await expect(page.getByText(/phím kèm theo: không có/i)).toBeVisible();

    // shift and click
    await CLICK_TARGET.click({ modifiers: ['Shift'] });
    await expect(page.getByText(/số lần nhấn: 4/i)).toBeVisible();
    await expect(page.getByText(/loại nhấn: đơn/i)).toBeVisible();
    await expect(page.getByText(/phím kèm theo: Shift/i)).toBeVisible();

})