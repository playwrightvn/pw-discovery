import { test } from '@playwright/test';

test('Abort images', async ({ page }) => {
    await page.route(
        '**/*.{png,jpg,webp,svg}',
        (route) => route.abort(),
    );

    await page.goto("https://material.playwrightvn.com/");
});