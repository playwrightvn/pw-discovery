## Cấu hình HTML Reporter

### 1. Cấu hình cơ bản trong playwright.config.ts

```typescript
import { defineConfig } from '@playwright/test';

export default defineConfig({
  // Cấu hình reporter
  reporter: 'html',
  
  // Hoặc với tùy chọn chi tiết
  reporter: [['html', { 
    outputFolder: 'playwright-report',
    open: 'never' // 'never' | 'always' | 'on-failure'
  }]],
});
```

### 2. Các tùy chọn cấu hình

```typescript
reporter: [['html', {
  // Thư mục lưu report (mặc định: playwright-report)
  outputFolder: 'my-report',
  
  // Tự động mở report sau khi chạy test
  // - 'never': không bao giờ mở
  // - 'always': luôn mở
  // - 'on-failure': chỉ mở khi có test fail
  open: 'on-failure',
  
  // Tên file HTML chính
  outputFile: 'index.html',
  
  // Host và port khi serve report
  host: 'localhost',
  port: 9323,
  
  // Đính kèm các file vào report
  attachmentsBaseURL: 'https://example.com/attachments'
}]]
```

## Sử dụng nhiều reporter cùng lúc

```typescript
export default defineConfig({
  reporter: [
    ['html', { outputFolder: 'html-report' }],
    ['json', { outputFile: 'test-results.json' }],
    ['junit', { outputFile: 'junit.xml' }],
    ['line'], // Console output
    ['list']   // Danh sách test
  ],
});
```

## Chạy test và xem report

### 1. Chạy test với HTML reporter

```bash
# Chạy tất cả test
npx playwright test

# Chạy với reporter cụ thể
npx playwright test --reporter=html

# Chạy và tự động mở report
npx playwright test --reporter=html --reporter-show=always
```

### 2. Xem report sau khi chạy test

```bash
# Mở report đã tạo
npx playwright show-report

# Mở report từ thư mục cụ thể
npx playwright show-report my-report

# Serve report trên port khác
npx playwright show-report --port 8080
```

## Tùy chỉnh report với attachments

### 1. Thêm screenshot vào report

```typescript
import { test } from '@playwright/test';

test('test với screenshot', async ({ page }, testInfo) => {
  await page.goto('https://example.com');
  
  // Screenshot tự động khi fail
  if (testInfo.status !== 'passed') {
    await testInfo.attach('screenshot', {
      body: await page.screenshot(),
      contentType: 'image/png'
    });
  }
});
```

### 2. Cấu hình screenshot tự động

```typescript
export default defineConfig({
  use: {
    // Screenshot khi test fail
    screenshot: 'only-on-failure',
    
    // Video recording
    video: 'retain-on-failure',
    
    // Trace viewer
    trace: 'on-first-retry'
  },
  
  reporter: [['html', { open: 'never' }]]
});
```

### 3. Thêm custom attachments

```typescript
test('test với attachments', async ({ }, testInfo) => {
  // Thêm text
  await testInfo.attach('log', {
    body: 'Custom log message',
    contentType: 'text/plain'
  });
  
  // Thêm JSON
  await testInfo.attach('data', {
    body: JSON.stringify({ key: 'value' }),
    contentType: 'application/json'
  });
  
  // Thêm file
  await testInfo.attach('file', {
    path: './data.csv',
    contentType: 'text/csv'
  });
});
```

## Tích hợp với CI/CD

### 1. GitHub Actions

```yaml
- name: Run Playwright tests
  run: npx playwright test
  
- name: Upload HTML report
  uses: actions/upload-artifact@v3
  if: always()
  with:
    name: playwright-report
    path: playwright-report/
    retention-days: 30
```

### 2. Serve report từ CI

```yaml
- name: Setup Pages
  uses: actions/configure-pages@v3
  
- name: Upload artifact
  uses: actions/upload-pages-artifact@v2
  with:
    path: 'playwright-report'
    
- name: Deploy to GitHub Pages
  uses: actions/deploy-pages@v2
```

## Tùy chỉnh report với metadata

```typescript
test('test với metadata', async ({ }, testInfo) => {
  // Thêm annotations
  testInfo.annotations.push({ 
    type: 'issue', 
    description: 'JIRA-123' 
  });
  
  // Set custom timeout
  testInfo.setTimeout(60000);
  
  // Log thông tin
  console.log(`Running ${testInfo.title}`);
});
```

## Report nâng cao

### 1. Filter và search trong report

HTML reporter tự động hỗ trợ:
- Filter theo status (passed/failed/skipped)
- Search theo tên test
- Xem chi tiết từng test
- Xem trace viewer
- Xem diff của assertions

### 2. Merge nhiều report

```bash
# Merge reports từ nhiều shards
npx playwright merge-reports --reporter html ./all-reports
```

### 3. Custom CSS cho report

Tạo file `playwright-report/custom.css`:

```css
/* Custom styles */
.test-result-passed {
  background-color: #d4edda !important;
}

.test-result-failed {
  background-color: #f8d7da !important;
}
```

## Script npm tiện ích

```json
{
  "scripts": {
    "test": "playwright test",
    "test:headed": "playwright test --headed",
    "report": "playwright show-report",
    "test:report": "playwright test && playwright show-report"
  }
}
```

HTML Reporter của Playwright cung cấp giao diện trực quan, dễ sử dụng với nhiều tính năng hữu ích để phân tích kết quả test. Bạn có thể tùy chỉnh theo nhu cầu của dự án.