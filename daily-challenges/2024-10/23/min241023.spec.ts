/*
# Playwright: Canary release
- "Canary releases" là một thuật ngữ trong phát triển phần mềm, dùng để chỉ một phương pháp triển khai phần mềm theo từng giai đoạn. Khi thực hiện canary release, chỉ một phần nhỏ người dùng sẽ được sử dụng phiên bản mới nhất của phần mềm, trong khi phần lớn người dùng vẫn tiếp tục sử dụng phiên bản cũ
- Thuật ngữ này xuất phát từ việc thợ mỏ từng mang theo chim hoàng yến (canary) vào các hầm mỏ để phát hiện khí độc. Chim sẽ có phản ứng trước nếu có khí độc, báo hiệu nguy hiểm cho thợ mỏ. Tương tự, "canary releases" giúp phát hiện vấn đề sớm trước khi ảnh hưởng đến tất cả người dùng.

## Đề bài:
- Document của playwright.dev có chế độ canary release, giúp chúng ta xem được phiên bản mới sẽ có gì.
- Để bật chế độ này, bấm 5 lần phím shift.
- Viết code automation cho test case sau:
  - Truy cập trang web: https://playwright.dev/docs/test-use-options
  - Bấm phím shift 5 lần để chuyển sang chế độ canary release
  - Verify dòng chữ "This is unreleased documentation for Playwright Next version." xuất hiện.
  - Verify url bao gồm `docs/next`
*/
import {test, expect} from '@playwright/test'

const expectMsg = 'This is unreleased documentation for Playwright Next version.'

test('Canary release', async ({ page }) => {
    await page.goto('https://playwright.dev/docs/test-use-options')
    for( let i = 0; i < 5; i++){
        await page.keyboard.press('Shift')
    }
    let msg = await page.locator(`//div[contains(@class,'theme-doc-version-banner alert')]//div[1]`).innerText()
    expect(msg).toBe(expectMsg)
    await expect(page).toHaveURL(/.*docs\/next.*/)
})