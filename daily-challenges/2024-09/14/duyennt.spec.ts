/*
# Javascript
## Đề bài:
Chỉ số BMI (Body Mass Index) là một chỉ số được sử dụng để đánh giá mức độ béo hay gầy của một người, từ đó xác định tình trạng sức khỏe của cơ thể dựa trên chiều cao và cân nặng. Công thức tính BMI như sau:

```
BMI = cân nặng (kg) / (chiều cao (m) * chiều cao (m))
```

### Yêu cầu:
- Viết một hàm JavaScript có tên `calculateBMI` để tính chỉ số BMI dựa trên chiều cao (đơn vị mét) và cân nặng (đơn vị kg) của người dùng.
- Sau khi tính toán, in ra kết quả với các phân loại theo chuẩn sau:
  - BMI < 18.5: "Gầy"
  - 18.5 <= BMI < 24.9: "Bình thường"
  - 25 <= BMI < 29.9: "Thừa cân"
  - BMI >= 30: "Béo phì"

## Ví dụ:
**Input**: 
- Chiều cao: 1.75 mét
- Cân nặng: 68 kg

**Output**: 
- Kết quả BMI: 22.2
- Phân loại: "Bình thường"
*/
function calculateBMI(height, weight) {
    let bmi = weight / (height * height);
    if (bmi < 18.5) {
        console.log("Kết quả BMI:" + bmi, "Phân loại: Gầy");
    } else if (bmi >= 18.5 && bmi < 24.9) {
        console.log("Kết quả BMI:" + bmi, "Phân loại: Bình thường");
    } else if (bmi >= 25 && bmi < 29.9) {
        console.log("Kết quả BMI:" + bmi, "Phân loại:Thừa cân");
    } else {
        console.log("Kết quả BMI:" + bmi, "Phân loại:Béo phì");
    }
}
calculateBMI(1.75, 68);


//  Playwright  
// ## Đề bài
// Viết code automation cho test case sau:
// - Đi tới trang: https://material.playwrightvn.com/
// - Click vào: Bài học 1: Register Page (có đủ các element)
// - Điền vào username, email. Click button register.
// - Kiểm tra kết quả có chứa username và email tương ứng

// ## Demo
// ![Demo image](../images/001-2024-09-01.gif)

import { test, expect } from '@playwright/test'
const testData = {
    username: "Duyên",
    email: "duyennt1224@gmail.com"
};
test('Daily-challenges-2024-09 day 14', async ({ page }) => {
    await test.step('Go to https://material.playwrightvn.com/', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });
    await test.step('Click Bài học 1: Register Page', async () => {
        await page.locator('//a[@href="01-xpath-register-page.html"]').click();
    });
    await test.step('Fill username, email', async () => {
        await page.locator('//input[@id="username"]').fill(testData.username);
        await page.locator('//input[@id="email"]').fill(testData.email);
    });
    await test.step('Click btn Register', async () => {
        await page.locator('//button[@type="submit"]').click();
    });
    await test.step('Check result', async () => {
        // const resultText = await page.textContent('.result');
        // await expect(resultText).toContain(testData.username);
        // await expect(resultText).toContain(testData.email);
        await expect(page.locator('//tbody/tr[1]/td[2]')).toHaveText(testData.username);
        await expect(page.locator('//tbody/tr[1]/td[3]')).toHaveText(testData.email);
    });
});
