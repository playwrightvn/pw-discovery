// // Javascript
// function calculateBMI(weight, height) {
//     let bmi = weight / (height * height);
//     bmi = bmi.toFixed(1);

//     let category = '';
//     if (bmi < 18.5) {
//         category = 'Gầy';
//     } else if (bmi >= 18.5 && bmi < 24.9) {
//         category = 'Bình thường';
//     } else if (bmi >= 25 && bmi < 29.9) {
//         category = 'Thừa cân';
//     } else {
//         category = 'Béo phì';
//     }

//     console.log(`Kết quả BMI: ${bmi}`);
//     console.log(`Phân loại: ${category}`);
    
//     return { bmi: bmi, category: category };
// }

// calculateBMI(51, 1.6);

// Playwright
const { test, expect } = require('@playwright/test');

test('Register Page Test', async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/");
  await page.getByRole("link", { name: /Register Page/}).click();

  const testData = {
    username: "thaothanh",
    email: "thaothanh@gmail.com"
  };

  await page.getByLabel("Username").fill(testData.username);
  await page.getByLabel("Email").fill(testData.email);
  await page.click('button:has-text("Register")');

  await expect(page.locator('tbody tr')).toHaveCount(1);
  
  const cells = page.locator('tbody td');
  await expect(cells.nth(1)).toHaveText(testData.username);
  await expect(cells.nth(2)).toHaveText(testData.email);
});