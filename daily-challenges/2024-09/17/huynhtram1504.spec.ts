import{test, expect} from "@playwright/test";
//Javascript
// Check xem 1 số có phải là số nguyên tố hay không
function isPrime(num: number): boolean{
    // Số nhỏ hơn 2 không phải là số nguyên tố
    if(num < 2){
        return false;
    }
    // Số 2 là số nguyên tố
    if(num==2){
        return true;
    }

    //Check nếu số này có thể chia được cho số nào khác không

    for(let i=2; i < num; i++){
        if(num%i==0){
            return false;
        }
    //Khong can chay vong lap toi num-1 ma chi can chay toi can bac hai
    //for(let i=2; i <= Math.sqrt(num); i++ ){
        //if(num%i===0){
           // return false;
       // }

    }
    return true;
} 
if (isPrime(199)){
    console.log("Số ${num} là số nguyên tố");
} else {
    console.log("Số ${num} không là số nguyên tố");
}

// Playwright
/**
 * Playwright
 * Đề bài
 * Viết code automation cho test case sau:
 * Đi tới trang: https://material.playwrightvn.com/
 * Click vào: Bài học 2: Product page
 * Thêm vào giỏ hàng 2 sản phẩm 1.
 * Thêm vào giỏ hàng 2 sản phẩm 2.
 * Thêm vào giỏ hàng 3 sản phẩm 3.
 * Kiểm số lượng sản phẩm đúng.
 * (Nâng cao) Kiểm tra tổng tiền sản phẩm đúng (tổng tiền = tổng (số lượng * đơn giá))
 */
test("Challenge 17", async({page})=> {
    const product = [
        { id: 1, name: 'Product 1', price: 10.00, description: 'This is a great product.', quantity: 2 },
        { id: 2, name: 'Product 2', price: 20.00, description: 'This is another great product.', quantity: 2 },
        { id: 3, name: 'Product 3', price: 30.00, description: 'This product is the best.', quantity: 3 }

    ];
    await page.goto("https://material.playwrightvn.com/02-xpath-product-page.html");
    //Thêm vào giỏ hàng 2 sản phẩm 1
    await page.locator("//button[@data-product-id='1']").click({clickCount:2});
    //Thêm vào giỏ hàng 2 sản phẩm 2
    await page.locator("//button[@data-product-id='2']").click({clickCount:2});

    //Thêm vào giỏ hàng 3 sản phẩm 3
    await page.locator("//button[@data-product-id='3']").click({clickCount:3});
    //Kiểm tra số lượng hàng đúng với mô tả
    await expect(page.locator("//tbody[@id='cart-items']/tr[1]/td[3]")).toHaveText("2");
    await expect(page.locator("//tbody[@id='cart-items']/tr[2]/td[3]")).toHaveText("2");
    await expect(page.locator("//tbody[@id='cart-items']/tr[3]/td[3]")).toHaveText("3");

    //(Nâng cao) Kiểm tra tổng tiền sản phẩm đúng (tổng tiền = tổng (số lượng * đơn giá))
    let totalMoney = 0;
    product.forEach(item => totalMoney += item.price * item.quantity);
    //Retreives all matching rows into an array
    const rowLocators = await page.locator("//tbody//tr").all();
    //For each row, locate all its cells(<td> elements)
    //Store these cells in an array
    let cartTotal = 0;
    for (const row of rowLocators){
        const cells = await row.locator("//td").all();
    
    //Get the text inside these cells. If there is no text, it defaults to an empty string('')
    const rawPrice = await cells[1].textContent() || '';
    const rawQty = await cells[2].textContent() || '';
    const itemPrice = parseInt(rawPrice.replace('$', ''));
    const itemQty = parseInt(rawQty);
    cartTotal += itemPrice * itemQty;
    };
    await expect(cartTotal).toEqual(totalMoney);

}); 






    