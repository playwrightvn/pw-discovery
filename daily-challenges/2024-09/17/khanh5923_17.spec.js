function isPrime(input){
    if(input == 1) return console.log(`${input} khong phai la so nguyen to`)
    let sqrtInput = Math.sqrt(input)
    for(let i=2; i <= sqrtInput; i++){
        if(input % i == 0) return console.log(`${input} khong phai so nguyen to`)
    }
    return console.log(`${input} la so nguyen to`)
}
isPrime(2)

//-------------------------------------------------------------

import {test, expect} from '@playwright/test'
test('bai3_17', async ({ page }) => {
    await page.goto(`https://material.playwrightvn.com/`)
    await page.locator(`//a[contains(text(),'Bài học 2: Product page')]`).click()
    const testData = {
        product1: {
            id: 1,
            price: 10.00,
            quantity: 2
        },
        product2: {
            id: 2,
            price: 20.00,
            quantity: 1
        },
        product3: {
            id: 3,
            price: 30.00,
            quantity: 3
        },

    }
    let Sum = 0
    for(let i = 1; i <= 3; i++){
        for(let j = 1; j <= testData[`product${i}`]["quantity"]; j++){
            await page.locator(`//button[@data-product-id="${i}"]`).click()
        }
        Sum += testData[`product${i}`]["quantity"]*testData[`product${i}`]["price"] 
    }
    for(let i = 1; i <= 3; i++){
        const cells = await page.locator(`//tbody//tr[${i}]//td[3]`).textContent()
        expect(+cells).toBe(testData[`product${i}`]["quantity"]) // Them + truoc string => number 
    }
    let totalActual = await page.locator(`//td[@class='total-price']`).textContent()
    totalActual = totalActual.slice(1)
    expect(+totalActual).toBe(Sum)
});