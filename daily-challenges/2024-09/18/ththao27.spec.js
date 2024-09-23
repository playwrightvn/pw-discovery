import { test, expect } from '@playwright/test';

// Javascript
function calculateAge(yearOfBirth) {
    const currentYear = new Date().getFullYear(); 

    if (yearOfBirth > currentYear) {
        console.log("Năm sinh không hợp lệ.");
        return;
    }

    const age = currentYear - yearOfBirth; 
    console.log(`Tuổi của bạn là: ${age}`);
}

calculateAge(2025); 
calculateAge(1998); 

// Playwright

test('Todo page automation - ngày 18 tháng 9', async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/");
  await page.getByRole('link', { name: 'Bài học 3: Todo page' }).click();

  const initialTodoContent = "Xin chào, đây là bài thực hành ngày 18 tháng 9";
  await page.getByPlaceholder('Enter a new task').fill(initialTodoContent);
  await page.getByRole('button', { name: 'Add' }).click();

  const taskList = page.locator('#task-list');
  await expect(taskList.locator('li')).toHaveCount(1);

  const editedTodoContent = `${initialTodoContent} - phiên bản đã chỉnh sửa`;
  page.once('dialog', async dialog => {
    await dialog.accept(editedTodoContent);
  });
  await page.getByRole('button', { name: 'Edit' }).first().click();
  await expect(page.getByText(editedTodoContent)).toBeVisible();

  page.once('dialog', async dialog => {
    await dialog.accept();
  });
  await page.getByRole('button', { name: 'Delete' }).click();
  await expect(taskList.locator('li')).toHaveCount(0); 
});



