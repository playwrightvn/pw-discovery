import { test, expect } from '@playwright/test';

test('websocket 1', async ({ page }) => {
    await page.goto("https://echo.websocket.org/.ws");

    page.on('websocket', ws => {
        ws.on('framereceived', data => {
            //expect(data.payload).toEqual("hello");
            expect.poll(() => {
                return data.payload;
            }).toEqual("hello");
        })
    })

    await page.fill("//textarea[@id='content']", "hello");
    await page.click("//button[@id='send']");
})