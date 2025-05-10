import {test, expect} from '@playwright/test';

test('my test', async ({ context }) => {
    const page1 = await context.newPage();
    const page2 = await context.newPage();

    await page1.goto("https://academy.betterbytesvn.com");
    await page2.goto("https://material.playwrightvn.com");
});