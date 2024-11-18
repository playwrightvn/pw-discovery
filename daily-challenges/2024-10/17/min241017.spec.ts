/*
# Playwright
- Clock API của Playwright cho phép chúng ta custom thời gian theo ý muốn (https://playwright.dev/docs/clock#introduction)
## Đề bài:
Viết code cho test case sau:
- Mock thời gian ở thời điểm 2024-10-17T01:00:00
- Truy cập trang web: https://material.playwrightvn.com/017-detect-user-agent.html
- Verify giờ địa phương hiển thị đúng với giờ đã mock
*/

import { test, expect } from '@playwright/test'
test('2024-10-17', async ({ page }) => {
    await page.clock.setFixedTime(new Date('2024-10-17T01:00:00'))
    await page.goto(`https://material.playwrightvn.com/017-detect-user-agent.html`)
    await expect(page.locator(`//span[@id="localTime"]`)).toContainText('1:00:00')
})