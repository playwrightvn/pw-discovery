import {test, expect} from '@playwright/test';

//Java script
// Tạo hệ thống quản lý danh sách sản phẩm bằng cách sử dụng đối tượng (Object). 
// Mỗi sản phẩm sẽ có tên và giá
//Viết hàm để thêm sản phẩm, xóa sản phẩm và tính tổng giá trị các sản phẩm trong danh sách 
//1. Tạo một object productList để lưu trữ danh sách sản phẩm
type Product = {
    name: string;
    price: number
};
type ProductList={
    data: Product[];
    addProduct(name: string, price: number): void;
    removeProduct(name: string): void;
    calculateTotal():number;

}

//2. Viết hàm addProduct(name, price) để thêm sản phẩm vào danh sách. Sản phẩm sẽ có thuộc tính name và price
//3. Viết hàm removeProduct(name) để xóa một sản phẩm khỏi danh sách theo tên sản phẩm
//4.Viết hàm calculateTotal() để tính tổng giá của tất cả các sản phẩm trong danh sách
const productList: ProductList = {
    data: [],
    addProduct(name: string, price: number){
        this.data.push({
            name: name,
            price: price
        });
    },
    removeProduct(name: string){
        this.data = this.data.filter(product => product.name !== name);
    },
    calculateTotal(){
        return this.data.reduce((total, item) => total + item.price, 0);
    },
}
productList.addProduct("Táo", 500);
productList.addProduct("Chuối", 300);
productList.addProduct("Mít", 200);
console.log(productList);
productList.removeProduct("Chuối");
console.log(productList);
productList.calculateTotal();

//Playwright
test("Challenge day 19-09", async({page})=> {
    //Access page
    await page.goto("https://material.playwrightvn.com/05-xpath-drag-and-drop.html");
    //Handle popup
    page.on('dialog', async dialog => {
        expect (dialog.message()).toBe("Congratulations! You completed the puzzle.");
        await dialog.dismiss();
    })
    //Drag 1 block to another block
    for(let i = 1; i <= 4; i++){
        const sourceLocator = page.locator(`//div[@id='piece-${i}']`);
        const destinationLocator = page.locator(`//div[@data-piece=${i}]`);
        await sourceLocator.dragTo(destinationLocator);

    };
     

})




