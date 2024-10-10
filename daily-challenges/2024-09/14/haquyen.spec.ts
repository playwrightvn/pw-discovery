import { test, expect } from "@playwright/test";

function calculateBMI(height: number, weight: number): void {
  if (height <= 0 || weight <= 0) {
    throw new Error("Height and weight must be positive numbers");
  }
  const BMI = weight / (height * height);
  let bodyType: string;

  if (BMI < 18.5) {
    bodyType = "Gầy";
  } else if (BMI < 24.9) {
    bodyType = "Bình thường";
  } else if (BMI < 29.9) {
    bodyType = "Thừa cân";
  } else {
    bodyType = "Béo phì";
  }
  console.log(`- Kết quả BMI: ${BMI.toFixed(1)}`);
  console.log(`- Phân loại: ${bodyType}`);
}

test("Challenge 14", async ({ page }) => {
  let username = "testing123";
  let email = "testing123@gmail.com";
  await page.goto("https://material.playwrightvn.com/");
  await page
    .locator(
      "//a[contains(text(), 'Bài học 1: Register Page (có đủ các element)')]"
    )
    .click();
  await page.locator("#username").fill(username);
  await page.locator("#email").fill(email);
  await page.getByRole("button", { name: "Register" }).click();
  await expect(page.locator("//*[@id='userTable']/tbody/tr")).toHaveCount(1);
  await expect(page.getByRole("row", { name: username })).toBeVisible();
  await expect(page.getByRole("row", { name: email })).toBeVisible();
});
