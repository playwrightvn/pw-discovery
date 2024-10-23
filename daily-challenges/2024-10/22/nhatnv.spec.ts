import test, { expect } from "@playwright/test";
import path from "path";

test.describe('group 1', async () => {
  const authFile = path.join(__dirname, '../../../playwright/.auth/user.json');
  
  test('Login', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/01-concert-ticket/');
    await page.fill("//input[@id='username']", "vn84");
    await page.fill("//input[@id='password']", "StrongPassword@123");
    await page.click("//button[@id='login-btn']");

    await page.context().storageState({ path: authFile });
  });

  test.use({ storageState: authFile});
  test('Open concert', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/01-concert-ticket/');
  })
})