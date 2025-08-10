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

---

# Hướng dẫn Download File trong Playwright

## Giới thiệu

Download file là một tính năng quan trọng trong web automation testing. Playwright cung cấp nhiều cách để handle download files một cách hiệu quả và tin cậy. Bài viết này sẽ hướng dẫn chi tiết cách xử lý download trong Playwright.

## Cấu hình Download

### 1. Setup Download Path

```javascript
// JavaScript/TypeScript
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  
  // Cấu hình download path
  const context = await browser.newContext({
    acceptDownloads: true,  // Phải set true để enable download
    downloadsPath: path.join(__dirname, 'downloads')  // Optional: custom download folder
  });
  
  const page = await context.newPage();
  await page.goto('https://example.com/files');
  
  await browser.close();
})();
```

```python
# Python
from playwright.sync_api import sync_playwright
import os

with sync_playwright() as p:
    browser = p.chromium.launch()
    
    # Cấu hình download
    context = browser.new_context(
        accept_downloads=True,  # Enable downloads
        downloads_path='./downloads'  # Custom download folder
    )
    
    page = context.new_page()
    page.goto('https://example.com/files')
    
    browser.close()
```

### 2. Handle Download Event

#### Cách 1: Wait for Download Event

```javascript
// JavaScript/TypeScript
// Start waiting for download before clicking
const downloadPromise = page.waitForEvent('download');

// Click download button
await page.click('#download-button');

// Wait for download to start
const download = await downloadPromise;

// Get download info
console.log('Download URL:', await download.url());
console.log('Suggested filename:', download.suggestedFilename());

// Save to specific location
await download.saveAs('/path/to/save/file.pdf');

// Or save with suggested filename
await download.saveAs(path.join('./downloads', download.suggestedFilename()));
```

```python
# Python
# Wait for download
with page.expect_download() as download_info:
    # Click download button
    page.click('#download-button')
    
download = download_info.value

# Get download info
print(f"Download URL: {download.url}")
print(f"Suggested filename: {download.suggested_filename}")

# Save file
download.save_as(f"./downloads/{download.suggested_filename}")
```

#### Cách 2: Listen to Download Event

```javascript
// JavaScript/TypeScript
// Setup download handler
page.on('download', async (download) => {
  console.log(`Download started: ${download.suggestedFilename()}`);
  const savePath = path.join('./downloads', download.suggestedFilename());
  await download.saveAs(savePath);
  console.log(`Download saved to: ${savePath}`);
});

// Now click download buttons
await page.click('#download-pdf');
await page.click('#download-excel');
```

### 3. Download với Different Methods

#### Download từ Link Click

```javascript
// JavaScript/TypeScript
// Direct link download
const downloadPromise = page.waitForEvent('download');
await page.click('a[href$=".pdf"]');  // Click link ending with .pdf
const download = await downloadPromise;
await download.saveAs('./downloads/document.pdf');
```

#### Download từ Form Submit

```javascript
// JavaScript/TypeScript
// Form submission download
const downloadPromise = page.waitForEvent('download');

// Fill form
await page.fill('#report-type', 'monthly');
await page.fill('#date-range', '2024-01');

// Submit form triggers download
await page.click('#generate-report');

const download = await downloadPromise;
await download.saveAs('./reports/monthly-report.xlsx');
```

#### Download với JavaScript Trigger

```javascript
// JavaScript/TypeScript
// Some sites use JavaScript to trigger downloads
const downloadPromise = page.waitForEvent('download');

// Execute JavaScript that triggers download
await page.evaluate(() => {
  window.downloadFile('file-id-123');
});

const download = await downloadPromise;
await download.saveAs('./downloads/file.zip');
```

## Advanced Download Handling

### 1. Multiple Downloads

```javascript
// JavaScript/TypeScript
// Handle multiple downloads
const downloads = [];

// Setup handler for all downloads
page.on('download', (download) => {
  downloads.push(download);
});

// Click multiple download buttons
await page.click('#download-file1');
await page.click('#download-file2');
await page.click('#download-file3');

// Wait for all downloads to start
await page.waitForTimeout(2000);

// Save all downloads
for (const download of downloads) {
  const savePath = path.join('./downloads', download.suggestedFilename());
  await download.saveAs(savePath);
  console.log(`Saved: ${download.suggestedFilename()}`);
}
```

### 2. Download Progress Monitoring

```javascript
// JavaScript/TypeScript
// Monitor download progress
const downloadPromise = page.waitForEvent('download');
await page.click('#large-file-download');
const download = await downloadPromise;

// Start saving
const savePath = './downloads/large-file.zip';
const savePromise = download.saveAs(savePath);

// Monitor progress (simplified example)
let lastSize = 0;
const checkProgress = setInterval(async () => {
  try {
    const fs = require('fs');
    const stats = fs.statSync(savePath);
    const currentSize = stats.size;
    const progress = currentSize - lastSize;
    
    if (progress > 0) {
      console.log(`Downloaded: ${(currentSize / 1024 / 1024).toFixed(2)} MB`);
      lastSize = currentSize;
    }
  } catch (e) {
    // File might not exist yet
  }
}, 1000);

// Wait for download to complete
await savePromise;
clearInterval(checkProgress);
console.log('Download completed!');
```

### 3. Download with Authentication

```javascript
// JavaScript/TypeScript
// Download from authenticated source
const context = await browser.newContext({
  acceptDownloads: true,
  httpCredentials: {
    username: 'user',
    password: 'password'
  },
  // Or use bearer token
  extraHTTPHeaders: {
    'Authorization': 'Bearer YOUR_TOKEN_HERE'
  }
});

const page = await context.newPage();
await page.goto('https://secure.example.com/files');

const downloadPromise = page.waitForEvent('download');
await page.click('#secure-download');
const download = await downloadPromise;
await download.saveAs('./secure-files/document.pdf');
```

### 4. Download Validation

```javascript
// JavaScript/TypeScript
const fs = require('fs');
const crypto = require('crypto');

// Download file
const downloadPromise = page.waitForEvent('download');
await page.click('#download-button');
const download = await downloadPromise;

const filePath = './downloads/file.pdf';
await download.saveAs(filePath);

// Validate download
// 1. Check file exists
if (!fs.existsSync(filePath)) {
  throw new Error('Download failed - file not found');
}

// 2. Check file size
const stats = fs.statSync(filePath);
if (stats.size === 0) {
  throw new Error('Download failed - file is empty');
}
console.log(`File size: ${stats.size} bytes`);

// 3. Check file type (using first bytes)
const buffer = fs.readFileSync(filePath);
const fileSignature = buffer.toString('hex', 0, 4);

// PDF signature: 25504446
if (fileSignature === '25504446') {
  console.log('Valid PDF file');
}

// 4. Calculate checksum (if provided)
const fileBuffer = fs.readFileSync(filePath);
const hashSum = crypto.createHash('md5');
hashSum.update(fileBuffer);
const hex = hashSum.digest('hex');
console.log(`MD5 checksum: ${hex}`);
```

## Download với Custom Headers

```javascript
// JavaScript/TypeScript
// Some downloads require custom headers
const context = await browser.newContext({
  acceptDownloads: true,
  extraHTTPHeaders: {
    'X-Custom-Header': 'value',
    'Referer': 'https://example.com'
  }
});

const page = await context.newPage();

// Or set headers for specific request
await page.route('**/*.pdf', (route) => {
  route.continue({
    headers: {
      ...route.request().headers(),
      'X-Download-Token': 'token123'
    }
  });
});

const downloadPromise = page.waitForEvent('download');
await page.click('#protected-download');
const download = await downloadPromise;
await download.saveAs('./downloads/protected.pdf');
```

## Handle Special Cases

### 1. Download từ Blob URL

```javascript
// JavaScript/TypeScript
// Some sites generate blob URLs for downloads
page.on('download', async (download) => {
  // Blob URLs look like: blob:https://example.com/uuid
  if (download.url().startsWith('blob:')) {
    console.log('Downloading from blob URL');
    await download.saveAs('./downloads/blob-file.pdf');
  }
});

// Trigger blob download
await page.click('#generate-blob-download');
```

### 2. Download với Redirect

```javascript
// JavaScript/TypeScript
// Handle downloads with redirects
const downloadPromise = page.waitForEvent('download', {
  timeout: 30000  // Increase timeout for redirects
});

await page.click('#redirect-download');

const download = await downloadPromise;
console.log('Final URL:', await download.url());
await download.saveAs('./downloads/redirected-file.pdf');
```

### 3. Cancel Download

```javascript
// JavaScript/TypeScript
const downloadPromise = page.waitForEvent('download');
await page.click('#large-file-download');
const download = await downloadPromise;

// Cancel download if needed
await download.cancel();
console.log('Download cancelled');

// Or conditionally cancel
if (download.suggestedFilename().includes('unwanted')) {
  await download.cancel();
  console.log('Cancelled unwanted download');
} else {
  await download.saveAs(`./downloads/${download.suggestedFilename()}`);
}
```

## Test Examples

### Complete Download Test

```javascript
// JavaScript/TypeScript - Playwright Test
const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

test.describe('Download Tests', () => {
  test.use({
    acceptDownloads: true
  });

  test('should download PDF file', async ({ page }) => {
    await page.goto('https://example.com/downloads');
    
    // Start waiting for download
    const downloadPromise = page.waitForEvent('download');
    
    // Click download button
    await page.click('#download-pdf');
    
    // Get download object
    const download = await downloadPromise;
    
    // Verify suggested filename
    expect(download.suggestedFilename()).toBe('document.pdf');
    
    // Save file
    const downloadPath = path.join('./test-downloads', download.suggestedFilename());
    await download.saveAs(downloadPath);
    
    // Verify file exists and not empty
    expect(fs.existsSync(downloadPath)).toBeTruthy();
    const stats = fs.statSync(downloadPath);
    expect(stats.size).toBeGreaterThan(0);
    
    // Clean up
    fs.unlinkSync(downloadPath);
  });

  test('should handle multiple downloads', async ({ page }) => {
    await page.goto('https://example.com/downloads');
    
    const downloads = [];
    
    // Collect all downloads
    page.on('download', (download) => {
      downloads.push(download);
    });
    
    // Trigger multiple downloads
    await page.click('#download-doc1');
    await page.click('#download-doc2');
    await page.click('#download-doc3');
    
    // Wait for downloads to start
    await page.waitForTimeout(2000);
    
    // Verify count
    expect(downloads).toHaveLength(3);
    
    // Save all files
    for (const download of downloads) {
      const savePath = path.join('./test-downloads', download.suggestedFilename());
      await download.saveAs(savePath);
      
      // Verify each file
      expect(fs.existsSync(savePath)).toBeTruthy();
      
      // Clean up
      fs.unlinkSync(savePath);
    }
  });

  test('should download with progress tracking', async ({ page }) => {
    await page.goto('https://example.com/large-files');
    
    const downloadPromise = page.waitForEvent('download');
    await page.click('#large-file');
    const download = await downloadPromise;
    
    const fileName = download.suggestedFilename();
    const savePath = path.join('./test-downloads', fileName);
    
    // Track download completion
    console.log(`Downloading: ${fileName}`);
    const startTime = Date.now();
    
    await download.saveAs(savePath);
    
    const endTime = Date.now();
    const duration = (endTime - startTime) / 1000;
    const fileSize = fs.statSync(savePath).size;
    
    console.log(`Download completed in ${duration}s`);
    console.log(`File size: ${(fileSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Speed: ${(fileSize / 1024 / 1024 / duration).toFixed(2)} MB/s`);
    
    // Clean up
    fs.unlinkSync(savePath);
  });
});
```

## Best Practices

### 1. Always Enable Downloads in Context

```javascript
// JavaScript/TypeScript
// ✅ Good
const context = await browser.newContext({
  acceptDownloads: true
});

// ❌ Bad - downloads will fail
const context = await browser.newContext();
```

### 2. Use Proper Timeout

```javascript
// JavaScript/TypeScript
// For large files, increase timeout
const download = await page.waitForEvent('download', {
  timeout: 60000  // 60 seconds for large files
});
```

### 3. Clean Up Downloaded Files

```javascript
// JavaScript/TypeScript
const fs = require('fs');

test.afterEach(async () => {
  // Clean up download folder after each test
  const downloadDir = './test-downloads';
  if (fs.existsSync(downloadDir)) {
    fs.readdirSync(downloadDir).forEach(file => {
      fs.unlinkSync(path.join(downloadDir, file));
    });
  }
});
```

### 4. Verify Download Content

```javascript
// JavaScript/TypeScript
// For text files, verify content
const content = fs.readFileSync(downloadPath, 'utf-8');
expect(content).toContain('Expected text');

// For CSV files
const csvContent = fs.readFileSync(downloadPath, 'utf-8');
const lines = csvContent.split('\n');
expect(lines[0]).toBe('header1,header2,header3');

// For JSON files
const jsonContent = JSON.parse(fs.readFileSync(downloadPath, 'utf-8'));
expect(jsonContent.property).toBe('expected value');
```

## Troubleshooting

### Vấn đề thường gặp

1. **Download không trigger**
   - Kiểm tra `acceptDownloads: true`
   - Verify selector đúng
   - Check console errors

2. **File không save**
   - Kiểm tra quyền write folder
   - Verify path tồn tại
   - Check disk space

3. **Download timeout**
   - Tăng timeout value
   - Check network speed
   - Verify server response

4. **Wrong file downloaded**
   - Verify download URL
   - Check response headers
   - Validate file content

## Kết luận

Download handling trong Playwright rất mạnh mẽ và linh hoạt. Luôn nhớ enable downloads trong context, handle errors properly, và verify downloaded files. Với các techniques trong bài này, bạn có thể handle mọi scenarios download trong automation testing.

## Resources

- [Playwright Downloads Documentation](https://playwright.dev/docs/downloads)
- [Playwright Download API](https://playwright.dev/docs/api/class-download)
- [File System Operations in Node.js](https://nodejs.org/api/fs.html)