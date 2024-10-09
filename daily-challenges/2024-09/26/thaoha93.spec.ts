//JS
function calculateTip(totalBill: number, percent: number) {
    const tipAmount = (totalBill * percent) / 100;
    return tipAmount;
}
console.log(`Tiền tip ${calculateTip(100, 15)}`);

//Playwright
import { expect, test } from '@playwright/test'
test("Day 26", async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/021-import-export.html');

    let totalRows = await page.locator('//*[@id="studentTable"]//tbody/tr').count();
    await page.selectOption('#filterCriteria', 'Lớp');
    const txtSearch = page.locator('#searchInput');
    await txtSearch.fill('A4');
    const btnSearch = page.locator('#searchButton');
    await btnSearch.click();

    await expect(page.locator('//*[@id="studentTable"]//tbody/tr[not(contains(@style,"none"))]')).toHaveCount(1);
    await expect(page.locator('//*[@id="studentTable"]//tbody/tr[not(contains(@style,"none"))]/td').nth(2)).toHaveText('10A4');

    await txtSearch.clear();
    await btnSearch.click();

    await expect(page.locator('//*[@id="studentTable"]//tbody/tr[(contains(@style,"none"))]')).toHaveCount(0);
    await expect(await page.locator('//*[@id="studentTable"]//tbody/tr[not(contains(@style,"none"))]').count()).toEqual(totalRows);
})