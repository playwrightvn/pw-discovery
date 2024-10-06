import { test, expect } from '@playwright/test';

test('websocket', async ({ page }) => {
    await page.goto("https://echo.websocket.org/.ws");
    page.on('websocket', ws => {
        ws.on('framereceived', data => {
            expect.poll(() => {
                return data.payload
            }).toEqual("hello");
        });
    })

    await page.locator("//textarea[@id='content']").fill("hello");
    await page.click("//button[@id='send']")
})