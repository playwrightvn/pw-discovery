import { test, expect } from "@playwright/test"

//Javascript
function isPrime(n) {
    if (n <= 1) {
        console.log("Số này không phải là số nguyên tố");
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            console.log("Số này không phải là số nguyên tố");
            return false;
        }
    }
    console.log("Số này là số nguyên tố");
    return true;
}

console.log("2:", isPrime(2));

//playwright

test('ththao27 - 2024-09 day 17', async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/");
  await page.getByRole('link', { name: 'Bài học 2: Product page' }).click();

  const cartItems = page.locator('#cart-items');
  const products = [
    { id: 1, name: 'Product 1', price: 10.00, description: 'This is a great product.', quantity: 2 },
    { id: 2, name: 'Product 2', price: 20.00, description: 'This is another great product.', quantity: 2 },
    { id: 3, name: 'Product 3', price: 30.00, description: 'This product is the best.', quantity: 3 }
  ];

  for (const product of products) {
    await page.locator(`[data-product-id="${product.id}"]`).click({ clickCount: product.quantity });
  }

  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const row = i + 1;
    const productTotalPrice = product.quantity * product.price;
    totalPrice += productTotalPrice;

    await expect(cartItems.locator(`tr:nth-child(${row}) td:nth-child(1)`)).toHaveText(product.name);
    await expect(cartItems.locator(`tr:nth-child(${row}) td:nth-child(2)`)).toHaveText(`$${product.price.toFixed(2)}`);
    await expect(cartItems.locator(`tr:nth-child(${row}) td:nth-child(3)`)).toHaveText(product.quantity.toString());
    await expect(cartItems.locator(`tr:nth-child(${row}) td:nth-child(4)`)).toHaveText(`$${productTotalPrice.toFixed(2)}`);
  }

  expect(totalPrice).toBe(150);
  await expect(page.locator('.total-price')).toHaveText(`$${totalPrice.toFixed(2)}`);
});
