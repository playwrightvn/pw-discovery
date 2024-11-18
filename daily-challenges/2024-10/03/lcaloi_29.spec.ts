import {test, Page, expect} from '@playwright/test';

test("Solution 03/10/2024", async ({page}) => {
    await page.goto("https://echo.websocket.org/.ws");
    page.on('websocket', ws => {
        ws.on('framereceived', data => {
            expect.poll(() => {
                return data.payload
            }).toEqual("hello");
        });
    })

    await page.locator("//textarea[@id='content']").fill("hello");
    await page.getByText("Send Message", { exact: true }).click();
});