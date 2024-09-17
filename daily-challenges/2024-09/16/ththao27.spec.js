// Javascript

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// const inputString = "ThaoThanh";
// const reversedString = reverseString(inputString);
// console.log("Chuỗi đảo ngược:", reversedString);

// Playwright

import { test, expect } from '@playwright/test';

test('Register Page Test', async ({ page }) => {

  await page.goto("https://material.playwrightvn.com/");
  await page.getByRole("link", { name: /Register Page/}).click();

  const testData = {
    username: "thaothanh",
    email: "thaothanh@gmail.com",
    gender: "female",
    hobby: "technology",
    country: "canada",
    dob: "1998-12-31",
    bio: "Thao test 123",
  };

  await page.getByLabel("Username").fill(testData.username);
  await page.getByLabel("Email").fill(testData.email);
  await page.check('#female');
  await page.check('#reading');
  await page.selectOption('#interests', testData.hobby);
  await page.selectOption('#country', testData.country);
  await page.fill('input[type="date"]', testData.dob);
  await page.fill('#bio', testData.bio);

  await page.getByRole("button", { name: "Register" }).click();


  await expect(page.locator('tbody tr')).toHaveCount(1);
  
  const cells = page.locator('tbody td');
  await expect(cells.nth(1)).toHaveText(testData.username);
  await expect(cells.nth(2)).toHaveText(testData.email);
  await expect(page.locator("//tbody//td").nth(3)).toContainText(`Gender: female`);
  await expect(page.locator("//tbody//td").nth(3)).toContainText(`Hobbies: traveling`);
  await expect(page.locator("//tbody//td").nth(3)).toContainText(`Country: canada`);
  await expect(page.locator("//tbody//td").nth(3)).toContainText(`Date of Birth: ${testData.dob}`);
  await expect(page.locator("//tbody//td").nth(3)).toContainText(`Biography: ${testData.bio}`);
});
