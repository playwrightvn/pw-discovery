/* 
Javascript
Đề bài:
Số nguyên tố là một số tự nhiên lớn hơn 1 và chỉ chia hết cho 1 và chính nó. Trong bài tập này, bạn sẽ viết một hàm để kiểm tra xem một số có phải là số nguyên tố hay không.

Một số nguyên tố là số chỉ có đúng hai ước là 1 và chính nó. Để kiểm tra một số n có phải số nguyên tố hay không, bạn cần kiểm tra xem n có chia hết cho bất kỳ số nào từ 2 đến căn bậc hai của n không. Nếu có, nó không phải số nguyên tố

### Yêu cầu:
- Viết một hàm JavaScript có tên `isPrime` để kiểm tra xem một số có phải là số nguyên tố không.
- Nếu số là số nguyên tố, in ra "Số này là số nguyên tố". Nếu không phải, in ra "Số này không phải là số nguyên tố". 
*/

function isPrime(number) {
    if (number < 2) {
        console.log(`"Số này không phải là số nguyên tố"`);
    }
    else if (number == 2) {
        console.log(`"Số này là số nguyên tố"`);
    }
    else if (number % 2 == 0) {
        console.log(`"Số này không phải là số nguyên tố"`);
    }
    else if (number > 2) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                console.log(`"Số này không phải là số nguyên tố"`);
            }
            else {
                console.log(`"Số này là số nguyên tố"`);
            }
        }
    }
}
let number = 12
isPrime(number)

/*
# Playwright
## Đề bài
Viết code automation cho test case sau:
- Đi tới trang: https://material.playwrightvn.com/
- Click vào: Bài học 2: Product page
- Thêm vào giỏ hàng 2 sản phẩm 1.
- Thêm vào giỏ hàng 2 sản phẩm 2.
- Thêm vào giỏ hàng 3 sản phẩm 3.

- Kiểm số lượng sản phẩm đúng.
- (Nâng cao) Kiểm tra tổng tiền sản phẩm đúng (tổng tiền = tổng (số lượng * đơn giá))
*/

import { test, expect } from '@playwright/test';

test('min240917', async ({ page }) => {
    const testData = {
        qtyP1: 2,
        qtyP2: 2,
        qtyP3: 3
    }
    const product1 = page.locator(`//button[@data-product-id='1']`);
    const product2 = page.locator(`//button[@data-product-id='2']`);
    const product3 = page.locator(`//button[@data-product-id='3']`);

    await page.goto("https://material.playwrightvn.com/");
    await page.locator(`//a[normalize-space(text())='Bài học 2: Product page']`).click();
    // Thêm vào giỏ hàng 2 sản phẩm 1.
    await product1.click({ clickCount: 2});
    // Thêm vào giỏ hàng 2 sản phẩm 2
    await product2.click({ clickCount: 2});
    // Thêm vào giỏ hàng 3 sản phẩm 3
    await product3.click({ clickCount: 3});
    // Kiểm số lượng sản phẩm đúng
    await expect(page.locator("(//td[text()='Product 1']/following-sibling::td)[2]")).toHaveText(`${testData.qtyP1}`)
    await expect(page.locator("(//td[text()='Product 2']/following-sibling::td)[2]")).toHaveText(`${testData.qtyP2}`)
    await expect(page.locator("(//td[text()='Product 3']/following-sibling::td)[2]")).toHaveText(`${testData.qtyP3}`)
    // Kiểm tra tổng tiền sản phẩm đúng (tổng tiền = tổng (số lượng * đơn giá))
    let totalPrice: number
    totalPrice = 10.000 * 2 + 20.000 * 2 + 30.000 * 3
    let formatTotalPrice = `$${totalPrice}.00`
    let price = await page.locator(`//td[@class="total-price"]`).innerText()
    expect(price).toEqual(formatTotalPrice)
})