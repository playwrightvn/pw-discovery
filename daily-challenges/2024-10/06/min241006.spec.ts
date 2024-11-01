/*
# Playwright
## Đề bài:
- Playwright cung cấp hàm poll để biến các logic synchronous thành asynchronous (https://playwright.dev/docs/test-assertions#expectpoll)/
- Bạn có một trang web ngẫu nhiên enable các form control sau x giây, x dao động từ 3 tới 8: https://material.playwrightvn.com/019-enable-form.html

### Yêu cầu:
Sử dụng expect.poll để thực hiện yêu cầu sau:
- Expect giá trị kích hoạt của input là sau 7 giây
*/

import { test, expect } from '@playwright/test'
test('2024-10-06', async ({ page }) => {
    await expect.poll(async () => {
        const response = await page.request.get('https://material.playwrightvn.com/019-enable-form.html')
        return response.status();
      }, {
        intervals: [5_000],
        timeout: 60_000
      }).toBe(200)
})