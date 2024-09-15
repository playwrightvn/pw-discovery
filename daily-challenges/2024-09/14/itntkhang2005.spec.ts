import {test, expect, Page} from '@playwright/test';
/*
- Viết một hàm JavaScript có tên calculateBMI để tính chỉ số BMI dựa trên chiều cao (đơn vị mét) và cân nặng (đơn vị kg) của người dùng.
- Sau khi tính toán, in ra kết quả với các phân loại theo chuẩn sau:
    * BMI < 18.5: "Gầy"
    * 18.5 <= BMI < 24.9: "Bình thường"
    * 25 <= BMI < 29.9: "Thừa cân"
    * BMI >= 30: "Béo phì"
*/
function calculateBMI(weight: number, height: number): number {
    const bmi = weight / (height * height); // Tính chỉ số BMI

    // Phân loại theo chỉ số BMI
    if (bmi < 18.5) {
        console.log("Gầy");
    } else if (bmi < 24.9) {
        console.log("Bình thường");
    } else if (bmi < 29.9) {
        console.log("Thừa cân");
    } else {
        console.log("Béo phì");
    }

    return bmi; // Trả về chỉ số BMI
}

// Ví dụ sử dụng
const weight: number = 70; // Cân nặng (kg)
const height: number = 1.75; // Chiều cao (m)
const bmiResult = calculateBMI(weight, height);
console.log(`Chỉ số BMI là: ${bmiResult}`);

/*
Viết code automation cho test case sau:
- Đi tới trang: https://material.playwrightvn.com/
- Click vào: Bài học 1: Register Page (có đủ các element)
- Điền vào username, email. Click button register.
- Kiểm tra kết quả có chứa username và email tương ứng
*/
test('Check username & Email', async ({page}) => {
    await page.goto('https://material.playwrightvn.com/');

    const link = page.getByRole('link', {name: 'Bài học 1: Register Page (có đủ các element)'});
    await link.click();

    const name = 'NTKhang';
    const email = 'playwrightvn@gmail.com';

    const elementUsername = page.locator('#username');
    await elementUsername.fill(name);

    const elementEmail = page.locator('#email');
    await elementEmail.fill(email);

    const btnRegister = page.getByRole('button' , {name: 'Register'});
    await btnRegister.click();

    // Check the results contain the corresponding username and email
    const resultText = page.locator('tbody')
    await expect(resultText).toContainText(name);
    await expect(resultText).toContainText(email)

    await page.close();
})

