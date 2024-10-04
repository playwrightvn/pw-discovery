import { log } from "console";

function reverseString(originalString:string){
    var newString = "";
    for (let i = originalString.length - 1; i >= 0; i--) {
        newString += originalString[i];
    }
    return newString;
}
console.log(reverseString('hello'));

// Playwright
import { expect, test } from '@playwright/test';
const testData = {
    userName: "thaoha",
    email: "lily@gmail.com",
    interests: ['Technology','Science','Music'],
    country: "Canada",
    dateOfBirth: "1993-09-29",
    profilePicture: "daily-challenges/2024-09/16/00-problem.md",
    biography: "Think outsite of the box",
    rateUs: "9",
    favColor: "#00ffaa"
  }

test('Day 16', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');

    await page.locator('[href|="01"]').click();
    const textName = await page.locator('#username');
    await textName.clear();
    await textName.fill(testData.userName);
    const txtemail = await page.locator('#email');
    await txtemail.clear();
    await txtemail.fill(testData.email);
    await page.locator('#female').click();
    await page.locator('[for="reading"]').click();
    await page.selectOption('#interests', testData.interests);
    await page.selectOption('#country', testData.country);
    await page.locator("#dob").fill(testData.dateOfBirth);
    await page.locator("#bio").fill(testData.biography);
    await page.locator("#rating").fill(testData.rateUs);
    await page.locator("#favcolor").fill(testData.favColor);
    await page.locator('[type="submit"]').click();

    await expect(page.locator("//tbody//tr")).toHaveCount(1);
    await expect(page.locator("//tbody//td").nth(1)).toHaveText(testData.userName);
    await expect(page.locator("//tbody//td").nth(2)).toHaveText(testData.email);
    await expect(page.locator("//tbody//td").nth(3)).toContainText(`Gender: female`);
    await expect(page.locator("//tbody//td").nth(3)).toContainText(`Hobbies: reading`);
    await expect(page.locator("//tbody//td").nth(3)).toContainText(`Country: ${testData.country.toLowerCase()}`);
    await expect(page.locator("//tbody//td").nth(3)).toContainText(`Date of Birth: ${testData.dateOfBirth}`);
    await expect(page.locator("//tbody//td").nth(3)).toContainText(`Biography: ${testData.biography}`);
    await expect(page.locator("//tbody//td").nth(3)).toContainText(`Rating: ${testData.rateUs}`);
    await expect(page.locator("//tbody//td").nth(3)).toContainText(`Favorite Color: ${testData.favColor}`);
    // DEBUG PURPOSE ONLY
    await page.waitForTimeout(10* 1000);
});
