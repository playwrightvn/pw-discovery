/*
# Playwright
## Đề bài:
Playwright cung cấp hàm configure cho expect để cấu hình riêng cho từng test. (https://playwright.dev/docs/test-assertions#expectconfigure)

### Yêu cầu:
Viết test thực hiện các yêu cầu sau:
- Test 1: Cấu hình expect timeout = 30s
- Test 2: Cấu hình expect timeout = 10s, soft assertion = true
*/

import { test, expect } from '@playwright/test'

test('min241004_1', async () => {
    const slowExpect = expect.configure({ timeout: 30_000 })
})

test('min241004_2', async () => {
    const softExpect = expect.configure({ timeout: 10_000, soft: true })
})