function calculateBMI(height, weight){
    var BMI
    height = Math.pow(height,2)
    BMI = (weight / height).toFixed(1);
    console.log(`Ket qua BMI: ${BMI}`)
    if(BMI < 18.5) console.log('Gay')
    else if(BMI >= 18.5 && BMI < 24.9) console.log("Binh thuong")
    else if(BMI >= 25 && BMI < 29.9) console.log("Thua can")
    else if(BMI >= 30) console.log("Beo phi")
}

calculateBMI(1.75, 68)

import { test, expect } from '@playwright/test';
test.only("bai1", async({page})=>{
    await page.goto("https://material.playwrightvn.com/")
    // const baihoc1 = page.locator(`//a[contains(text(),'Bài học 1: Register Page (có đủ các element)')]`)
    await page.locator(`//a[contains(text(),'Bài học 1: Register Page (có đủ các element)')]`).click()
    // await baihoc1.click()
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
    // await page.pause()
})