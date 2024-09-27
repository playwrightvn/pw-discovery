// javaScript 
let productList = {}
function addProduct(name, price){
    productList[`product_${name}`] = {
        name: name,
        price: price
    }
}
function removeProduct(name){
    delete productList[`product_${name}`]
}
function caculateTotal(){
    let sum = 0
    let string =''
    for(var key in productList){
        sum += parseFloat(productList[key].price);
        string += `${productList[key].name}: ${productList[key].price};`; 
    }
    console.log(`San pham trong danh sach: `, `${string}`)
    console.log("Tong gia tri san pham la: ", sum)
}
addProduct("tao",5000)
addProduct("chuoi",3000)
removeProduct("chuoi")
caculateTotal()

// playwright
import {test, expect} from '@playwright/test'

test('daily19', async ({ page }) => {
    await page.goto(`https://material.playwrightvn.com/`)
    await page.click(`//a[contains(text(),'Bài học 5: Puzzle drag and drop game')]`)
    
    page.on('dialog', async (dialog) => {
        if (dialog.type() === 'alert') {
            expect(dialog.message()).toBe(`Congratulations! You completed the puzzle.`);
            await dialog.accept();
        }
    });

    for(let i = 1; i<=4; i++){
        let puzzle = page.locator(`//div[@id="piece-${i}"]`)
        let dropzone = page.locator(`//div[@class='dropzones-container']//div[${i}]`)
        await puzzle.dragTo(dropzone)
    }
    await page.pause()
});
