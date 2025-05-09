// Javascript
function trimSpace(input) {
    if (input == null) {
        throw new Error('Input must be a non-null string');
    }
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    return input.trim().replace(/\s+/g,' ');
}

// Playwright
import { test, expect, page } from '@playwright/test';
test('should verify browser permissions are granted for geolocation, camera and microphone', async ({ context }) => {
    // Overwrite the location, camera and microphone permissions for this test
    await context.grantPermissions(['geolocation', 'camera', 'microphone']);
    const page = await context.newPage();
    await page.goto('https://material.playwrightvn.com/');
    await expect(page).toHaveTitle('Tài liệu học automation test - Playwright Việt Nam');
    await page.getByRole('link', { name: /Detect user agent/ }).click();
    await expect(page).toHaveTitle('Detect User Agent');
    // Verify
    await verifyPermission(page, 'Location');
    await verifyPermission(page, 'Camera');
    await verifyPermission(page, 'Microphone');
});

async function verifyPermission(page: page, permissionName: string) {
    await expect(page
        .locator('tr')
        .filter({ has: page.getByRole('cell', { name: permissionName }) })
        .locator('td:nth-child(2)'))
        .toHaveText('Đã cấp quyền');
}