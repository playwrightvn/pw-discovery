// Javascript
function calculateBMI(weight, height) {
    if (weight <= 0 || height <= 0) {
        throw new Error('Weight and height must be positive numbers');
    }
    const BMI_THRESHOLD = weight / (height * height)
    const BMI_CLASSIFICATIONS = {
        UNDERWEIGHT: { threshold: 18.5, message: 'Underweight' },
        NORMAL: { threshold: 24.9, message: 'Normal' },
        OVERWEIGHT: { threshold: 29.9, message: 'Overweight' },
        OBESE: { threshold: Infinity, message: 'Obese' }
    };

    const getClassification = (bmi) => {
        if (bmi < BMI_CLASSIFICATIONS.UNDERWEIGHT.threshold) return BMI_CLASSIFICATIONS.UNDERWEIGHT.message;
        if (bmi < BMI_CLASSIFICATIONS.NORMAL.threshold) return BMI_CLASSIFICATIONS.NORMAL.message;
        if (bmi < BMI_CLASSIFICATIONS.OVERWEIGHT.threshold) return BMI_CLASSIFICATIONS.OVERWEIGHT.message;
        return BMI_CLASSIFICATIONS.OBESE.message;
    };

    console.log(`BMI Result: ${BMI_THRESHOLD}\nClassification : ${getClassification(BMI_THRESHOLD)}`);
}

// Playwright
import { test, expect } from '@playwright/test';

test('check username and email', async ({ page }) => {
    const TEST_USER = {
        username: 'carter.nguyen',
        email: 'carter.nguyen@gmail.com'
    };
    //Navigate to registration page
    await page.goto('https://material.playwrightvn.com/');
    await expect(page).toHaveURL(/.*playwrightvn.com/);
    await page.getByRole('link', { name: /Register Page/ }).click();
    await expect(page).toHaveURL(/.*register-page/);

    //Fill in username, email and register
    await page.getByLabel('Username:').fill(TEST_USER.username);
    await page.getByLabel('Email:').fill(TEST_USER.email);
    await page.getByRole('button', { name: /register/i }).click();

    //Verify
    await expect(page.locator('//table//tr[1]//td[2]')).toHaveText(TEST_USER.username);
    await expect(page.locator('//table//tr[1]//td[3]')).toHaveText(TEST_USER.email);

});