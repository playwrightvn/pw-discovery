import { expect, test } from '@playwright/test';

test('solution for day 29/11/24', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await expect(page.getByText('Tài liệu học automation test')).toBeVisible();

    await page.getByRole('link', { name: 'Game 04: Trang trí cây thông Noel' }).click();
    await expect(page.getByText('Trang Trí Cây Thông Noel')).toBeVisible();

    let listStyles = await page.locator('ul[style]>li').all();
    let arrStyles: object[] = [];

    for (const style of listStyles) {
        let txtStyle = await style.textContent();
        let textMatch = txtStyle?.match(/(\d+)\s+(.*)/);
        if (textMatch) {
            arrStyles.push({ styleName: textMatch[2], quantity: textMatch[1] });
        }
    }
    for (const element of arrStyles) {
        await page.getByRole('button').filter({ hasText: element['styleName'] }).click({ clickCount: +element['quantity'] });
    }
    await expect(page.locator(`//div[@id='result-message']`)).toHaveText('🎉 Chúc mừng! Bạn đã hoàn thành xuất sắc!');
})