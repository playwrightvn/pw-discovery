// Javascript
// hello

const reverseString = (str: string) => {
    let result = '';

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}

console.log(reverseString("hello"));

// Playwright
import { test, expect } from '@playwright/test';

const testData = {
    username: "playwright_viet_nam",
    email: "playwrightvietnam@gmail.com",
    interest: ["Technology", "Science"],
    country: "Canada",
    dateOfBirth: "2024-09-16",
    profilePicture: "daily-challenges/2024-09/16/00-problem.md",
    biography: "Don't watch the clock. Do what it does! Keep going!",
    rateUs: "7",
    favColor: "#ff0000"
}
test('2024-09 day 14', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.getByRole("link", { name: /Register Page/ }).click();

    const username = "playwright_viet_nam";
    const email = "playwrightvietnam@gmail.com";

    // Fill information
    await page.getByLabel("Username").fill(username);
    await page.getByLabel("Email").fill(email);
    await page.getByLabel("Male", { exact: true }).check();
    await page.getByLabel("Traveling", { exact: true }).check();
    await page.getByLabel("Interests").selectOption(testData.interest);
    await page.getByLabel("Country").selectOption(testData.country);
    await page.getByLabel("Date of Birth").fill(testData.dateOfBirth);
    await page.getByLabel("Profile Picture").setInputFiles(testData.profilePicture);
    await page.getByLabel("Biography").fill(testData.biography);
    await page.getByLabel("Rate Us").fill(testData.rateUs);
    await page.locator("#favcolor").fill(testData.favColor);

    // Submit
    await page.getByRole("button", { name: "Register" }).click();

    // Verify
    await expect(page.locator("//tbody//tr")).toHaveCount(1);
    await expect(page.locator("//tbody//td").nth(1)).toHaveText(username);
    await expect(page.locator("//tbody//td").nth(2)).toHaveText(email);

    await expect(page.locator("//tbody//td").nth(3)).toContainText(`Gender: male`);
    await expect(page.locator("//tbody//td").nth(3)).toContainText(`Hobbies: traveling`);
    await expect(page.locator("//tbody//td").nth(3)).toContainText(`Country: canada`);
    await expect(page.locator("//tbody//td").nth(3)).toContainText(`Date of Birth: ${testData.dateOfBirth}`);
    await expect(page.locator("//tbody//td").nth(3)).toContainText(`Biography: ${testData.biography}`);
    await expect(page.locator("//tbody//td").nth(3)).toContainText(`Rating: ${testData.rateUs}`);
    await expect(page.locator("//tbody//td").nth(3)).toContainText(`Favorite Color: ${testData.favColor}`);

})