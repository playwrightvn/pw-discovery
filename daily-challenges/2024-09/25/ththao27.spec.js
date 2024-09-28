import { test, chromium, expect } from '@playwright/test';

// Javascript

function trimSpaces(str) {
    return str.split(/\s+/).join(' ');
}

// output 1

const str1= "   Xin   chào   mọi người   ";
console.log(trimSpaces(str1));

// output 2

const str2= "   JavaScript    is    fun   ";
console.log(trimSpaces(str2));

// output 3

const str3= "   Lập  trình   JavaScript   ";
console.log(trimSpaces(str3));

// Playwright

test('ththao27 - 2024-09 day 25: Emulate permissions for location, camera, and microphone', async ({ }) => {
  const browser = await chromium.launch({headless: false});
  const context = await browser.newContext({
    geolocation: {latitude: 21.0285, longitude: 105.8542},
    permissions: ['geolocation']
  });

  await context.grantPermissions(['geolocation', 'camera', 'microphone']);
  const page = await context.newPage();
  await page.goto('https://material.playwrightvn.com/017-detect-user-agent.html');
  await page.waitForTimeout(3000);

  const locationPermission = page.locator('//*[@id="locationPermission"]');
  const cameraPermission = page.locator('//*[@id="cameraPermission"]');
  const microphonePermission = page.locator('//*[@id="microphonePermission"]');

  await expect(locationPermission).toHaveText('Đã cấp quyền');
  await expect(cameraPermission).toHaveText('Đã cấp quyền');
  await expect(microphonePermission).toHaveText('Đã cấp quyền');

  await browser.close();
});