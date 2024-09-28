//TypeScript
function calculateAge(namSinh: number) {
    let age = 0;
    const currentDate = new Date();
    let curentYear = currentDate.getFullYear();
    if (namSinh > curentYear) {
        console.log('Năm sinh không hợp lệ.');
    }
    else { age = curentYear - namSinh; }
    console.log(`Tuổi của bạn là: ${age}`);
}
console.log(calculateAge(1992));

// Playwright
import { expect, test } from '@playwright/test';
import { log } from 'console';
test('Day 18', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');

    await page.locator('[href|="03"]').click();

    await page.locator('#new-task').fill('Xin chào, đây là bài thực hành ngày 18 tháng 9');
    await page.locator('#add-task').click();
    const taskListElement = page.locator('#task-list').locator('li');
    await expect(taskListElement).toHaveCount(1);
    let editContent = 'Xin chào, đây là bài thực hành ngày 18 tháng 9 - phiên bản đã chỉnh sửa';
    page.on('dialog', async dialog => {
        await dialog.accept(editContent)
    })
    await page.locator('.actions').locator('button').nth(0).click();
    await expect(taskListElement.locator('span')).toHaveText(editContent);
    await page.locator('.actions').locator('button').nth(1).click();
    await expect(taskListElement).toBeHidden();
});