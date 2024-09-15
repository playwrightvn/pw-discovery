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
    else {
        console.log('Phân loại: "Béo phì"');
    }
}
let weight = 53, height = 1.5;
calculateBMI(weight, height);

//Playwright
import { expect, test } from '@playwright/test';
test('Day 14', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');

    await page.locator('[href|="01"]').click();

    let username= 'ThaoHa';
    const textName = await page.locator('#username');
    await textName.clear();
    await textName.fill(username);

    let email='lily@gmail.com'
    const txtemail = await page.locator('#email');
    await txtemail.clear();
    await txtemail.fill(email);

    await page.locator('[type="submit"]').click();

    await expect( page.locator('//*[@id="userTable"]//tbody/tr[1]/td[2]')).toHaveText(username);
    await expect( page.locator('//*[@id="userTable"]//tbody/tr[1]/td[3]')).toHaveText(email);
    
    // DEBUG PURPOSE ONLY
    await page.waitForTimeout(3 * 1000);
})
