import { test, expect } from "@playwright/test"

/**
 * Javascript
 * Đề bài:
 * Số nguyên tố là một số tự nhiên lớn hơn 1 và chỉ chia hết cho 1 và chính nó.
 * Trong bài tập này, bạn sẽ viết một hàm để kiểm tra xem một số có phải là số nguyên tố hay không.
 * Một số nguyên tố là số chỉ có đúng hai ước là 1 và chính nó.
 * Để kiểm tra một số n có phải số nguyên tố hay không, bạn cần kiểm tra xem n có chia hết cho bất kỳ số nào từ 2 đến căn bậc hai của n không.
 * Nếu có, nó không phải số nguyên tố
 */
async function isPrime(num: number): Promise<boolean> {
  if (num < 2) {
    console.log(`This number is not prime`)
    return false
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      console.log(`${num} is not prime`)
      return false
    }
  }
  console.log(`${num} is prime`)
  return true
}

/**
 * Playwright
 * Đề bài
 * Viết code automation cho test case sau:
 * Đi tới trang: https://material.playwrightvn.com/
 * Click vào: Bài học 2: Product page
 * Thêm vào giỏ hàng 2 sản phẩm 1.
 * Thêm vào giỏ hàng 2 sản phẩm 2.
 * Thêm vào giỏ hàng 3 sản phẩm 3.
 * Kiểm số lượng sản phẩm đúng.
 * (Nâng cao) Kiểm tra tổng tiền sản phẩm đúng (tổng tiền = tổng (số lượng * đơn giá))
 */
test('thuna - 2024-09 day 17', async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/")
  await page.getByRole('link', { name: 'Bài học 2: Product page' }).click()

  const cartItems = page.locator('#cart-items')
  const productInfo01 = {
    name: 'Product 1',
    price: 10.00,
    description: 'This is a great product.',
    quantity: 2
  }
  const productInfo02 = {
    name: 'Product 2',
    price: 20.00,
    description: 'This is another great product.',
    quantity: 2
  }
  const productInfo03 = {
    name: 'Product 3',
    price: 30.00,
    description: 'This product is the best.',
    quantity: 3
  }
  const product1TotalPrice = productInfo01.quantity * productInfo01.price
  const product2TotalPrice = productInfo02.quantity * productInfo02.price
  const product3TotalPrice = productInfo03.quantity * productInfo03.price
  const totalPrice = product1TotalPrice + product2TotalPrice + product3TotalPrice

  // Add to cart
  await page.locator('[data-product-id="1"]').click({ clickCount: productInfo01.quantity })
  await page.locator('[data-product-id="2"]').click({ clickCount: productInfo02.quantity })
  await page.locator('[data-product-id="3"]').click({ clickCount: productInfo03.quantity })

  // Assert product 1 in cart
  await expect(cartItems.locator('tr:nth-child(1) td:nth-child(1)')).toHaveText(productInfo01.name)
  await expect(cartItems.locator('tr:nth-child(1) td:nth-child(2)')).toHaveText(`$${productInfo01.price.toFixed(2)}`)
  await expect(cartItems.locator('tr:nth-child(1) td:nth-child(3)')).toHaveText(productInfo01.quantity.toString())
  await expect(cartItems.locator('tr:nth-child(1) td:nth-child(4)')).toHaveText(`$${(product1TotalPrice).toFixed(2)}`)

  // Assert product 2 in cart
  await expect(cartItems.locator('tr:nth-child(2) td:nth-child(1)')).toHaveText(productInfo02.name)
  await expect(cartItems.locator('tr:nth-child(2) td:nth-child(2)')).toHaveText(`$${productInfo02.price.toFixed(2)}`)
  await expect(cartItems.locator('tr:nth-child(2) td:nth-child(3)')).toHaveText(productInfo02.quantity.toString())
  await expect(cartItems.locator('tr:nth-child(2) td:nth-child(4)')).toHaveText(`$${(product2TotalPrice).toFixed(2)}`)

  // Assert product 3 in cart
  await expect(cartItems.locator('tr:nth-child(3) td:nth-child(1)')).toHaveText(productInfo03.name)
  await expect(cartItems.locator('tr:nth-child(3) td:nth-child(2)')).toHaveText(`$${productInfo03.price.toFixed(2)}`)
  await expect(cartItems.locator('tr:nth-child(3) td:nth-child(3)')).toHaveText(productInfo03.quantity.toString())
  await expect(cartItems.locator('tr:nth-child(3) td:nth-child(4)')).toHaveText(`$${(product3TotalPrice).toFixed(2)}`)

  // Assert total price in cart
  expect(totalPrice).toBe(150)
  expect(page.locator('[class="total-price"]')).toHaveText(`$${(totalPrice).toFixed(2)}`)
})
