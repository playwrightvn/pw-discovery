// Javascript
/*
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
  - 24.9 <= BMI < 29.9: "Thừa cân"
  - BMI >= 30: "Béo phì"

  ------------>
  18.5    25    29   30 ->
## Ví dụ:
**Input**: 
- Chiều cao: 1.75 mét
- Cân nặng: 68 kg

**Output**: 
- Kết quả BMI: 22.2
- Phân loại: "Bình thường"
*/

function calculateBMI(height: number, weight: number) {
    const BMI = weight / (height * height);
    let bodyType = '';

    if (BMI < 18.5) {
        bodyType = 'Gầy';
    } else if (BMI < 24.9) {
        bodyType = 'Bình thường';
    } else if (BMI < 29) {
        bodyType = 'Thừa cân';
    } else {
        bodyType = 'Béo phì';
    }

    // console.log(`- Kết quả BMI: ${BMI}`);
    // console.log(`- Phân loại: ${bodyType}`);

    return {
        bmi: BMI,
        bodyType: bodyType
    }
}

const result = calculateBMI(1.69, 69);
console.log(`- Kết quả BMI: ${result.bmi}`);
console.log(`- Phân loại: ${result.bodyType}`);

// Playwright
/* 
Viết code automation cho test case sau:
- Đi tới trang: https://material.playwrightvn.com/
- Click vào: Bài học 1: Register Page (có đủ các element)
- Điền vào username, email. Click button register.
- Kiểm tra kết quả có chứa username và email tương ứng
*/
import { test, expect } from '@playwright/test';

test('2024-09 day 14', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.getByRole("link", { name: /Register Page/}).click();

    const username = "playwright_viet_nam";
    const email = "playwrightvietnam@gmail.com";

    await page.getByLabel("Username").fill(username);
    await page.getByLabel("Email").fill(email);
    await page.getByRole("button", { name: "Register" }).click();

    await expect(page.locator("//tbody//tr")).toHaveCount(1);
    await expect(page.locator("//tbody//td").nth(1)).toHaveText(username);
    await expect(page.locator("//tbody//td").nth(2)).toHaveText(email);

})