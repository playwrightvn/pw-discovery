//Javascript
import { test, expect, Page } from "@playwright/test";

function isPrime(number: number) {
    if (number > 2 && number % 2 === 0 || number <= 1) {
        return false;
    } else {
        let squareRoot: number = Math.round(Math.sqrt(number));
        for (let i = 2; i < squareRoot; i++) {
            if (number % i === 0) {
                return false;
            }
        }
    }
    return true;
};

const number: number = 7;
if (isPrime(number)) {
    console.log(`${number} là số nguyên tố`)
} else {
    console.log(`${number} KHÔNG phải là số nguyên tố`)
}

//Playwright
test('Solution 17/09/2024', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.getByText('Bài học 2: Product page', { exact: true }).click();
    await expect(page.getByText('Simple E-commerce')).toBeVisible();
    //add sp 1
    await addProdToCart(1, 2, page);
    const prod1Info: ProdInfo = await getProdInFo(1, page);
    prod1Info.quantity = 2
    console.log(prod1Info);
    await expectItemInCart(prod1Info, page);
    //add sp 2
    await addProdToCart(2, 2, page);
    const prod2Info: ProdInfo = await getProdInFo(2, page);
    prod2Info.quantity = 2
    console.log(prod2Info);
    await expectItemInCart(prod2Info, page);
    //add sp 3
    await addProdToCart(3, 3, page);
    const prod3Info: ProdInfo = await getProdInFo(3, page);
    prod3Info.quantity = 3
    console.log(prod3Info);
    await expectItemInCart(prod3Info, page);

    const totalPrice: number = (prod1Info.price * prod1Info.quantity) + (prod2Info.price * prod2Info.quantity) + (prod3Info.price * prod3Info.quantity);
    expect(Number((await page.locator('td.total-price').innerText()).replace('$', 'totalPrice')));
});

async function addProdToCart(productId: number, quantity = 1, page: Page) {
    const btn_add_to_cart: string = `//button[@data-product-id="${productId}"]`;
    for (let i = 1; i <= quantity; i++) {
        await page.locator(btn_add_to_cart).click();
    }
};

async function expectItemInCart(prodInfo: ProdInfo, page: Page) {
    const items = await page.locator('#cart-items tr').all();
    for (let item of items) {
        const item_info = item.locator('css= td');
        if (await item_info.nth(0).innerText() === prodInfo.name) {
            expect.soft((Number((await item_info.nth(1).innerText()).replace('$', '')))).toBe(prodInfo.price);
            expect.soft(Number(await item_info.nth(2).innerText())).toBe(prodInfo.quantity);
            break;
        }
    }
    expect(test.info().errors).toHaveLength(0);
};

async function getProdInFo(productId: number, page: Page): Promise<ProdInfo> {
    const txt_info: string = `//button[@data-product-id="${productId}"]/..`;
    const name: string = await page.locator(txt_info).locator('xpath=/div[@class="product-name"]').innerText();
    const price: number = Number(((await page.locator(txt_info).locator('xpath=/div[@class="product-price"]').innerText()).replace('$', '')));
    return { name, price };
};

interface ProdInfo {
    name: string,
    price: number,
    quantity?: number
};