/*
# Playwright
- Clock API của Playwright cho phép chúng ta custom thời gian theo ý muốn (https://playwright.dev/docs/clock#introduction)
## Đề bài:
Viết code cho test case sau:
- Truy cập trang web: https://material.playwrightvn.com/026-count-time-in-page.html
- Tua thời gian tới 5 phút sau
- Verify alert: "Bạn đã ở lại trang web hơn 5 phút!" xuất hiện.
*/
import { test, expect } from '@playwright/test'
test('2024-10-18', async ({ page }) => {
    await page.clock.install()
    await page.goto(`https://material.playwrightvn.com/026-count-time-in-page.html`)
    await page.clock.fastForward('05:00')
    page.on('dialog', async (dialog) => {
        await expect(dialog.message()).toContain('Bạn đã ở lại trang web hơn 5 phút!')
        await dialog.accept();
    })
})