function calculateAge(yearBirth){
    const yearCurrent = new Date().getFullYear();
    return yearBirth > yearCurrent ? console.log(`Nam sinh khong hop le`) : console.log(`Tuoi cua ban la: ${yearCurrent-yearBirth}`)
}
calculateAge(2003)

// ---------------------------------------------------------

import {test, expect} from '@playwright/test'
test('bai4_18', async ({ page }) => {
    await page.goto(`https://material.playwrightvn.com/`)
    await page.click(`//a[contains(text(),'Bài học 3: Todo page')]`)
    const testData = {
        text: "Xin chào, đây là bài thực hành ngày 18 tháng 9",
        update: "Xin chào, đây là bài thực hành ngày 18 tháng 9 - phiên bản đã chỉnh sửa"
    }
    await page.locator(`//input[@id='new-task']`).fill(testData.text)
    await page.locator(`//button[@id='add-task']`).click()
    const onlyAdd = page.locator(`//ul[@id="task-list"]//li`)
    // Verify chỉ có 1 Todo duy nhất được add vào.
    expect(await onlyAdd.count()).toBe(1)
    const text = onlyAdd.locator(`//span`)
    // Verify noi dung.
    await expect(text).toHaveText(testData.text)
    // Lắng nghe sự kiện dialog và nhập giá trị vào prompt
    page.on('dialog', async dialog => {
        await dialog.accept(testData.update); // Cung cấp giá trị mới cho prompt
    });
    await page.click(`//ul[@id="task-list"]//button[normalize-space()='Edit']`)
    // Verify noi dung vua cap nhap.
    await expect(text).toHaveText(testData.update)
    // Lắng nghe sự kiện dialog và xác định confirm accept() or dismiss()
    await page.locator(`//button[contains(@id,'-delete')]`).click()
    page.on('dialog', async dialog => {
        if (dialog.type() === 'confirm') {
            await dialog.accept();
        }
    });
    // Verify da xoa
    await expect(page.locator(`//ul[@id="task-list"]`)).toBeEmpty()
});