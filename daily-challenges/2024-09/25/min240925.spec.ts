/*
# Javascript
## Đề bài:
Cho một chuỗi bất kỳ, có thể chứa các khoảng trắng ở đầu, ở cuối hoặc giữa các từ. Nhiệm vụ của bạn là viết một hàm để xóa tất cả các khoảng trắng dư thừa, giữ lại chỉ một khoảng trắng giữa các từ, và đảm bảo không có khoảng trắng ở đầu hoặc cuối chuỗi.

### Yêu cầu:
- Viết một hàm JavaScript có tên `trimSpaces` để loại bỏ tất cả các khoảng trắng dư thừa trong chuỗi.
- Đảm bảo giữa các từ chỉ có một khoảng trắng.
- Loại bỏ tất cả khoảng trắng ở đầu và cuối chuỗi.
*/

function trimSpaces(str) {
    const trimStr = str.trim()
    return trimStr.replace(/\s+/g, ' ')
}

let str = '  Loại bỏ   tất cả khoảng trắng       ở đầu và cuối   chuỗi '
console.log(trimSpaces(str))

/*
# Playwright -> useful for check permission
- Cho trang web sau: https://material.playwrightvn.com/017-detect-user-agent.html
- Sử dụng kĩ thuật emulation trong Playwright để set trạng thái của location, camera và microphone thành đã cấp quyền
*/

import { test, expect } from '@playwright/test'

test('min240925', async ({ context, page }) => {
    await context.grantPermissions(['geolocation', 'camera', 'microphone'], {
        origin: 'https://material.playwrightvn.com'
    });

    await page.goto("https://material.playwrightvn.com/017-detect-user-agent.html")
})
