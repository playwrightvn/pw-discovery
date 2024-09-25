//Javascript
function isPrime(number) {
    if (number < 2) {
        return false;
    }

    let squareRoot = Math.sqrt(number);

    for (let i = 2; i <= squareRoot; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

let number = 1;
if (isPrime(number)) {
    console.log("Số này là số nguyên tố");
} else {
    console.log("Số này không phải là số nguyên tố");
}

//Playright
import { test } from '@playwright/test';

test('PlayRight day 17', async ({ page }) => {
    await test.step("Navigate to Material Playwright Page", async () => {
        await page.goto("https://material.playwrightvn.com");
    });

    await test.step("Click on to Product Page", async () => {
        await page.locator('//a[@href="02-xpath-product-page.html"]').click();
    });

    await test.step("Add Product 1: 2 itmes", async () => {
        await page.locator('//button[@data-product-id="1"]').click({ clickCount: 2 });
    });
    await test.step("Add Product 2: 3 itmes", async () => {
        await page.locator('//button[@data-product-id="2"]').click({ clickCount: 3 });
    });
    await test.step("Add Product 3: 1 itmes", async () => {
        await page.locator('//button[@data-product-id="3"]').click();
    });
});
