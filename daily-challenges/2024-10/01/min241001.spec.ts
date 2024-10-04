/*
# Playwright
## Đề bài:
- Annotation là một tính năng rất hay trong Playwright. Nó giúp chúng ta cấu hình các test một cách đơn giản.
- Các kiến thức về annotation, bạn có thể tham khảo tại: https://playwright.dev/docs/test-annotations

### Yêu cầu:
- Viết code để có được test theo đoạn giả mã sau:
```
- Test group: "Demo annotation"
    - beforeEach hook: nếu chạy trên mobile, annotate fixme.
    - Test 1: "Test 01":
        - Cấu hình test: annotation: {type = "demo", description = "https://github.com/playwrightvn/pw-discovery"}
        - In ra dòng "Hello from test 1"
    - Test 2: "Test 02":
        - In ra dòng: "Hello from test 2"
        - Push thêm vào annotation tại run time: {type: "browser version", description: browser.version()}
```
*/

import { test, expect } from '@playwright/test'

test.describe('Demo annotation', () => {
    test('Test 01', {
        annotation: {
          type: 'demo',
          description: 'https://github.com/playwrightvn/pw-discovery',
        },
      }, async ({ page }) => {
        console.log('Hello from test 1')
      })
  
      test('Test 02', async ({ page, browser }) => {
        console.log('Hello from test 2')
        test.info().annotations.push({
          type: 'browser version',
          description: browser.version(),
        })
      })
})