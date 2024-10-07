import { test, expect } from "@playwright/test";

const userName = "Hautvph17241";
const email = "hautvph17241@gmail.com";
test("Day 14/08/2024", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/");
  await page.waitForLoadState("networkidle");
  await page.getByRole("link", { name: "Register Page" }).click();
  await page.locator("#username").fill(userName);
  await page.locator("#email").fill(email);
  await page.getByRole("button", { name: "Register" }).click();
  const tableElements = page.locator('//table[@id="userTable"]/tbody/tr/td');
  await expect(tableElements).toBeVisible();
  await expect(tableElements.nth(1)).toHaveText(userName);
  await expect(tableElements.nth(2)).toHaveText(email);
});

function calculateBMI(height: number, weight: number) {
  const BMI = weight / (height * height);
  let classify: any;
  if (BMI < 18.5) {
    classify = "Gầy";
  } else if (18.5 <= BMI && BMI < 24.9) {
    classify = "Bình thường";
  } else if (25 <= BMI && BMI < 29.9) {
    classify = "Thừa cân";
  } else {
    classify = "Béo phì";
  }
  return [BMI, classify];
}
const [BMI, classify] = calculateBMI(1.68, 63);
console.log("Kết quả BMI: " + BMI);
console.log("Phân loại: " + classify);
