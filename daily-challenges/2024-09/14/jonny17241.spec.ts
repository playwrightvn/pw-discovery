function calculateBMI( hight: number,  weight: number){
    let resultBMI ;
    const BMI = hight /weight *weight;
    if(BMI < 18.5){
    resultBMI = 'Gầy';
    }else if (18.5 <= BMI && BMI< 24.9){
    resultBMI ='Bình thường'
    }else if(25 <= BMI && BMI < 29.9 ){
    resultBMI ='Thừa cân'
    }else{
    resultBMI = 'Béo phì';
    }
    return ["Kết quả BMI:"+ BMI,
    "Phân loại" + resultBMI]
    }
    const BMI = calculateBMI(1.75, 68)
    console.log(BMI)
    import { expect, test } from '@playwright/test';
    test('2024-09 day 14', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.locator("//a[contains(text(), 'Bài học 1: Register')]").click();
    await page.waitForLoadState("load");
    const username = "jonny";
    const email ="jonnytestinginmylife@gmail.com";
    await page.locator("input#username").fill(username);
    await page.locator("input#email").fill(email);
    await page.locator("//button[text()='Register']").click();
    await page.waitForLoadState("domcontentloaded");
    expect( page.locator("//table/tbody/tr/td").nth(1)).toContainText(username);
    expect( page.locator("//table/tbody/tr/td").nth(2)).toContainText(email);
    })