const { test, expect } = require('@playwright/test');

const user = {
  username: 'vn84',
  password: 'StrongPassword@123'
};

test.describe('Verify concert ticket booking feature', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/01-concert-ticket/');
    await page.locator('//*[@id="username"]').fill(user.username);
    await page.locator('//*[@id="password"]').fill(user.password);
    await page.locator('//*[@id="login-btn"]').click();
    
    await page.waitForSelector('//*[@id="logout-btn"]');
  });

  test.afterEach(async ({ page }) => {
    await page.locator('//*[@id="logout-btn"]').click();
    await expect(page.locator('//*[@id="login-btn"]')).toBeVisible();
  });

  test('Verify concert ticket booking feature', async ({ page }) => {
    await page.locator('//*[@id="ticket-section"]/div[1]/button').click();
    await page.locator('//*[@id="ticket-quantity"]').fill('1');
    await page.getByRole('button', { name: 'Xác nhận' }).click();

    page.once('dialog', async dialog => {
      await dialog.accept();
    });

    await page.locator('//*[@id="cart-icon"]').click();
    await expect(page.getByRole('heading', { name: 'Giỏ hàng của bạn' })).toBeVisible();

    const cartItemCount = await page.locator('//*[@id="cart-items"]/tr/td[3]').textContent();
    const totalPrice = await page.locator('//*[@id="total-price"]').textContent();

    expect(cartItemCount.trim()).toBe('1');
    expect(totalPrice.trim()).toBe('Tổng giá: 1,800,000 đồng');

    await page.locator('//*[@id="back-home-btn"]').click();
  });
});