//Javascript
import { test } from '@playwright/test';

function trimSpace(input: string): string {
    if (!input) {
        return 'Chuỗi rỗng';
    }
    const arrInput: string[] = input.trim().split(' ');
    const arrTempt: string[] = [];
    arrInput.forEach(element => {
        if (element) {
            arrTempt.push(element);
        }
    });
    let results: string = '';
    arrTempt.forEach(element => {
        results += element + ' ';
    })
    return results.trim();
}

//PlayWright
test.describe('solution', async () => {
    test.beforeEach('beforeEach', async ({ context }) => {
        await context.grantPermissions(['geolocation', 'camera', 'microphone'], { origin: 'https://material.playwrightvn.com/017-detect-user-agent.html' })
    });

    test('solution 25/09/2024', async ({ page }) => {
        await page.goto('https://material.playwrightvn.com/017-detect-user-agent.html');
    });
})
