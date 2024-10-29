import { test, expect } from "@playwright/test";

function isPrime(num: number): boolean {
  if (num <= 1) return false;
  if (num <= 3) return true;

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

test("Challenge 17", async ({ page }) => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 10.0,
      quantity: 2,
    },
    {
      id: 2,
      name: "Product 2",
      price: 20.0,
      quantity: 2,
    },
    {
      id: 3,
      name: "Product 3",
      price: 30.0,
      quantity: 3,
    },
  ];
  await test.step("Go to web", async () => {
    await page.goto("https://material.playwrightvn.com/");
    await page
      .locator("//a[contains(text(), 'Bài học 2: Product page')]")
      .click();
  });

  await test.step("Add 2 items of product 1 to the cart", async () => {
    await page
      .locator(`[data-product-id="${products[0].id}"]`)
      .click({ clickCount: products[0].quantity });
  });

  await test.step("Add 2 items of product 2 to the cart", async () => {
    await page
      .locator(`[data-product-id="${products[1].id}"]`)
      .click({ clickCount: products[1].quantity });
  });

  await test.step("Add 3 items of product 3 to the cart", async () => {
    await page
      .locator(`[data-product-id="${products[2].id}"]`)
      .click({ clickCount: products[2].quantity });
  });

  await test.step("Verify quantity of item is correct", async () => {
    await expect(page.locator("//*[@id='cart-items']/tr")).toHaveCount(
      products.length
    );
    for (let i = 0; i < products.length; i++) {
      await expect(
        page.locator(`//*[@id='cart-items']/tr[${i + 1}]/td[3]`)
      ).toHaveText(`${products[i].quantity}`);
    }
    await expect(page.locator("//*[@id='cart-items']/tr[3]/td[3]")).toHaveText(
      `${products[2].quantity}`
    );
  });

  await test.step("Verify the total price is correct", async () => {
    let cart: number = 0;
    for (let i = 0; i < products.length; i++) {
      let itemPrice = products[i].quantity * products[i].price;
      await expect(
        page.locator(`//*[@id='cart-items']/tr[${i + 1}]/td[4]`)
      ).toHaveText(`$${itemPrice.toFixed(2)}`);
      cart += itemPrice;
    }
    await expect(page.locator("[class='total-price']")).toHaveText(
      `$${cart.toFixed(2)}`
    );
  });
});
