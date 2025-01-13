// Playwright
import { test, expect } from '@playwright/test';
test('Multi pages', async ({ context }) => {
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
    // Remove unit "đ" and dots from the price
    const tgddPrice = tgddFirstItem?.substring(0, tgddFirstItem.length - 1).replace(/\D/g, '');
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
    // Remove unit "đ" and dots from the price
    const ddvPrice = ddvFirstItem?.substring(0, ddvFirstItem.length - 2).replace(/\D/g, '');
    // Verify
    console.log(Number(tgddPrice) < Number(ddvPrice) ? 'TGDD có giá iPhone 16 rẻ hơn'
        : 'DDV có giá iPhone 16 rẻ hơn');
    console.log(Math.min(Number(tgddPrice), Number(ddvPrice)) < 25000000 ?
        'Tôi đã đủ tiền mua' : 'Tôi không đủ tiền mua');
})  