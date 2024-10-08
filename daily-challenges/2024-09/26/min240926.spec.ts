/*
# Javascript
## Đề bài:
Viết một hàm để tính tiền tip dựa trên tổng hóa đơn và tỷ lệ phần trăm tip.

### Yêu cầu:
- Viết một hàm JavaScript có tên `calculateTip` có 2 tham số: tổng hóa đơn và tỷ lệ tip(%) để tính tiền tip.
*/

function calculateTip(totalInvoice, percent) {
    return (totalInvoice * percent / 100)
}

console.log(calculateTip(100, 15))

/*
# Playwright
- Cho trang web sau: https://material.playwrightvn.com/021-import-export.html
- Thực hiện thao tác:
    - Tìm kiếm học sinh theo lớp: A4
    - Verify chỉ có 1 học sinh học lớp A4
    - Xóa nội dung tìm kiếm.
    - Verify tất cả các học sinh xuất hiện.
*/

import { test, expect } from '@playwright/test'

test ('min240926', async({ page }) => {
    await page.goto('https://material.playwrightvn.com/021-import-export.html')
    await page.selectOption('#filterCriteria', 'Lớp')
    await page.locator(`//input[@id="searchInput"]`).fill('A4')
    await page.click("#searchButton")
    expect(page.locator(`//table[@id="studentTable"]`)).toHaveCount(1)
    let rows = await page.locator('#studentTable tbody tr').all()
    for (const row of rows) {
        if (await row.isVisible()) {
            const classCell = row.locator('td').nth(2)
            await expect(classCell).toContainText('A4')
        }
    }
    
    await page.locator(`//input[@id="searchInput"]`).clear()
    await page.click("#searchButton")
    let totalRow = await page.locator('#studentTable tbody tr').count()
    let rowVisible = 0
    for (const row of rows) {
        if (await row.isVisible()) {
            rowVisible++
        }
    }
    expect(totalRow).toEqual(rowVisible)
})