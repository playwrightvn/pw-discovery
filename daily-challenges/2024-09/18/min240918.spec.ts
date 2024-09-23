/*
# Javascript
## Đề bài:
Tuổi của một người được tính dựa trên năm sinh của họ và năm hiện tại. Trong bài tập này, bạn sẽ viết một hàm để tính tuổi dựa trên năm sinh được nhập vào. Biết công thức tính tuổi:
```
Tuổi = Năm hiện tại - Năm sinh
```

### Yêu cầu:
- Viết một hàm JavaScript có tên `calculateAge` để tính số tuổi của một người dựa trên năm sinh của họ.
- In ra số tuổi tương ứng với năm hiện tại.
- Nếu năm sinh lớn hơn năm hiện tại, in ra một thông báo lỗi "Năm sinh không hợp lệ."
*/

const calculateAge = (year) => {
    var currentTime = new Date()
    var currentYear = currentTime.getFullYear()
    if (year > currentYear) {
        console.log(`Năm sinh không hợp lệ`)
    } else {
        var age = currentYear - year
        console.log(`Tuổi của bạn là: ${age}`)
    }
}

calculateAge(2000)

/*
# Playwright
## Đề bài
Viết code automation cho test case sau:
- Đi tới trang: https://material.playwrightvn.com/
- Click vào: Bài học 3: Todo page
- Thêm vào todo có nội dung: Xin chào, đây là bài thực hành ngày 18 tháng 9
- Verify chỉ có 1 Todo duy nhất được add vào.
- Sửa nội dung Todo: Xin chào, đây là bài thực hành ngày 18 tháng 9 - phiên bản đã chỉnh sửa
- Verify nội dung đã được chỉnh sửa
- Xoá Todo
- Verify Todo đã được xoá.
*/

import { test, expect } from '@playwright/test'

test('min240918', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/")
    await page.locator(`//a[normalize-space(text())='Bài học 3: Todo page']`).click()
    await page.locator(`//input[@id='new-task']`).fill(`Xin chào, đây là bài thực hành ngày 18 tháng 9`)
    await page.getByRole('button', { name: 'Add Task'}).click()
    await expect(page.locator(`//ul[@id="task-list"]/li`)).toHaveCount(1)
    page.on('dialog', async dialog => {
        await dialog.accept('Xin chào, đây là bài thực hành ngày 18 tháng 9 - phiên bản đã chỉnh sửa')
    })
    await page.click('//button[@onclick="editTask(0)"]')
    await page.waitForTimeout(10000)
    await expect(page.locator(`//span[text()='Xin chào, đây là bài thực hành ngày 18 tháng 9 - phiên bản đã chỉnh sửa']`)).toBeVisible()
    await page.click(`//button[text()='Delete']`)
    await page.getByRole('button').click() 
    await expect(page.locator(`//ul[@id="task-list"]/li`)).toHaveCount(0)
})