/*
# Javascript
## Đề bài:
Quản lý danh sách sản phẩm bằng Object.

Trong bài tập này, bạn sẽ tạo một hệ thống quản lý danh sách sản phẩm bằng cách sử dụng đối tượng (Object). Mỗi sản phẩm sẽ có tên và giá, và bạn sẽ viết các hàm để thêm sản phẩm, xoá sản phẩm, và tính tổng giá trị của tất cả các sản phẩm trong danh sách.

### Yêu cầu:
1. Tạo một object `productList` để lưu trữ danh sách sản phẩm.
2. Viết hàm `addProduct(name, price)` để thêm sản phẩm vào danh sách. Sản phẩm sẽ có thuộc tính `name` (tên) và `price` (giá).
3. Viết hàm `removeProduct(name)` để xoá một sản phẩm khỏi danh sách theo tên sản phẩm.
4. Viết hàm `calculateTotal()` để tính tổng giá của tất cả sản phẩm trong danh sách.
*/

const productList = {
    products: [],

    addProduct: function(name, price) {
        const product = {
            name: name,
            price: price,
        }
        this.products.push(product)
    },

    removeProduct: function(name) {
        this.products = this.products.filter(product => product.name !== name)
    },

    calculateTotal: function() {
        return this.products.reduce((total, product) => {
            return total + (product.price)
        }, 0)
    }
}

productList.addProduct('Sản phẩm A', 100)
productList.addProduct('Sản phẩm B', 150)
productList.addProduct('Sản phẩm C', 150)
productList.addProduct('Sản phẩm D', 250)

productList.removeProduct('Sản phẩm B')
console.log('Tổng giá trị:', productList.calculateTotal())

/*
# Playwright
## Đề bài
Viết code automation cho test case sau:
- Đi tới trang: https://material.playwrightvn.com/
- Click vào: Bài học 5: Puzzle drag and drop game
- Kéo thả các ô 1, 2, 3, 4 vào ô tương ứng.
- Verify message trong alert xuất hiện là: "Congratulations! You completed the puzzle."
*/

import { test, expect } from '@playwright/test'

test('min240919', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/")
    await page.locator(`//a[normalize-space(text())='Bài học 5: Puzzle drag and drop game']`).click()
    let number = await page.locator(`//div[@class="puzzle-container"]/div`).count()
    page.on('dialog', async dialog => {
        if (dialog.message() === 'Congratulations! You completed the puzzle.') {
            console.log('Alert content is correct!')
        } else {
            console.log('Alert content is incorrect')
        }
        expect(await dialog.message()).toBe(`Congratulations! You completed the puzzle.`)
        await dialog.dismiss()
    })
    for (let i = 1; i < number + 1; i++) {
        await page.locator(`//div[@id="piece-${i}"]`).dragTo(page.locator(`//div[@data-piece="${i}"]`))
    }

})
