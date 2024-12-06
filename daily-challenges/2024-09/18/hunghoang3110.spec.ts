// Javascript
function calculateAge (input) {
    if (typeof input !== 'number' || input <= 0 || !Number.isInteger(input)) {
        throw new Error('Input must be a positive number');
    }
    const curYear = new Date().getFullYear();
    let age;
    if (input > curYear) {
        return 'Input is greater than current year';
    } else {
        age = curYear - input;
    }
    return `Your age: ${age}`
}

// Playwright
import {test, expect} from '@playwright/test'

test('fill in to do', async ({page}) => {
    
    // Prepate data
    const firstContent = 'Xin chào, đây là bài thực hành ngày 18 tháng 9';
    const editContent = 'Xin chào, đây là bài thực hành ngày 18 tháng 9 - phiên bản đã chỉnh sửa';

    //Navigate to registration page
    await page.goto('https://material.playwrightvn.com/');
    await expect(page).toHaveURL(/.*playwrightvn.com/);
    await page.getByRole('link', { name: /Todo page/ }).click();
    await expect(page).toHaveURL(/.*todo-list/);

    //Add task and verify
    await page
        .getByPlaceholder('Enter a new task')
        .fill(firstContent);
    await page
        .getByRole('button', {name: 'Add Task'})
        .click();
    await expect(page.getByRole('listitem')).toHaveCount(1);  
        
    //Edit the task and verify
    page.on('dialog', dialog => dialog.accept(editContent));
    await page
        .getByRole('button', {name: 'Edit'})
        .click();
    await expect(page.getByText(editContent, { exact: true })).toBeVisible();

    //Delete the task and verify
    await page
        .getByRole('button', {name: 'Delete'})
        .click();
    await expect(page.getByRole('listitem')).toHaveCount(0);

})