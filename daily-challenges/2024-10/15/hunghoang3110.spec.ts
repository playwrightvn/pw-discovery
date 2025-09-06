// Playwright
import { test, expect } from '@playwright/test';
test('Compare iPhone prices between TGDD and DDV', async ({ context }) => {
    // Mark this test as slow 
    test.slow();
    // Create a new tab and navigate to TDGD web
    const tgdd = await context.newPage();
    await tgdd.goto('https://www.thegioididong.com', { waitUntil: 'load' });
    await expect(tgdd).toHaveTitle(/thegioididong/i);
    // Search for Iphone 16
    const tgddSearchBox = tgdd.getByPlaceholder('Bạn tìm gì...');
    await tgddSearchBox.fill('iPhone 16');
    await tgddSearchBox.press('Enter');
    // Get the price of the first item
    const tgddFirstItem = await tgdd.getByRole('listitem')
      .filter({ hasText: /iphone 16/i })
      .first()
      .getByRole('link')
      .first()
      .getByRole('strong')
      .textContent();
    // Handle potential null values
    if (!tgddFirstItem) {
      throw new Error('Price element not found');
    }
    // Remove unit "đ" and dots from the price
    const tgddPrice = tgddFirstItem?.substring(0, tgddFirstItem.length - 1).replace(/\D/g, '');
    // Handle potential invalid formats
    if (!tgddPrice || isNaN(Number(tgddPrice))) {
      throw new Error('Invalid price format');
    }
    // Create a new tab and navigate to DDV web
    const ddv = await context.newPage();
    await ddv.goto('https://didongviet.vn', { waitUntil: 'load' });
    await expect(ddv).toHaveTitle(/didongviet/i);
    // Search for Iphone 16
    const ddvSearchBox = ddv.getByRole('textbox');
    await ddvSearchBox.fill('iPhone 16');
    await ddvSearchBox.press('Enter');
    // Get the price of the first item
    const ddvFirstItem = await ddv
      .getByRole('link')
      .filter({ hasText: /iphone 16/i })
      .getByRole('paragraph')
      .filter({ hasText: /[0-9.](?= đ)/ })
      .first()
      .textContent();
    // Handle potential null values
    if (!tgddFirstItem) {
      throw new Error('Price element not found');
    }
    // Remove unit "đ" and dots from the price
    const ddvPrice = ddvFirstItem?.substring(0, ddvFirstItem.length - 2).replace(/\D/g, '');
    // Handle potential invalid formats
    if (!tgddPrice || isNaN(Number(tgddPrice))) {
      throw new Error('Invalid price format');
    }
    // Verify
    const PRICE_THRESHOLD = 25_000_000;
    const tgddPriceNum = Number(tgddPrice);
    const ddvPriceNum = Number(ddvPrice);
    console.log(tgddPriceNum, ddvPriceNum);
    console.log(tgddPriceNum < ddvPriceNum ? 'TGDD có giá iPhone 16 rẻ hơn'
      : 'DDV có giá iPhone 16 rẻ hơn');
    console.log(Math.min(tgddPriceNum, ddvPriceNum) < 25000000 ?
      'Tôi đã đủ tiền mua' : 'Tôi không đủ tiền mua');
  });  