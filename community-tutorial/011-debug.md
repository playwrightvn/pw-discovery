# Hướng dẫn Debug trong Playwright

## Debug là gì?

Debug (gỡ lỗi) là quá trình tìm kiếm, xác định và sửa chữa các lỗi hoặc vấn đề trong code. Khi làm việc với automation testing trong Playwright, debug giúp bạn:

- Xác định nguyên nhân test case bị fail
- Kiểm tra các selector có hoạt động đúng không
- Theo dõi luồng thực thi của code từng bước
- Xem giá trị của các biến tại các thời điểm khác nhau
- Tìm ra các lỗi logic trong test scripts

Debug đặc biệt quan trọng trong automation testing vì các test thường tương tác với UI phức tạp và cần xử lý nhiều trường hợp không mong đợi.

## 2 Cách Debug trong Playwright

### Cách 1: Debug với VSCode Extension

VSCode cung cấp extension chính thức cho Playwright, giúp việc debug trở nên trực quan và dễ dàng.

**Bước 1: Cài đặt Playwright Test for VSCode Extension**

Mở VSCode và vào Extensions Marketplace (Ctrl+Shift+X), tìm kiếm "Playwright Test for VSCode" và cài đặt extension chính thức từ Microsoft.

**Bước 2: Thiết lập breakpoints**

Trong file test của bạn, click vào số dòng bên trái editor để đặt breakpoint (dấu chấm đỏ). Code sẽ dừng tại điểm này khi chạy debug.

```javascript
test('example test', async ({ page }) => {
  await page.goto('https://example.com');
  // Đặt breakpoint ở dòng này
  await page.click('button#submit');
  const title = await page.title();
  expect(title).toBe('Expected Title');
});
```

**Bước 3: Chạy test trong chế độ debug**

Có nhiều cách để bắt đầu debug:
- Click vào biểu tượng "Debug Test" (hình tam giác với bug) bên cạnh tên test trong editor
- Mở Testing sidebar và click chuột phải vào test, chọn "Debug Test"
- Sử dụng Command Palette (Ctrl+Shift+P) và gõ "Test: Debug Test at Cursor"

**Bước 4: Sử dụng Debug Controls**

Khi debug đang chạy, bạn có thể:
- **Continue (F5)**: Tiếp tục chạy đến breakpoint tiếp theo
- **Step Over (F10)**: Thực thi dòng hiện tại và chuyển sang dòng tiếp theo
- **Step Into (F11)**: Đi vào bên trong function được gọi
- **Step Out (Shift+F11)**: Thoát khỏi function hiện tại
- **Restart (Ctrl+Shift+F5)**: Khởi động lại debug session
- **Stop (Shift+F5)**: Dừng debug

**Bước 5: Kiểm tra Variables và Call Stack**

Trong Debug sidebar của VSCode, bạn có thể:
- Xem giá trị của tất cả biến local và global trong panel Variables
- Theo dõi call stack để hiểu luồng thực thi
- Thêm watch expressions để theo dõi giá trị cụ thể
- Sử dụng Debug Console để thực thi code JavaScript trực tiếp

### Cách 2: Sử dụng JavaScript Debug Terminal

JavaScript Debug Terminal là một tính năng mạnh mẽ của VSCode cho phép debug trực tiếp từ terminal.

**Bước 1: Mở JavaScript Debug Terminal**

Trong VSCode, mở terminal và chọn dropdown menu "+" → "JavaScript Debug Terminal". Terminal này sẽ tự động attach debugger vào bất kỳ process Node.js nào được chạy từ đó.

**Bước 2: Đặt breakpoints trong code**

Tương tự như cách 1, click vào số dòng để đặt breakpoints trong file test của bạn.

**Bước 3: Chạy Playwright test từ Debug Terminal**

Trong JavaScript Debug Terminal, chạy lệnh Playwright như bình thường:

```bash
# Chạy tất cả tests
npx playwright test

# Chạy một file test cụ thể
npx playwright test tests/example.spec.js

# Chạy với headed mode để xem browser
npx playwright test --headed

# Chạy một test cụ thể với grep
npx playwright test -g "should display homepage"
```

**Bước 4: Debug với Inspector Mode**

Playwright cung cấp Inspector mode - một công cụ debug đặc biệt hữu ích:

```bash
# Bật Playwright Inspector
PWDEBUG=1 npx playwright test

# Trên Windows
set PWDEBUG=1
npx playwright test
```

Khi Inspector mode được bật:
- Browser sẽ chạy trong headed mode
- Playwright Inspector window sẽ xuất hiện
- Code sẽ tự động pause trước mỗi action
- Bạn có thể step through từng action một
- Có thể explore page với selector playground

**Bước 5: Sử dụng page.pause()**

Một kỹ thuật debug hữu ích khác là thêm `page.pause()` vào code:

```javascript
test('debug with pause', async ({ page }) => {
  await page.goto('https://example.com');
  
  // Tạm dừng execution tại đây
  await page.pause();
  
  await page.click('button#submit');
  await expect(page).toHaveURL('https://example.com/success');
});
```

Khi gặp `page.pause()`, Playwright Inspector sẽ mở và cho phép bạn:
- Kiểm tra page state hiện tại
- Thử các selector trong Playground
- Step through các actions tiếp theo
- Resume execution khi sẵn sàng

## Tips Debug Hiệu Quả

**Sử dụng Console Logs**: Thêm `console.log()` để in ra giá trị biến và theo dõi flow execution.

**Debug Selectors**: Sử dụng Playwright Inspector hoặc `page.locator().count()` để verify selector tìm được elements mong muốn.

**Slow Motion Mode**: Thêm `--slow-mo` flag để làm chậm execution và dễ quan sát hơn:
```bash
npx playwright test --slow-mo=1000
```

**Screenshot và Videos**: Enable screenshots và videos trong config để review lại khi test fail:
```javascript
use: {
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
}
```

**Trace Viewer**: Sử dụng trace files để phân tích chi tiết test execution:
```bash
npx playwright test --trace on
npx playwright show-trace trace.zip
```

Cả hai phương pháp debug trên đều có ưu điểm riêng. VSCode Extension cung cấp trải nghiệm debug tích hợp hoàn chỉnh, trong khi JavaScript Debug Terminal linh hoạt hơn khi cần debug với các options khác nhau của Playwright. Tùy theo tình huống cụ thể, bạn có thể chọn phương pháp phù hợp nhất cho workflow của mình.