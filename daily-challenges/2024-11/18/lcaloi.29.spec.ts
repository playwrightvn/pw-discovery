import { expect, Page, test } from '@playwright/test';

test.describe('solution 18/11/24', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://material.playwrightvn.com/026-trello.html');
        await addBoard(page, 'Cần làm');
        await addBoard(page, 'Đang làm');
        await addBoard(page, 'Đã hoàn thành');
    });

    test('Thêm công việc', async ({ page }) => {
        await page.click(`//h3[text()='Cần làm']/../following-sibling::div[@class='add-card']`);
        await page.fill(`//input[@class='card-input']`, 'Viết bài Playwright Việt Nam');
        await page.click(`//button[text()='Thêm thẻ']`);
        await expect(page.locator(`div.card`).locator(`css=>div:nth-child(1)`)).toHaveClass('label priority-high');
        await page.locator('div.card').dragTo(page.locator(`//*[text()='Đang làm']/../following-sibling::div[@class='add-card']`));
    });

    test.afterEach(async ({ page }) => {
        for (let i = 0; i < 3; i++) {
            await page.locator(`span.delete-list`).nth(0).click();
        }
        await page.close();
    })
});


async function addBoard(page: Page, columnName: string) {
    const isColumnExist: boolean = await page.getByText(columnName).isVisible();
    if (!isColumnExist) {
        await page.locator('div.add-list').click();
        await page.locator('input.list-input').fill(columnName);
        await page.locator(`//button[text()='Thêm danh sách']`).click();
    }
}
