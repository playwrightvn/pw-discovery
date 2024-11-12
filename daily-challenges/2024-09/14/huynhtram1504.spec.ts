import { test, expect } from '@playwright/test';
//Javascript
//Write function to calculate BMI
function calculateBMI(height, weight){
    const BMI = weight/(height*height);
    let bodyType = '';
    if(BMI< 18.5){
        bodyType = "Gầy";

    } else if(BMI >= 18.5 && BMI < 24.9) {
        bodyType = "Bình thường";

    } else if (BMI >=25 && BMI < 29.9){
        bodyType = "Thừa cân";
   
    } else {
        bodyType ="Béo phì";
    }
    return{
        bmi: BMI,
        bodyType: bodyType
    };

};
const result = calculateBMI(1.56, 59);
console.log(`- Kết quả BMI: ${result.bmi}`);
console.log(`- Kết quả phân loại: ${result.bodyType}`);

//Playwright
test ("2024-09 day 14 - Register Page", async({page})=>{
    //Go to Playwright - Register page
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
    //Input username and email
    const username = "huynhtram";
    const email = "huynhtram@gmail.com";
    await page.locator("//input[@id='username']").fill(username);
    await page.locator("//input[@id='email']").fill(email);
    //Select "Register" button
    await page.locator("//button[text()='Register']").click();
    //Verify the table display 1 row
    await expect(page.locator("//table[@id='userTable']/tbody/tr")).toHaveCount(1); 
    //Verify correct user name and email
    await expect(page.locator("//table[@id='userTable']/tbody/tr/td").nth(1)).toHaveText(username);
    await expect(page.locator("//table[@id='userTable']/tbody/tr/td").nth(2)).toHaveText(email);

});
