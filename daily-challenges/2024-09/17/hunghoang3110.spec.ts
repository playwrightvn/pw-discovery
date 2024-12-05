// Javascript
// Javascript
function isPrime (input) {

    if (typeof input !== 'number' || input <= 0 || !Number.isInteger(input)) {
        throw new Error('Input must be a positive number');
    }

    const isPrime = 'This is a prime number';
    const notPrime = 'This is not a prime number';

    if (input === 1) {
        return notPrime;
    }

    if (input === 2) {
        return isPrime;
    }

    if (input % 2 === 0) {
        return notPrime;
    }

    const sqrtInput = Math.sqrt(input);
    for (let index = 3; index <= sqrtInput; index+=2) {
        if (input % index === 0) {
            return notPrime;
        }
    }  
    return isPrime;
}

// Playwright
import { test, expect, Locator } from '@playwright/test';

test('add to the cart', async ({ page }) => {
    // prepare data
    // function div_content(content) {
    //     return `//div[@class='${content}']`
    // }
    async function addProductX1(input) {
        await page.locator('.product-info')
            .filter({ hasText: `Product ${input}` })
            .getByRole('button', { name: 'Add to Cart' })
            .click();
    };

    async function addProductX2(input) {
        await page.locator('.product-info')
            .filter({ hasText: `Product ${input}` })
            .getByRole('button', { name: 'Add to Cart' })
            .dblclick();
    }

    const cell = (row, col): Locator => {
        return page.locator(`tbody > tr:nth-child(${row}) > td:nth-child(${col})`)
    };

    // function btnProductN(n) {
    //     return `//button[@data-product-id='${n}']`
    // }

    // function cell(row, col) {
    //     var contentRow = page.locator('tbody > tr').nth(row);
    //     var contentCell = {
    //         contentRow: contentRow,
    //         content: contentRow.locator("td").nth(col)
    //     };
    //     return contentCell;
    // }

    async function getNumberFromLocator(locator) {
        var textContent = await locator.textContent();
        if (textContent[0] === '$') {
            textContent = textContent.substring(1);
        }
        const numberValue = Number(textContent);
        if (isNaN(numberValue)) {
            throw new Error('The extracted value is not a number');
        }
        return numberValue;
    }

    let totalPrice = 0;

    //Navigate to registration page
    await page.goto('https://material.playwrightvn.com/');
    await expect(page).toHaveURL(/.*playwrightvn.com/);
    await page.getByRole('link', { name: /Product page/ }).click();
    await expect(page).toHaveURL(/.*product-page/);

    // Add product to the cart
    await addProductX2(1);
    await addProductX2(2);
    await addProductX1(3);
    await addProductX2(3);

    await expect(page.locator('tbody > tr')).toHaveCount(3, {timeout: 5000});

    await expect(cell(1, 1)).toHaveText('Product 1');
    await expect(cell(1, 3)).toHaveText('2');
    await expect(cell(2, 1)).toHaveText('Product 2');
    await expect(cell(2, 3)).toHaveText('2');
    await expect(cell(3, 1)).toHaveText('Product 3');
    await expect(cell(3, 3)).toHaveText('3');

    for (let index = 1; index < 4; index++) {
        let price = cell(index, 2);
        let quanity = cell(index, 3);
        totalPrice += (await getNumberFromLocator(price) * await getNumberFromLocator(quanity))
    }
    const expectedPrice = await getNumberFromLocator(page.locator("//tfoot/tr/td[@class='total-price']"));
    expect(totalPrice).toEqual(expectedPrice);
});