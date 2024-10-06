import { test } from '@playwright/test';

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

test.beforeEach(async ({ context }) => {
  await context.grantPermissions(['geolocation', 'camera', 'microphone'], {
      origin: 'https://material.playwrightvn.com'
  });
})
test('ththao27: 2024-09-25', async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/017-detect-user-agent.html");
})