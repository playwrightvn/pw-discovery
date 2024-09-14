// TypeScript
function calculateBMI(weight: number, height: number) {
    let BMI = 0;
    if (weight <= 0 && height <= 0) {
        throw new Error('Please recheck height or weight');
    }
    BMI = weight / (height * height);
    console.log(`BMI: ${BMI}`);
    
    if (BMI < 18.5)
        console.log('Thin');
    else
        if (BMI >= 18.5 && BMI < 24.9)
            console.log('Normal');
        else
            if (BMI >= 25 && BMI < 29.9)
                console.log('Overweight');
            else
                if (BMI > 30)
                    console.log("Obesity");

}

let weight=53, height=1.5;
calculateBMI(weight,height);

import {test} from '@playwright/test';
test('Test Cheap ComputerComponent', async ({page}) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.locator('[href|="01"]').click();
    const textName=await page.locator('#username');
    await textName.clear();
    await textName.fill('ThaoHa');
    const email =await page.locator('#email');
    await email.clear();
    await email.fill('lily@gmail.com');
    await page.locator('[type="submit"]').click();
    // DEBUG PURPOSE ONLY
    await page.waitForTimeout(3 * 1000);
})
