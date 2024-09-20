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
function isPrime(num: number): boolean {
  if (num < 2) {
<<<<<<< HEAD
    return false;
  }

  if (num == 2) {
    return true;
  }

  if (num % 2 == 0) {
    return false;
=======
    return false
  } else if (num == 2) {
    return true
  } else if (num % 2 == 0) {
    console.log(`"Số này không phải là số nguyên tố"`);
>>>>>>> dbab1f3 (fix: correct problem)
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
<<<<<<< HEAD
      return false
    }
  }

  return true
}

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));

=======
      console.log(`${num} is not prime`)
      return false
    }
  }
  console.log(`${num} is prime`)
  return true
}

>>>>>>> dbab1f3 (fix: correct problem)
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
test('2024-09 day 17', async ({ page }) => {
  const products = [
    { id: 1, name: 'Product 1', price: 10.00, description: 'This is a great product.', quantity: 2 },
    { id: 2, name: 'Product 2', price: 20.00, description: 'This is another great product.', quantity: 2 },
    { id: 3, name: 'Product 3', price: 30.00, description: 'This product is the best.', quantity: 3 }
  ];

<<<<<<< HEAD
  await test.step('Đi tới trang: https://material.playwrightvn.com/. Click vào: Bài học 2: Product page', async () => {
    await page.goto("https://material.playwrightvn.com/");
=======
  await test.step('Đi tới trang: https://material.playwrightvn.com/', async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step('Click vào: Bài học 2: Product page', async () => {
>>>>>>> dbab1f3 (fix: correct problem)
    await page.getByRole('link', { name: 'Bài học 2: Product page' }).click();
  });

  await test.step('Thêm vào giỏ hàng 2 sản phẩm 1.', async () => {
<<<<<<< HEAD
    await page.locator(`[data-product-id="${products[0].id}"]`).click({ clickCount: products[0].quantity });
  });

  await test.step('Thêm vào giỏ hàng 2 sản phẩm 2.', async () => {
    await page.locator(`[data-product-id="${products[1].id}"]`).click({ clickCount: products[1].quantity });
  });

  await test.step('Thêm vào giỏ hàng 3 sản phẩm 3.', async () => {
    await page.locator(`[data-product-id="${products[2].id}"]`).click({ clickCount: products[2].quantity });
  });

  await test.step('Kiểm số lượng sản phẩm đúng.', async () => {
    const totalQty = products[0].quantity + products[1].quantity + products[2].quantity;

    // Kiểm tra có số lượng sản phẩm trong giỏ hàng
    const rowLocator = page.locator("//tbody//tr");
    await expect(rowLocator).toHaveCount(products.length);

    // Kiểm tra tổng số lượng sản phẩm
    let cartTotalQty = 0;
    const allRows = await rowLocator.all();
    for (const row of allRows) {
      const rawQty = await row.locator("//td").nth(2).textContent();
      cartTotalQty += parseInt(rawQty || '');
    }

    expect(cartTotalQty).toEqual(totalQty)
  });

  await test.step('(Nâng cao) Kiểm tra tổng tiền sản phẩm đúng (tổng tiền = tổng (số lượng * đơn giá)).', async () => {
    let totalMoney = 0;
    products.forEach(item => totalMoney += item.price * item.quantity);
    const rowLocators = await page.locator("//tbody//tr").all();

    let cartTotal = 0;
    for (const row of rowLocators) {
      const cells = await row.locator("//td").all();
      const rawPrice = await cells[1].textContent() || '';
      const rawQty = await cells[2].textContent() || '';

      const itemPrice = parseInt(rawPrice.replace('$', ''));
      const itemQty = parseInt(rawQty);
      cartTotal += itemPrice * itemQty;
    }

    expect(cartTotal).toEqual(totalMoney)
  });
=======
   
  });
  
  await test.step('Thêm vào giỏ hàng 2 sản phẩm 2.', async () => {
   
  });

  await test.step('Thêm vào giỏ hàng 3 sản phẩm 3.', async () => {
   
  });

  const cartItems = page.locator('#cart-items');

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

  // Assert total price in cart
  expect(totalPrice).toBe(150);
  await expect(page.locator('.total-price')).toHaveText(`$${totalPrice.toFixed(2)}`);
>>>>>>> dbab1f3 (fix: correct problem)
});
