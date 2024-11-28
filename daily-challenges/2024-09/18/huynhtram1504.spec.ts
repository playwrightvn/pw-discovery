import{test, expect} from "@playwright/test";
/*Viết một hàm JavaScript có tên calculateAge để tính số tuổi của một người dựa trên năm sinh của họ.
In ra số tuổi tương ứng với năm hiện tại.
Nếu năm sinh lớn hơn năm hiện tại, in ra một thông báo lỗi "Năm sinh không hợp lệ."*/
function calculateAge(year: number){
    let currentTime = new Date();
    let currentYear = currentTime.getFullYear();
    if(year < currentYear){
        let age = currentYear - year;
        console.log(`Tuổi của bạn là: ${age}`);

    } else {
        console.log("Năm sinh không hợp lệ");
    };

}
console.log(calculateAge(1988));

//Playwright
test ("Chalenge day 18", async({page})=>{
    //Access the To do page
    await page.goto("https://material.playwrightvn.com/03-xpath-todo-list.html");
    //Create new Todo "Xin chào đây là bài thực hành ngày 18 tháng 9"
    await page.locator("//input[@id='new-task']").fill("Xin chào đây là bài thực hành ngày 18 tháng 9");
    await page.locator("//button[@id='add-task']").click();
    //Verify only one Todo task is added
    await expect(page.locator("//ul[@id='task-list']/li")).toHaveCount(1);
    //Update name of Todo list
    //await page.waitForTimeout(2000);
    //Từ giờ trở đi khi cái sự kiện này được khai báo, nếu có bất kỳ dialog nào xuất hiện thì accept cái dialog ấy
    const editTodo = "Xin chào, đây là bài thực hành ngày 18 tháng 9 - phiên bản đã chỉnh sửa";
    page.once('dialog', async dialog => {
        if (dialog.type() === 'prompt') {
            await dialog.accept(editTodo);
        }
    });
    await page.click("//button[@onclick='editTask(0)']");
    //Verify name is updated
    await expect(page.locator("//ul[@id='task-list']/li/span")).toContainText(editTodo)
    //Delete Todo list
    //Báo trước sẽ có 1 cái dialog xuất hiện và hãy tương tác với cái dialog ấy
    page.once('dialog', async dialog =>{
        await page.waitForTimeout(1000);
        await dialog.accept();
    })
    await page.locator("//button[@onclick='deleteTask(0)']").click();
    //Verify Todo list is deleted
    await expect(page.locator("//ul[@id='task-list']/li")).toHaveCount(0);

})
