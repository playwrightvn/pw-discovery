/*
# Javascript
## Đề bài:
Chỉ số BMI (Body Mass Index) là một chỉ số được sử dụng để đánh giá mức độ béo hay gầy của một người, 
từ đó xác định tình trạng sức khỏe của cơ thể dựa trên chiều cao và cân nặng. 

Công thức tính BMI:
BMI = cân nặng (kg) / (chiều cao (m) * chiều cao (m))

### Yêu cầu:
- Viết một hàm JavaScript có tên `calculateBMI` để tính chỉ số BMI dựa trên chiều cao (m) và cân nặng (kg).
- Sau khi tính toán, in ra kết quả với các phân loại:
  - BMI < 18.5  → "Gầy"
  - 18.5 <= BMI < 24.9 → "Bình thường"
  - 25 <= BMI < 29.9 → "Thừa cân"
  - BMI >= 30 → "Béo phì"

## Ví dụ:
Input:  Chiều cao = 1.75m, Cân nặng = 68kg
Output: Kết quả BMI = 22.2, Phân loại = "Bình thường"
*/
function calculateBMI(weight: number, height: number) {
    // Tính chỉ số BMI
    const bmi = weight / (height * height);
    let bodyType = "";

    // Phân loại theo BMI
    if (bmi < 18.5) {
        bodyType = "Gầy";
    } else if (bmi < 24.9) {
        bodyType = "Bình thường";
    } else if (bmi < 29.9) {
        bodyType = "Thừa cân";
    } else {
        bodyType = "Béo phì";
    }

    return {
        bmi: bmi,
        bodyType
    };
}

// Demo
const result = calculateBMI(68, 1.75);
console.log(`Kết quả BMI: ${result.bmi}`);
console.log(`Phân loại: ${result.bodyType}`);

// ============================================================================
// # Playwright  
// ## Đề bài:
// Viết code automation cho test case sau:
// - Đi tới trang: https://material.playwrightvn.com/
// - Click vào: "Bài học 1: Register Page" (có đủ các element)
// - Điền vào username, email
// - Click button "Register"
// - Kiểm tra kết quả có chứa username và email tương ứng
// ============================================================================

import { test, expect } from '@playwright/test'
import { link } from 'fs';

test('2025 - 08 - 25 day 1', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.getByRole('link', { name: 'Bài học 1: Register Page (có đủ các element)' }).click();

    const username = 'qc03@test.vn';
    const email = 'qc03@test.vn'

    await page.getByLabel('Username').fill(username);
    await page.getByLabel('Email').fill(email);
    await page.getByRole('button', { name: 'Register' }).click();

    await expect(page.locator("//tbody//tr")).toHaveCount(1);
    await expect(page.locator("//tbody//td").nth(1)).toHaveText(username);
    await expect(page.locator("//tbody//td").nth(2)).toHaveText(email);

})
