//Javascript
function reverseString(str) {
    let reversedStr = str.split('').reverse().join('');
    console.log(reversedStr);
}
reverseString("hello");

// Playwright
import { test, expect } from '@playwright/test';

const date = "2024-09-24";
const userName = "NTL";
const email = "ntl@gmail.com";
const description = "k9-playwright";
const country = "usa";
const rating = "10";
const color = "#808080";


test('Playwright Challenge', async ({ page }) => {
  await test.step("Navigate to Material Playwright Page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Click on User Registration", async () => {
    await page.locator('//a[@href="01-xpath-register-page.html"]').click();
  });

  await test.step("Fill information to all fields",async()=> {
    await page.locator('//input[@id="username"]').fill(userName);
    await page.locator('//input[@id="email"]').fill(email);
    await page.locator('//input[@id="male"]').check();

    await page.locator('//input[@id="reading"]').check();
    await page.locator('//input[@id="cooking"]').check();

    await page.locator('//option[@value="technology"]').click({ modifiers: ['Control'] });
    await page.locator('//option[@value="sports"]').click({ modifiers: ['Control'] });

    await page.selectOption('//select[@id="country"]',country);
    await page.locator('//input[@id="dob"]').fill(date);
    await page.locator('//input[@id="profile"]').setInputFiles(`tests/lessson-5/test-data/f8_icon.png`);
    await page.locator('//textarea[@id="bio"]').fill(description);
    await page.locator('//input[@id="rating"]').fill(rating);
    await page.locator('//input[@id="favcolor"]').fill(color);
    await page.locator('//div[@class="tooltip"]').hover();
    await page.locator('//input[@id="newsletter"]').check();
    await page.locator('//span[@class="slider round"]').check();
  })

  await test.step("Click Register button",async()=>{
    await page.locator('//button[normalize-space()="Register"]').click();
  })
});