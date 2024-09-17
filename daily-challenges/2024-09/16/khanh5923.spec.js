function revereString(input){
    var char = input.split('')
    var reverseChart = char.reverse()
    console.log("Chuoi dao nguoc: ", reverseChart.join('')) 
}

revereString("tranquangkhanhsiudeptrai")

import {test, expect} from '@playwright/test'
test.only('bai2', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/")
    await page.locator(`//a[contains(text(),'Bài học 1: Register Page (có đủ các element)')]`).click()
    const testData = {
        username: "khanhtran",
        email: "khanhtran@yopmail.com",
        gender: "male",
        hobbies: "cooking",
        country: 'uk',
        date: "2023-12-25",
        biography: "no",
        rating: 6,
        color: "#00ff00",
    };
    await page.locator(`//input[@id='username']`).fill(testData.username)
    await page.locator(`//input[@id="email"]`).fill(testData.email)
    await page.locator(`//input[@id='${testData.gender}']`).check()
    await page.locator(`//input[@id="${testData.hobbies}"]`).check()
    await page.locator(`//select[@id='country']`).selectOption(testData.country)
    await page.locator(`//input[@id='dob']`).fill(testData.date)
    await page.locator(`//textarea[@id='bio']`).fill(testData.biography)

    const ratingInput = page.locator(`//input[@id='rating']`)
    await ratingInput.evaluate((element, newRating) => {
        element.value = newRating;
        element.dispatchEvent(new Event('input')); // Thông báo cho các sự kiện lắng nghe giá trị thay đổi
    }, testData.rating);

    const colorInput = page.locator(`//input[@id="favcolor"]`)
    await colorInput.evaluate((element, newColor) => {
        element.value = newColor;
        element.dispatchEvent(new Event('input')); // Thông báo cho các sự kiện lắng nghe giá trị thay đổi
    }, testData.color); // Thay thế bằng giá trị màu mới

    let newsLetter, enableFeature
    const isCheckLetters = page.locator(`//input[@id='newsletter']`)
    await isCheckLetters.check()
    if(await isCheckLetters.isChecked()) newsLetter = 'Yes'
    else newsLetter = 'No'

    await page.locator(`//span[@class='slider round']`).click()
    const isCheckedFeature = page.locator(`//input[@id="toggleOption"]`)
    await isCheckedFeature.check()
    if(await isCheckedFeature.isChecked()) enableFeature = 'Yes'
    else enableFeature = 'No'

    await page.click(`//button[@type='submit']`)

    const rowCount = await page.locator(`//tbody//tr`).count();
    const cells = page.locator(`//tbody//tr[${rowCount}]//td`)
    await expect(cells.nth(1)).toHaveText(testData.username);
    await expect(cells.nth(2)).toHaveText(testData.email);
    
    const textContent = await cells.nth(3).textContent()
    const textExpect= textContent.replace(/\n/g, ' ').replace(/\s{2,}/g, ' ').trim()
    const textActual = `Gender: ${testData.gender} Hobbies: ${testData.hobbies} Country: ${testData.country} Date of Birth: ${testData.date} Biography: ${testData.biography} Rating: ${testData.rating} Favorite Color: ${testData.color} Newsletter: ${newsLetter} Enable Feature: ${enableFeature}`;

    // Kiểm tra giá trị trong Playwright Test
    expect(textExpect).toBe(textActual);
});