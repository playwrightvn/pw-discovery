import { expect, test } from "@playwright/test";

//Javascript
type Product = {
    name: string;
    price: number;
}

type ProductList = {
    data: Product[],
    addProduct(name: string, price: number): void,
    removeProduct(name: string): void,
    calculateTotal(): number,
}

const productList: ProductList = {
    data: [],
    addProduct(name: string, price: number) {
        this.data.push({
            name: name,
            price: price
        });
    },
    removeProduct(name: string) {
        this.data = this.data.filter(product => product.name !== name);
    },
    calculateTotal() {
        return this.data.reduce((total, item) => total + item.price, 0);
    },
}

productList.addProduct('Táo', 5000);
productList.addProduct('Chuối', 3000);
productList.addProduct('Mít', 2000);
productList.removeProduct('Táo');
productList.calculateTotal();

//Playwright
test('Solution 19/09/2024', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.getByRole("link", { name: /drag and drop/ }).click();

    page.on('dialog', async dialog => {
        expect(dialog.message()).toBe('Congratulations! You completed the puzzle.');
        await dialog.dismiss();
    });

    for (let i = 1; i <= 4; i++) {
        const sourceLocator = page.locator(`//div[@id='piece-${i}']`);
        const destinationLocator = page.locator(`//div[@data-piece='${i}']`);
        await sourceLocator.dragTo(destinationLocator);
    }
});