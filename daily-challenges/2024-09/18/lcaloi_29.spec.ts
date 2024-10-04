import { test, expect, Page } from "@playwright/test";

//Javascript
function calculateAge(input: number) {
    const currentYear: number = new Date().getFullYear();
    if (input > currentYear) {
        throw new Error('Năm sinh không hợp lệ.');
    }
    console.log(`Tuổi của bạn là: ${currentYear - input}`);
}

calculateAge(1990);

//Playwright
test('Solution 18/09/2024', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.getByRole("link", { name: /Todo page/ }).click();
    await page.getByPlaceholder('Enter a new task').fill('Xin chào, đây là bài thực hành ngày 18 tháng 9');
    await page.getByRole('button', { name: 'Add Task' }).click();
    expect(await page.locator('//ul[@id="task-list"]/li').count()).toBe(1);
    page.on('dialog', async dialog => {
        dialog.accept('Xin chào, đây là bài thực hành ngày 18 tháng 9 - phiên bản đã chỉnh sửa')
    });
    await page.locator('//button[@onclick="editTask(0)"]').click();
    await expect(page.locator('//ul[@id="task-list"]/li/span')).toHaveText('Xin chào, đây là bài thực hành ngày 18 tháng 9 - phiên bản đã chỉnh sửa');
    await page.getByRole('button', { name: 'Delete' }).click();
    await expect(page.locator(`//ul[@id="task-list"]/li`)).toHaveCount(0)
});