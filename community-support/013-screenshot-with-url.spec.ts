import { test } from '@playwright/test';
import { chromium } from 'playwright';
import fs from 'fs';
import sharp from 'sharp';

// Hỏi: screenshot của playwright mình thấy không có phần url, vậy có cách nào khắc phục phần này không?
test.describe("Screenshot with url", async () => {
    // Đáp: được. Nhưng cần cài thêm thư viện: `npm i sharp`
    // Bản chất là mình sẽ thêm 1 block chứa URL vào cái ảnh gốc
    test('Screenshot with URL', async ({ }, testInfo) => {
        const browser = await chromium.launch();
        const page = await browser.newPage();

        await page.goto('https://academy.betterbytesvn.com/blog/');
        const url = page.url();

        // Chụp screenshot
        const screenshotBuffer = await page.screenshot();

        // Tạo ảnh với text URL
        const urlHeight = 40;
        const metadata = await sharp(screenshotBuffer).metadata();

        // Tạo SVG với URL
        const svgText = `
        <svg width="${metadata.width}" height="${urlHeight}">
            <rect width="100%" height="100%" fill="white"/>
            <text x="10" y="25" font-size="16" font-family="Arial">
            ${url}
            </text>
        </svg>
        `;

        // Ghép URL vào trên đầu screenshot
        const finalImage = await sharp({
            create: {
                width: metadata.width,
                height: metadata.height + urlHeight,
                channels: 4,
                background: { r: 255, g: 255, b: 255, alpha: 1 }
            }
        })
            .composite([
                { input: Buffer.from(svgText), top: 0, left: 0 },
                { input: screenshotBuffer, top: urlHeight, left: 0 }
            ])
            .png()
            .toBuffer();

        fs.writeFileSync('screenshot-with-url.png', finalImage);

        await browser.close();
    });
})