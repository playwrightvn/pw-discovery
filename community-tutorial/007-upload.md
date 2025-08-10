# Hướng dẫn Upload File trong Playwright

## Giới thiệu

Playwright là một framework automation testing mạnh mẽ cho phép kiểm thử các ứng dụng web hiện đại. Một trong những tính năng quan trọng là khả năng upload file một cách dễ dàng và tin cậy. Bài viết này sẽ hướng dẫn chi tiết các phương pháp upload file trong Playwright.

## Các phương pháp Upload File

### 1. Phương pháp setInputFiles() (Recommended)

Đây là phương pháp phổ biến và đơn giản nhất để upload file trong Playwright.

#### Upload một file đơn

```javascript
// JavaScript/TypeScript
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('https://example.com/upload');
  
  // Chọn input file và set file path
  await page.setInputFiles('input[type="file"]', '/path/to/file.pdf');
  
  // Hoặc sử dụng locator
  const fileInput = page.locator('input[type="file"]');
  await fileInput.setInputFiles('/path/to/file.pdf');
  
  await browser.close();
})();
```

```python
# Python
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    
    page.goto('https://example.com/upload')
    
    # Upload file
    page.set_input_files('input[type="file"]', '/path/to/file.pdf')
    
    # Hoặc sử dụng locator
    file_input = page.locator('input[type="file"]')
    file_input.set_input_files('/path/to/file.pdf')
    
    browser.close()
```

#### Upload nhiều files

```javascript
// JavaScript/TypeScript
// Upload nhiều files cùng lúc
await page.setInputFiles('input[type="file"]', [
  '/path/to/file1.pdf',
  '/path/to/file2.jpg',
  '/path/to/file3.png'
]);
```

```python
# Python
# Upload nhiều files
page.set_input_files('input[type="file"]', [
    '/path/to/file1.pdf',
    '/path/to/file2.jpg',
    '/path/to/file3.png'
])
```

#### Clear input file

```javascript
// JavaScript/TypeScript
// Xóa file đã chọn
await page.setInputFiles('input[type="file"]', []);
```

```python
# Python
# Xóa file đã chọn
page.set_input_files('input[type="file"]', [])
```

### 2. Upload với FileChooser

Phương pháp này hữu ích khi bạn cần xử lý dialog chọn file.

```javascript
// JavaScript/TypeScript
// Lắng nghe sự kiện filechooser
page.on('filechooser', async (fileChooser) => {
  await fileChooser.setFiles('/path/to/file.pdf');
});

// Trigger action mở dialog chọn file
await page.click('#upload-button');
```

```python
# Python
# Xử lý file chooser
with page.expect_file_chooser() as fc_info:
    page.click('#upload-button')  # Click button mở dialog
file_chooser = fc_info.value
file_chooser.set_files('/path/to/file.pdf')
```

### 3. Upload với Buffer hoặc Stream

Bạn có thể upload file từ buffer hoặc stream thay vì file path.

```javascript
// JavaScript/TypeScript
const buffer = Buffer.from('Hello World', 'utf-8');

await page.setInputFiles('input[type="file"]', {
  name: 'file.txt',
  mimeType: 'text/plain',
  buffer: buffer
});
```

```python
# Python
import os

# Đọc file vào buffer
with open('/path/to/file.pdf', 'rb') as f:
    file_content = f.read()

page.set_input_files('input[type="file"]', 
    files=[{
        'name': 'file.pdf',
        'mimeType': 'application/pdf',
        'buffer': file_content
    }]
)
```

### 4. Drag and Drop Upload

Một số ứng dụng web hỗ trợ drag and drop để upload file.

```javascript
// JavaScript/TypeScript
// Tạo DataTransfer và File objects
await page.evaluateHandle(async () => {
  const dataTransfer = new DataTransfer();
  const file = new File(['content'], 'test.txt', { type: 'text/plain' });
  dataTransfer.items.add(file);
  return dataTransfer;
});

// Thực hiện drag and drop
const dropZone = page.locator('#drop-zone');
await dropZone.dispatchEvent('drop', { dataTransfer });
```

## Xử lý các tình huống đặc biệt

### Upload file với hidden input

```javascript
// JavaScript/TypeScript
// Nếu input bị ẩn, cần force upload
await page.setInputFiles('input[type="file"]', '/path/to/file.pdf', { 
  force: true 
});

// Hoặc làm hiện input trước khi upload
await page.evaluate(() => {
  const input = document.querySelector('input[type="file"]');
  input.style.display = 'block';
  input.style.visibility = 'visible';
});
```

### Verify upload thành công

```javascript
// JavaScript/TypeScript
// Kiểm tra file name sau khi upload
const fileName = await page.locator('.uploaded-file-name').textContent();
expect(fileName).toBe('file.pdf');

// Kiểm tra preview image (nếu có)
const previewImage = page.locator('.file-preview img');
await expect(previewImage).toBeVisible();

// Kiểm tra success message
await expect(page.locator('.success-message')).toContainText('Upload successful');
```

### Upload file với authentication

```javascript
// JavaScript/TypeScript
// Set authentication trước khi upload
const context = await browser.newContext({
  httpCredentials: {
    username: 'user',
    password: 'pass'
  }
});

const page = await context.newPage();
await page.goto('https://secure.example.com/upload');
await page.setInputFiles('input[type="file"]', '/path/to/file.pdf');
```

## Best Practices

### 1. Sử dụng Path tương đối

```javascript
// JavaScript/TypeScript
const path = require('path');

// Sử dụng path tương đối từ project root
const filePath = path.join(__dirname, '../test-data/sample.pdf');
await page.setInputFiles('input[type="file"]', filePath);
```

### 2. Wait for Upload Complete

```javascript
// JavaScript/TypeScript
// Upload file
await page.setInputFiles('input[type="file"]', '/path/to/file.pdf');

// Wait for upload complete
await page.waitForSelector('.upload-complete', { 
  state: 'visible',
  timeout: 30000 
});

// Hoặc wait for network idle
await page.waitForLoadState('networkidle');
```

### 3. Handle Upload Errors

```javascript
// JavaScript/TypeScript
try {
  await page.setInputFiles('input[type="file"]', '/path/to/large-file.pdf');
  
  // Check for error messages
  const errorMessage = page.locator('.error-message');
  if (await errorMessage.isVisible()) {
    const error = await errorMessage.textContent();
    throw new Error(`Upload failed: ${error}`);
  }
  
} catch (error) {
  console.error('Upload error:', error);
  // Handle error appropriately
}
```

### 4. File Size Validation

```javascript
// JavaScript/TypeScript
const fs = require('fs');

// Check file size before upload
const stats = fs.statSync('/path/to/file.pdf');
const fileSizeInMB = stats.size / (1024 * 1024);

if (fileSizeInMB > 10) {
  console.log('File quá lớn, cần compress trước khi upload');
} else {
  await page.setInputFiles('input[type="file"]', '/path/to/file.pdf');
}
```

## Test Example Hoàn Chỉnh

```javascript
// JavaScript/TypeScript - Playwright Test
const { test, expect } = require('@playwright/test');
const path = require('path');

test.describe('File Upload Tests', () => {
  test('should upload PDF file successfully', async ({ page }) => {
    // Navigate to upload page
    await page.goto('https://example.com/upload');
    
    // Prepare file path
    const filePath = path.join(__dirname, '../test-data/sample.pdf');
    
    // Upload file
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles(filePath);
    
    // Click upload button
    await page.click('#upload-button');
    
    // Wait for upload to complete
    await page.waitForSelector('.upload-success', { timeout: 30000 });
    
    // Verify upload
    const successMessage = page.locator('.upload-success');
    await expect(successMessage).toContainText('File uploaded successfully');
    
    // Verify file name
    const uploadedFileName = page.locator('.file-name');
    await expect(uploadedFileName).toContainText('sample.pdf');
  });
  
  test('should handle multiple file uploads', async ({ page }) => {
    await page.goto('https://example.com/multi-upload');
    
    const files = [
      path.join(__dirname, '../test-data/file1.jpg'),
      path.join(__dirname, '../test-data/file2.png'),
      path.join(__dirname, '../test-data/file3.pdf')
    ];
    
    await page.setInputFiles('input[multiple]', files);
    await page.click('#upload-all');
    
    // Verify all files uploaded
    const uploadedFiles = page.locator('.uploaded-file');
    await expect(uploadedFiles).toHaveCount(3);
  });
});
```

## Troubleshooting

### Vấn đề thường gặp và cách giải quyết

1. **File path không tồn tại**
   - Kiểm tra path chính xác
   - Sử dụng absolute path hoặc path.join()

2. **Input file bị ẩn**
   - Sử dụng force: true
   - Hoặc làm hiện element trước khi upload

3. **Upload timeout**
   - Tăng timeout value
   - Kiểm tra network connection
   - Verify file size

4. **Multiple file upload không hoạt động**
   - Kiểm tra input có attribute 'multiple'
   - Verify browser compatibility

## Kết luận

Upload file trong Playwright rất đơn giản và linh hoạt với nhiều phương pháp khác nhau. Phương pháp `setInputFiles()` là được khuyến nghị cho hầu hết các trường hợp. Luôn nhớ handle errors và wait for upload completion để đảm bảo test stability.

## Resources

- [Playwright Official Documentation](https://playwright.dev/docs/input#upload-files)
- [Playwright API Reference](https://playwright.dev/docs/api/class-page#page-set-input-files)
- [File Upload Best Practices](https://playwright.dev/docs/best-practices)