// Javascript
function revertString(input) {
    let rev_string = input.split("").reverse().join("");
    console.log(`OUTPUT:\n${rev_string}`);
}

// Playwright
import { test, expect } from '@playwright/test';
import { randomInt } from 'crypto';

test('check username and email', async ({ page }) => {
    // prepare test data
    var new_time = new Date(),
        tLocaleString = new_time.toLocaleDateString().split("/");
    const TEST_USER = {
        userName : 'carter.nguyen',
        email : 'carter.nguyen@gmail.com',
        interests : ["Technology", "Science", "Music", "Sports"],
        country : 'canada',
        dob : tLocaleString[2] + '-' + tLocaleString[1] + '-' + tLocaleString[0],
        picture : 'daily-challenges/2025-09/images/001-2024-09-01.gif',
        bio : 'No pain, no gain',
        rate : randomInt(1, 10).toString(),
        color : '#ff0000'
    };

    //go to Register Page web
    await page.goto('https://material.playwrightvn.com/');
    await expect(page).toHaveURL(/.*playwrightvn.com/);
    await page.getByRole('link', { name: /Register Page/ }).click();
    await expect(page).toHaveURL(/.*register-page/);

    //fill form and register
    await page.getByLabel("Username").fill(TEST_USER.userName);
    await page.getByLabel("Email").fill(TEST_USER.email);
    await page.getByLabel('Male', { exact: true }).check();
    await page.getByLabel('Traveling').check();
    await page.getByLabel('Cooking').check();
    await page.getByLabel('Interests').selectOption(TEST_USER.interests);
    await page.getByLabel('Country').selectOption(TEST_USER.country);
    await page.getByLabel('Date of Birth').click();
    await page.getByLabel('Date of Birth').fill(TEST_USER.dob);
    await page.getByLabel('Profile Picture').setInputFiles(TEST_USER.picture);
    await page.getByLabel('Biography').fill(TEST_USER.bio);
    await page.getByLabel('Rate Us').fill(TEST_USER.rate);
    await page.locator('#favcolor').click();
    await page.locator('#favcolor').fill(TEST_USER.color);
    await page.getByLabel('Subscribe').check();
    await page.getByText('Enable Feature').click();
    await page.getByRole('button', { name: /register/i }).click();

    //Verify
    await expect(page.locator("//tbody//tr")).toHaveCount(1);
    await expect(page.locator("//tbody//td[2]")).toHaveText(TEST_USER.userName);
    await expect(page.locator("//tbody//td[3]")).toHaveText(TEST_USER.email);
    await expect(page.locator("//tbody//td[4]")).toContainText('Gender: male');
    await expect(page.locator("//tbody//td[4]")).toContainText('Hobbies: traveling, cooking');
    await expect(page.locator("//tbody//td[4]")).toContainText(`Country: ${TEST_USER.country}`);
    await expect(page.locator("//tbody//td[4]")).toContainText(`Date of Birth: ${TEST_USER.dob}`);
    await expect(page.locator("//tbody//td[4]")).toContainText(`Biography: ${TEST_USER.bio}`);
    await expect(page.locator("//tbody//td[4]")).toContainText(`Rating: ${TEST_USER.rate}`);
    await expect(page.locator("//tbody//td[4]")).toContainText(`Favorite Color: ${TEST_USER.color}`);
    await expect(page.locator("//tbody//td[4]")).toContainText(`Biography: ${TEST_USER.bio}`);
    await expect(page.locator("//tbody//td[4]")).toContainText('Newsletter: Yes');
    await expect(page.locator("//tbody//td[4]")).toContainText('Enable Feature: Yes');

});