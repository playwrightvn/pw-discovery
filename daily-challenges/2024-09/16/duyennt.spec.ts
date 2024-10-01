import { test, expect } from '@playwright/test';

/*
# Javascript
## Đề bài:
Chuỗi (string) là một tập hợp các ký tự nối liền nhau. Trong bài tập này, bạn sẽ viết một hàm để đảo ngược chuỗi, tức là sắp xếp các ký tự của chuỗi theo thứ tự ngược lại.

### Yêu cầu:
Viết một hàm JavaScript có tên reverseString để đảo ngược một chuỗi đầu vào.
Sau khi đảo ngược chuỗi, in ra kết quả.

## Ví dụ:
### Input:
Chuỗi: "hello"

### Output:
Chuỗi đảo ngược: "olleh"
Giải thích: Chuỗi "hello" khi đảo ngược sẽ trở thành "olleh", các ký tự từ cuối chuỗi sẽ chuyển lên đầu.

## Gợi ý:
Để giải quyết bài toán này, bạn có thể:
- Tách chuỗi thành một mảng các ký tự bằng cách sử dụng phương thức split('').
- Sử dụng phương thức reverse() để đảo ngược mảng ký tự.
- Nối các ký tự lại thành chuỗi bằng cách sử dụng phương thức join('').

*/
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

//  Playwright
// Viết code automation cho test case sau (có thể sử copy code từ bài trước để code nhanh hơn)
// - Đi tới trang: https://material.playwrightvn.com/
// - Click vào: Bài học 1: Register Page (có đủ các element)
// - Điền vào đầy đủ các thông tin của user
// - Kiểm tra kết quả đúng như thông tin đã điền.   

const dataTest = {
  username: "Duyên",
  email: "duyennt1224@gmail.com",
  country: "usa",
  bio: "Duyên test",
  interest: "music",
  dob: "1995-09-19"
};

test('Bài học1: Register Page', async ({ page }) => {
  await test.step("Go to Bài học 1: Register Page", async () => {
    await page.goto('https://material.playwrightvn.com/');
    await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click();
  });

  await test.step("Fill full informations", async () => {
    await page.locator('//input[@id="username"]').fill(dataTest.username);
    await page.locator('//input[@id="email"]').fill(dataTest.email);
    await page.locator('//input[@id="female"]').check();
    await page.locator('//input[@id="reading"]').check();
    await page.locator('//input[@id="traveling"]').check();
    await page.locator('//input[@id="cooking"]').check();
    await page.selectOption('//select[@id="interests"]', dataTest.interest);
    await page.selectOption('//select[@id="country"]', dataTest.country);
    await page.locator('//input[@id="dob"]').fill(dataTest.dob);
    //await page.locator('//input[@id="profile"]').setInputFiles(`daily-challenges/2024-09/16/test-data/image-profiles.jpg`);
    await page.locator('//textarea[@id="bio"]').fill(dataTest.bio);
    await page.locator('//input[@id="rating"]').fill('10');
    await page.locator('//div[@class="tooltip"]').hover();
    await page.locator('//input[@id="newsletter"]').check();
    await page.locator('//span[@class="slider round"]').click();
  });

  await test.step("Click btn Register", async () => {
    await page.click('//button[@type="submit"]');
  });

  await test.step("Check result", async () => {
    await expect(page.locator('//tbody/tr[1]/td[2]')).toHaveText(dataTest.username);
    await expect(page.locator('//tbody/tr[1]/td[3]')).toHaveText(dataTest.email);
    await expect(page.locator('//tbody/tr[1]/td[4]')).toContainText('Gender: female');
    await expect(page.locator('//tbody/tr[1]/td[4]')).toContainText('Hobbies: reading, traveling, cooking');
    await expect(page.locator('//tbody/tr[1]/td[4]')).toContainText(`Country: ${dataTest.country}`);
    await expect(page.locator('//tbody/tr[1]/td[4]')).toContainText(`Date of Birth: ${dataTest.dob}`);
    await expect(page.locator('//tbody/tr[1]/td[4]')).toContainText(`Biography: ${dataTest.bio}`);
    await expect(page.locator('//tbody/tr[1]/td[4]')).toContainText('Rating: 10');
    await expect(page.locator('//tbody/tr[1]/td[4]')).toContainText('Newsletter: Yes');
    await expect(page.locator('//tbody/tr[1]/td[4]')).toContainText('Enable Feature: Yes');
  });
});
