import { expect, Locator, test } from '@playwright/test';
//Javascript
function calculateTip(totalBill: number, percentTip: number): void {
    const totalTip: number = totalBill * (percentTip / 100)
    console.log(`Tiền tip: ${totalTip}`);
}
calculateTip(150, 15);


//PlayWright
test('solution 26/09/2024', async ({ page }) => {
    const txt_search: Locator = page.getByPlaceholder('Nhập nội dung tìm kiếm...');
    const btn_search: Locator = page.getByRole('button', { name: 'Tìm kiếm' });

    await page.goto('https://material.playwrightvn.com/021-import-export.html');
    await page.locator('//select[@id="filterCriteria"]').selectOption('lop');
    await txt_search.fill('A4', { force: true });
    await btn_search.click();
    await expect(page.locator('//*[@id="studentTable"]/tbody')).toHaveCount(1);
    await txt_search.clear();
    await btn_search.click();
    await expect(page.locator('//*[@id="studentTable"]/tbody/tr')).toHaveCount(5);
});