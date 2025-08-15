# HTML reporter
- HTML reporter là built-in reporter mạnh mẽ của Playwright
- Reporter này cung cấp các thông tin **rất chi tiết** về test run:
    - Số lượng case chạy theo từng trạng thái: pass/ fail/ flaky/ skipped
    - Thời gian chạy của từng test case
    - Screenshots và videos khi test fail
    - Trace viewer để debug chi tiết
    - Diff của các assertions fail
    - Console logs và network requests

# Cấu hình reporter
- Cấu hình trong file `playwright.config.ts`

## Cấu hình reporter cơ bản:
```typescript
reporter: 'html',
```

## Cấu hình trace (để debug):
```typescript
use: {
  trace: 'on-first-retry',  // Chỉ record khi retry
  // trace: 'on',           // Luôn record
  // trace: 'off',          // Không record
  // trace: 'retain-on-failure', // Giữ lại trace khi fail
},
```

## Cấu hình screenshot và video:
```typescript
use: {
  screenshot: 'only-on-failure', // Chỉ chụp khi fail
  video: 'retain-on-failure',    // Giữ video khi fail
},
```

# Đọc report
## Chạy report
- Sử dụng lệnh
```bash
npx playwright show-report
```

## Đọc report list
- Report list hiển thị tất cả các test đã chạy
- Mỗi test hiển thị:
  - ✅ **Passed**: Test chạy thành công (màu xanh)
  - ❌ **Failed**: Test thất bại (màu đỏ)
  - ⚠️ **Flaky**: Test không ổn định (màu vàng)
  - ⏭️ **Skipped**: Test bị bỏ qua (màu xám)
- Có thể filter test theo:
  - Status (passed/failed/flaky/skipped)
  - Project (chromium/firefox/webkit)
  - Tag hoặc annotation
- Có thanh search để tìm test theo tên

## Đọc report detail
- Click vào test để xem chi tiết
- Report detail bao gồm:

### 1. **Test Info**
- Tên test và file chứa test
- Thời gian chạy
- Browser và device
- Số lần retry

### 2. **Errors & Logs**
- Error message và stack trace khi fail
- Console logs trong quá trình test
- Assertion failures với diff chi tiết

### 3. **Attachments**
- **Screenshots**: Ảnh chụp màn hình khi fail
- **Videos**: Video ghi lại toàn bộ test
- **Trace**: Click "Show trace" để mở trace viewer

### 4. **Trace Viewer**
- Timeline của các actions
- Screenshots từng bước
- Network requests
- Console logs
- Source code với breakpoints

# Best Practices
1. **Luôn bật trace cho debugging**: Đặt `trace: 'on-first-retry'`
2. **Chụp screenshot khi fail**: Giúp debug nhanh hơn
3. **Đặt tên test rõ ràng**: Dễ tìm trong report
4. **Sử dụng annotations**: Thêm metadata cho test
5. **Review flaky tests**: Test flaky cần được fix

# Lệnh hữu ích
```bash
# Xem report sau khi chạy test
npx playwright show-report

# Xem report từ folder khác
npx playwright show-report my-report

# Chạy test và tự động mở report
npx playwright test && npx playwright show-report
```