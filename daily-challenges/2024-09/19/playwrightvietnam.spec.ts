type Product = {
    name: string;
    price: number;
}

type ProductList = {
    data: Product[];
    addProduct(name: string, price: number): void;
    removeProduct(name: string): void;
    calculateTotal(): number;
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
        // Cach 1
        // const tmpData: Product[] = [];
        // for (let i = 0; i < this.data.length; i++) {
        //     if (this.data[i].name === name) {
        //         continue;
        //     }

        //     tmpData.push(this.data[i]);
        // }

        // this.data = tmpData;

        // Cach 2: filter
        this.data = this.data.filter(product => product.name !== name);
    },

    calculateTotal() {
        let total = 0;

        this.data.forEach(item => total += item.price);
        return total;
    }
}

productList.addProduct('Táo', 100);
productList.addProduct('Cam', 200);
productList.addProduct('Táo', 100);

console.log(productList.data);

// productList.removeProduct('Táo');
// console.log(productList.data);

console.log(productList.calculateTotal());


// Playwright
import { test, expect } from '@playwright/test';

test('2024-09-19 DnD', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");

    await page.getByText("Bài học 5: Puzzle drag and drop game").click();

    page.on('dialog', async dialog => {
        expect(dialog.message()).toBe("Congratulations! You completed the puzzle.");
        await dialog.dismiss();
    });

    for (let i = 1; i <= 4; i++) {
        const sourceLocator = page.locator(`//div[@id='piece-${i}']`);
        const destinationLocator = page.locator(`//div[@data-piece='${i}']`);

        await sourceLocator.dragTo(destinationLocator);
    }
})