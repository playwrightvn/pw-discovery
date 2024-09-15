import { test, expect } from '@playwright/test';
function caculatorBMI() {
    do {
        var weight = parseInt(prompt("Nhập cân nặng") || '{}');
        var heigh = parseInt(prompt("Nhập cân chiều cao") || '{}');
        var BMI = weight / (heigh * heigh);
        if (isNaN(BMI) == true) {
            alert("Nhập lại");
        }
    } while (isNaN(BMI))
    var type;
    if (BMI < 18.5) {
        type = "Gầy";
    } else if (18.5 <= BMI && BMI < 24.9) {
        type = "Bình thường"
    } else if (BMI > 25 && BMI < 29.9) {
        type = "Thừa cân";
    } else {
        type = "Béo phì";
    }
    console.log("Kết quả BMI: " + BMI + "\nPhân loại: " + type);
}
// Bài 2
test.beforeEach('go to page', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
});
const username = "depTryCoGiSai";
const email = "depTryKhongCoSai@gmail.com"
test('demo test', async ({ page }) => {
    await page.getByRole('link', { name: 'Register Page (có đủ các element' }).click();
    await page.getByRole('textbox', { name: 'username' }).fill(username);
    await page.locator("//input[@id='email']").fill(email);
    await page.getByRole('button', { name: 'Register' }).click();
    // Verify
    await expect(page.locator("//tbody//tr")).toHaveCount(1);
    const name = page.locator("//table[@id='userTable']//td[text()='" + username + "']");
    await expect(name).toBeVisible();
    await expect(page.locator("//tbody//td").nth(2)).toHaveText(email);
});