// Javascript
function trimSpaces(str: string) {
    return str.trim().split(' ').filter(word => word !== '').join(' ');
}

console.log(trimSpaces("   Xin   chào   mọi người   "));

// Playwright
import { test } from '@playwright/test';

test.beforeEach(async ({ context }) => {
    await context.grantPermissions(['geolocation', 'camera', 'microphone'], {
        origin: 'https://material.playwrightvn.com'
    });
})
test('2024-09-25', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/017-detect-user-agent.html");
})