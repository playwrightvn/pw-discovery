import { test, expect } from '@playwright/test';

// Javascript
const productList = {
  products: [],

  addProduct: function (name, price){
    this.products.push({name, price});
    console.log(`added product: ${name}, price: ${price}`);
  },

  removeProduct: function (name){
    const initialLength = this.products.length;
    this.products = this.products.filter(product => product.name !== name);
    if (this.products.length === initialLength) {
      console.log(`Product ${name} is not exist.`);
    } else {
      console.log(`Deleted product: ${name}`);
    }
  },

  calculateTotal: function () {
    let total = 0;
    for (let i = 0; i < this.products.length; i++) {
        total += this.products[i].price;
    }
    console.log(`Total price: ${total}`);
    return total;
  }
};

productList.addProduct("Táo", 5000);
productList.addProduct("Chuối", 5000);
productList.removeProduct("Chuối");
productList.calculateTotal();

// Playwright

test('ththao27 -19-09 -drag and drop', async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/");

  await page.getByRole('link', { name: 'Bài học 5: Puzzle drag and drop game' }).click();

  const items = [1, 2, 3, 4];

  page.on('dialog', async dialog => {
    expect(dialog.message()).toBe("Congratulations! You completed the puzzle.");
    await dialog.dismiss(); 
  });

  for (const index of items) {
      const source = page.getByText(`${index}`);
      const target = page.locator(`.dropzones-container > div:nth-child(${index})`);
      await source.dragTo(target);
  }
});