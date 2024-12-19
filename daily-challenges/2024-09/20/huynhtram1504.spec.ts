import{test, expect} from '@playwright/test';
//Javascript
//Tìm số lớn nhất trong mảng
const findLargestNumber = (arr: number[]): number | string => {
    if (arr.length === 0){
        return "Mảng rỗng";
    } 
    let max = arr[0];
    arr.forEach(item => {
        if (item > max){
            max = item;
        }
    });
    return max;

}

console.log(findLargestNumber([1,5,9,32,55476,78765]));

//Playwright
test("Challenge 20-09-24", async ({page})=>{
    //Navigate to page
    await page.goto("https://material.playwrightvn.com/018-mouse.html");

    const onClick = page.locator("//div[@id='clickArea']");
    const numberOfClick = page.locator("//p[@id='clickCount']");
    const typeOfClick = page.locator("//p[@id='clickType']");
    const modifierOfClick = page.locator("//p[@id='modifierKeys']");


    //Click "Nhấn hoặc nhấn đúp vào đây"
    await onClick.click();
    //Check số lần nhấn là 1, loại nhấn: đơn và phím kèm theo không có
    await expect(numberOfClick).toHaveText("Số lần nhấn: 1");
    await expect(typeOfClick).toHaveText("Loại nhấn: Đơn");
    await expect(modifierOfClick).toHaveText("Phím kèm theo: Không có");
    // Double click " Nhấn hoặc nhấn đúp vào đây"
    await onClick.dblclick();
    // Check số lần nhấn là 3, loại nhấn: đúp và phím kèm theo không có
    await expect(numberOfClick).toHaveText("Số lần nhấn: 3");
    await expect(typeOfClick).toHaveText("Loại nhấn: Đúp");
    await expect(modifierOfClick).toHaveText("Phím kèm theo: Không có");

    // Giữ shift và click vào ô "Nhấn hoặc nhấn đúp vào đây!"
    await onClick.click({modifiers: ['Shift']});
    // Kiểm tra số lần nhấn là 4, loại nhấn: đơn và phím kèm theo là shift
    await expect(numberOfClick).toHaveText("Số lần nhấn: 4");
    await expect(typeOfClick).toHaveText("Loại nhấn: Đơn");
    await expect(modifierOfClick).toHaveText("Phím kèm theo: Shift");


})



