//Javascript
function calculateBMI(height, weight){
    let bmi = weight / (height * height);
    console.log(`Kết quả BMI: ${bmi}`);
    if(bmi < 18.5){
        console.log("Phân loại: Gầy");
    } else if(bmi >= 18.5 && bmi <24.9){
        console.log("Phân loại: Bình thường");
    }else if(bmi >= 25 && bmi <=29.9){
        console.log("Phân loại: Thừa cân");
    }else{
        console.log("Phân loại: Béo phì");
    }
}

calculateBMI(1.65, 48);

//Playwright
import { test, expect } from '@playwright/test';
const name = "Lan Anh";
const email = "lananh@gmail.com";

test("Register Page", async({page}) => {
    await test.step("Tới trang Playwright", async() => {
        await page.goto('https://material.playwrightvn.com/');   
    });

    await test.step("Click Register Page", async() => {
        await page.locator('//a[@href ="01-xpath-register-page.html"]').click();
    });

    await test.step("Nhập User name và Email", async() => {
        await page.locator('//input[@id = "username"]').fill(name);
        await page.locator('//input[@id = "email"]').fill(email);
    });

    await test.step("Nhấn mút Register", async() => {
        await page.locator('//button[@type = "submit"]').click();
    });

    await test.step("Kiểm tra", async() => {
      await expect(page.locator("//tbody//tr")).toHaveCount(1);
      await expect(page.locator("//tbody//td").nth(1)).toHaveText(name);
      await expect(page.locator("//tbody//td").nth(2)).toHaveText(email);
    });
})