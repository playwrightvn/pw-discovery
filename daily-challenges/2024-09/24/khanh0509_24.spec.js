import { test, expect } from "@playwright/test";

// javascript
function getCurrentDate(){
    let currentDate = new Date()
    let getYear = currentDate.getFullYear()
    let getDay = currentDate.getDate() < 10 ? `0${currentDate.getDate()}` : currentDate.getDate()
    let getMonth = (currentDate.getMonth() + 1) < 10 ? `0${currentDate.getMonth() + 1}` : (currentDate.getMonth() + 1)
    console.log(`Ngay hien tai la: ${getDay}/${getMonth}/${getYear}`)
}
getCurrentDate()

//playwright
test("daily24", async ({ page }) => {
  let arr = [];
  await page.route("*/**/api/v1/fruits", async (route) => {
    const response = await route.fetch();
    const fruits = await response.json();

    // Tạo mảng chứa tên các loại trái cây
    for (let i in fruits) {
      arr.push(fruits[i].name);
    }

    const newFruits = [{ name: arr.join(", "), id: 0 }];

    // Thay đổi phản hồi
    await route.fulfill({
      status: response.status(), // status goc
      headers: response.headers(), // headers goc
      body: JSON.stringify(newFruits), // body moi
    });
  });
  await page.goto("https://demo.playwright.dev/api-mocking");
  expect(await page.locator(`//div[@class='py-4']//ul//li[1]`).textContent()).toBe(arr.join(', '))
});
