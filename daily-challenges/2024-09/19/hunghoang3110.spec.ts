// Javascript
let productList = {}

function addProduct (name, price) {
    if (typeof price !== 'number' || price < 0) {
        throw new Error('Price must be a non-negative number');
    }
    if (name in productList) {
        throw new Error(`Product "${name}" already exists`);
    }
    productList[name] = price;
}

function removeProduct (name) {
    delete productList[name]
}

function caculateTotal () {
    let total = 0;
    for (let [product, value] of Object.entries(productList)) {
        total += value;
    }
    return total
}

// Playwright
import { test, expect } from '@playwright/test'

test('play puzzle', async ({ page }) => {

    // Set up dialog handler first
    page.on('dialog', dialog => {
        expect(dialog.message()).toBe('Congratulations! You completed the puzzle.')
        dialog.dismiss();
    });

    // Navigate to Puzzle drag and drop game page
    await page.goto('https://material.playwrightvn.com/');
    await expect(page).toHaveURL(/.*playwrightvn.com/);
    await page.getByRole('link', { name: /Puzzle drag and drop game/ }).click();
    await expect(page).toHaveURL(/.*drag-and-drop/);

    // Ensure all pieces are ready before drag operations
    await Promise.all([
        page.locator('#piece-1').waitFor({ state: 'visible' }),
        page.locator('#piece-2').waitFor({ state: 'visible' }),
        page.locator('#piece-3').waitFor({ state: 'visible' }),
        page.locator('#piece-4').waitFor({ state: 'visible' })
    ]);

    //Drag and drop puzzel
    await page.locator('#piece-1').dragTo(page.locator('[data-piece="1"]'));
    await page.locator('#piece-2').dragTo(page.locator('[data-piece="2"]'));
    await page.locator('#piece-3').dragTo(page.locator('[data-piece="3"]'));
    await page.locator('#piece-4').dragTo(page.locator('[data-piece="4"]'));

})