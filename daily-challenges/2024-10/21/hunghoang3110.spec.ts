import { test, test as setup, expect } from '@playwright/test';

test.describe('Book Anh trai say hi concert ticket', () => {
    // Login
    test.beforeEach(async ({ page }) => {
      // Navigate to the page and fill the username and password
      await page.goto('https://material.playwrightvn.com/01-concert-ticket/');
      await expect(page).toHaveTitle('Đăng nhập');
      await page.getByPlaceholder('Tên đăng nhập')
        .fill('vn84');
      await page.getByPlaceholder('Mật khẩu')
        .fill('StrongPassword@123');
      await page.getByRole('button', { name: 'Đăng nhập' })
        .click();
      await expect(page).toHaveTitle('Đặt Vé Concert');
      await expect(page.getByRole('heading', { name: /trang đặt vé concert/i })).toBeVisible();
  
    });
    // Logout
    test.afterEach(async ({ page }) => {
      // Click Logout button
      await page.getByRole('button', { name: 'Đăng xuất' })
        .click();
      await expect(page).toHaveTitle('Đăng nhập');
      await expect(page.getByRole('heading', { name: /Đăng nhập/i })).toBeVisible();
  
    });
    // Execution
    const quantity = '3';
    test('Book ticket', async ({ page }) => {
      // Get the price of ticket
      const ticketSection = page.locator('.ticket-category')
        .filter({ has: page.getByRole('heading', { name: /Hỏa lực 1,2,3,4/i }) });
      const priceSection = await ticketSection
        .locator('span')
        .textContent();
      const priceTicket = priceSection?.replace(/\D/g, '');
      // Book ticket
      await ticketSection
        .getByRole('button', { name: 'Đặt vé' })
        .click();
      await page.getByPlaceholder('Số lượng vé')
        .fill(quantity);
      page.on('dialog', dialog => dialog.accept());
      await page.getByRole('button', { name: 'Xác nhận' })
        .click();
      // Expect one item in cart
      await expect(page.locator('#cart-count')).toHaveText('1');
      // Check the price
      await page.locator('#cart-icon')
        .click();
      await expect(page).toHaveTitle('Giỏ hàng');
      await expect(page.getByRole('heading', { name: /Giỏ hàng của bạn/i })).toBeVisible();
      const totalSection = await page.getByText('Tổng giá').textContent();
      const totalPrice = totalSection?.replace(/\D/g, '');
      if (priceTicket !== undefined && totalPrice !== undefined) {
        const expectedTotal = parseInt(priceTicket) * parseInt(quantity);
        const receivedTotal = parseInt(totalPrice);
        await expect(expectedTotal).toBe(receivedTotal);
      } else {
        console.log('Total price or price ticket or quantity is undefined or not a number.');
      }
      await page.getByRole('button', { name: /Trở về trang chủ/i })
        .click();
    });
  })
  