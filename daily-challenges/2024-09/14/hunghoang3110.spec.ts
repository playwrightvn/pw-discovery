// Javascript
function caculateBMI(weight, height) {
    var bmi, phanloai;
    bmi = weight / (height * height)
    if (bmi < 18.5) {
        phanloai = 'Gay';
    }
    else if (bmi >= 18.5 && bmi < 24.9) {
        phanloai = 'Can doi';
    }
    else if (bmi >= 25 && bmi < 29.9) {
        phanloai = 'Thua can';
    }
    else if (bmi >= 30) {
        phanloai = 'Beo phi';
    }
    console.log(`Ket qua BMI: ${bmi}  \nPhan loai : ${phanloai}`);
}

caculateBMI(60,1.68);

// Playwright
import {test, expect} from '@playwright/test';

test('check username and email', async ({page}) => {
    var user_name = 'carter.nguyen', email_name = 'carter.nguyen@gmail.com';
    
    //go to Register page
    await page.goto('https://material.playwrightvn.com/');
    await page.getByRole('link', { name: /Register Page/ }).click();

    //fill in username, email and register
    await page.getByLabel('Username:').fill(user_name);
    await page.getByLabel('Email:').fill(email_name);
    await page.getByRole('button', {name: /register/i}).click();

    //Verify
    await expect(page.locator('//table//tr[1]//td[2]')).toHaveText(user_name);
    await expect(page.locator('//table//tr[1]//td[3]')).toHaveText(email_name);

});