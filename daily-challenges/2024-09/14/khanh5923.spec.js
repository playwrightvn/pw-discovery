function calculateBMI(height, weight){
    var BMI
    height = height*height
    BMI = (weight / height).toFixed(1);
    console.log(`- Ket qua BMI: ${BMI}`)
    if(BMI < 18.5) {console.log('- Phan loai: Gay')}
    else if(BMI >= 18.5 && BMI < 24.9) {console.log("- Phan loai: Binh thuong")}
    else if(BMI >= 25 && BMI < 29.9) {console.log("- Phan loai: Thua can")}
    else if(BMI >= 30) {console.log("- Phan loai: Beo phi")}
}

calculateBMI(1.60, 68)

import { test, expect } from '@playwright/test';
test("bai1", async({page})=>{
    await page.goto("https://material.playwrightvn.com/")
    await page.locator(`//a[contains(text(),'Bài học 1: Register Page (có đủ các element)')]`).click()
    const testData = {
        username: "khanhtran",
        email: "khanhtran@yopmail.com"
    };
    await page.locator(`//input[@id='username']`).fill(testData.username)
    await page.locator(`//input[@id="email"]`).fill(testData.email)
    await page.click(`//button[@type='submit']`)

    const rowCount = await page.locator(`//tbody//tr`).count();
    const cells = page.locator(`//tbody//tr[${rowCount}]//td`)
    await expect(cells.nth(1)).toHaveText(testData.username);
    await expect(cells.nth(2)).toHaveText(testData.email);
})