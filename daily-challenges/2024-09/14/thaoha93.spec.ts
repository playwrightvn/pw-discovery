function calculateBMI(weight: number, height: number) {
    let BMI = 0;
    if (weight <= 0 && height <= 0) {
        throw new Error('Please recheck height or weight');
    }
    BMI = weight / (height * height);
    console.log(`Kết quả BMI: ${BMI}`);

    if (BMI < 18.5) {
        console.log('Phân loại: "Gầy"');
    }
    else if (BMI >= 18.5 && BMI < 24.9) {
        console.log('Phân loại: "Bình thường"');
    }
    else if (BMI >= 25 && BMI < 29.9) {
        console.log('Phân loại: "Thừa cân"');
    }
    else if (BMI > 30) {
        console.log("Béo phì");
    }
}
let weight = 53, height = 1.5;
calculateBMI(weight, height);

//Playwright
import { test } from '@playwright/test';
test('Day 14', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.locator('[href|="01"]').click();
    const textName = await page.locator('#username');
    await textName.clear();
    await textName.fill('ThaoHa');
    const email = await page.locator('#email');
    await email.clear();
    await email.fill('lily@gmail.com');
    await page.locator('[type="submit"]').click();
    // DEBUG PURPOSE ONLY
    await page.waitForTimeout(3 * 1000);
})
