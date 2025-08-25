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
// const reverseString = (str: string) => {
//     let result = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         result += str[i];
//     }
//     return result;
// }
// console.log(reverseString("hello"));
/*
# Playwright
Viết code automation cho test case sau (có thể sử copy code từ bài trước để code nhanh hơn)
- Đi tới trang: https://material.playwrightvn.com/
- Click vào: Bài học 1: Register Page (có đủ các element)
- Điền vào đầy đủ các thông tin của user
- Kiểm tra kết quả đúng như thông tin đã điền.
*/
import { test, expect } from '@playwright/test'
test('2025 - 08 - 26 day 2', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.getByRole('link', { name: 'Bài học 1: Register Page (có đủ các element)' }).click();
    const testData = {
        'userName': 'qc04@test.vn',
        'email': 'Qc@123',
        'gender': 'female',
        'hobbies': 'reading',
        'interests': 'technology',
        'country': 'Canada',
        'dob': '1987-11-13',
        'profilePicture': '/Users/lap-00934/pw-discovery/daily-challenges/2024-09/16/00-problem.md',
        'biography': 'Never late to learn',
        'rateUs': '7',
        'favColor': '#ff0000'
    }
    const randomNum = Math.floor(Math.random() * 9000) + 1000;
    testData.userName = `qc${randomNum}@test.vn`;

    //Fill information:
    await page.getByLabel('Username').fill(testData.userName);
    console.log(testData.userName);
    await page.getByLabel('Email').fill(testData.email);
    await page.getByLabel('Female', { exact: true }).check();
    await page.getByLabel('Reading', { exact: true }).check();
    await page.getByLabel('Interests').selectOption(testData.interests);
    await page.getByLabel('Country').selectOption(testData.country);
    await page.getByLabel('Date of Birth').fill(testData.dob);
    await page.getByLabel('Biography').fill(testData.biography);
    await page.getByLabel("Rate Us").fill(testData.rateUs);
    await page.locator('#favcolor').fill(testData.favColor);

    //Click Register Button:
    await page.getByRole('button', { name: 'Register' }).click();

    //Verify Data:
    await expect(page.locator("//tbody//tr")).toHaveCount(1);
    await expect(page.locator("//tbody//td").nth(1)).toHaveText(testData.userName);
    await expect(page.locator("//tbody//td").nth(2)).toHaveText(testData.email);
    await expect(page.locator("//tbody//td").nth(3)).toContainText(testData.gender);
    await expect(page.locator("//tbody//td").nth(3)).toContainText(testData.hobbies);
    
    await expect(page.locator("//tbody//td").nth(3)).toContainText(testData.dob);
    await expect(page.locator("//tbody//td").nth(3)).toContainText(testData.country);
    await expect(page.locator("//tbody//td").nth(3)).toContainText(testData.rateUs);
    await expect(page.locator("//tbody//td").nth(3)).toContainText(testData.biography);
    await expect(page.locator("//tbody//td").nth(3)).toContainText(testData.favColor);
})
