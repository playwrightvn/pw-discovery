import { test, expect } from '@playwright/test'

// # Javascript
// ## Đề bài:
// Số nguyên tố là một số tự nhiên lớn hơn 1 và chỉ chia hết cho 1 và chính nó. Trong bài tập này, bạn sẽ viết một hàm để kiểm tra xem một số có phải là số nguyên tố hay không.

// Một số nguyên tố là số chỉ có đúng hai ước là 1 và chính nó. Để kiểm tra một số n có phải số nguyên tố hay không, bạn cần kiểm tra xem n có chia hết cho bất kỳ số nào từ 2 đến căn bậc hai của n không. Nếu có, nó không phải số nguyên tố

// ### Yêu cầu:
// - Viết một hàm JavaScript có tên `isPrime` để kiểm tra xem một số có phải là số nguyên tố không.
// - Nếu số là số nguyên tố, in ra "Số này là số nguyên tố". Nếu không phải, in ra "Số này không phải là số nguyên tố".

// ## Ví dụ:

// **Input**: 
// - Số: `7`

// **Output**: 
// - Kết quả: `"Số này là số nguyên tố"`

// **Giải thích**: 
// Số `7` chỉ chia hết cho `1` và `7`, do đó nó là số nguyên tố.

// ## Ví dụ khác:

// **Input**: 
// - Số: `10`

// **Output**: 
// - Kết quả: `"Số này không phải là số nguyên tố"`

// **Giải thích**: 
// Số `10` chia hết cho `1`, `2`, `5`, và `10`, do đó nó không phải là số nguyên tố.

// ### Gợi ý:
// Bạn có thể sử dụng vòng lặp để kiểm tra số đó có chia hết cho bất kỳ số nào từ 2 đến căn bậc hai của số đó hay không. Nếu có, thì đó không phải là số nguyên tố.

function isPrime(number) {
    if (number <= 1) {
        return "Số này không phải là số nguyên tố";
    }
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            return "Số này không phải là số nguyên tố";
        }
    }
    return "Số này là số nguyên tố";
}
console.log(isPrime(7));
console.log(isPrime(10));

// # Playwright
// ## Đề bài
// Viết code automation cho test case sau:
// - Đi tới trang: https://material.playwrightvn.com/
// - Click vào: Bài học 2: Product page
// - Thêm vào giỏ hàng 2 sản phẩm 1.
// - Thêm vào giỏ hàng 2 sản phẩm 2.
// - Thêm vào giỏ hàng 3 sản phẩm 3.

// - Kiểm số lượng sản phẩm đúng.
// - (Nâng cao) Kiểm tra tổng tiền sản phẩm đúng (tổng tiền = tổng (số lượng * đơn giá))

test('Daily-Challenges-17-09-2024', async ({ page }) => {
    await test.step('Go to https://material.playwrightvn.com/', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Click Bài học 2: Product page', async () => {
        await page.locator('//a[@href="02-xpath-product-page.html"]').click();
    });

    await test.step('Add 2 product to cart 1', async () => {
        await page.locator('//button[@data-product-id="1"]').dblclick();
    });

    await test.step('Add 2 product to cart 2', async () => {
        await page.locator('//button[@data-product-id="2"]').dblclick();
    });

    await test.step('Add 3 product to cart 3', async () => {
        await page.locator('//button[@data-product-id="3"]').click({ clickCount: 3 });
    });

    // await test.step('Check result', async () => {
    // });
});