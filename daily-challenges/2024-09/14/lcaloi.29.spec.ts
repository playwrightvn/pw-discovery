//JavaScript

import test, { expect } from "@playwright/test";
import { waitForDebugger } from "inspector";



function calculateBMI(heights: number, weights: number): void {

    if (!heights || !weights)
        throw new Error(`heights or weights is invalid, please input valid`);

    const BMI: number = weights / Math.pow(heights, 2);
    let result: string;
    if (BMI < 18.5) result = 'Gầy'
    else if (BMI >= 18.5 && BMI < 24.9) result = 'Bình thường';
    else if (BMI >= 25 && BMI < 29.9) result = 'Thừa cân';
    else result = 'Béo phì';


    console.log(`Kết quả BMI : ${BMI.toFixed(1)}\nPhân loại: ${result}`)

}


const heights: number = 1.75;
const weights: number = 68;
calculateBMI(heights, weights);




//PlayWright

test('Solution 14/09/2024', async ({ page }) => {

    await page.goto('https://material.playwrightvn.com/');

    await page.getByText('Bài học 1: Register Page (có đủ các element)', { exact: true })
        .click();

    expect(page.url()).toContain('01-xpath-register-page.html');
    const userName = 'Yah Sure';
    const email = 'bestyahsure123@gmail.com';

    await page.locator('#username').clear();
    await page.locator('#username').fill(userName);

    await page.locator('#email').clear();
    await page.locator('#email').fill(email);

    await page.getByRole('button', { name: 'Register' }).click();



    await expect(page.locator('//table[@id="userTable"]//tbody')).toHaveCount(1);
    await expect(page.locator('//table[@id="userTable"]//tbody//td').nth(1)).toHaveText(userName);
    await expect(page.locator('//table[@id="userTable"]//tbody//td').nth(2)).toHaveText(email);

});