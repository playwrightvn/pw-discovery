import { test, expect } from "@playwright/test";

test("daily 10/03 Websocket", async ({ page, context }) => {
  await page.goto(`https://echo.websocket.org/.ws`);
  page.on("websocket", (ws) => {
    ws.on("framereceived", (data) => {
      console.log(data.payload);
    });
  });
  await page.locator(`//textarea[@id='content']`).fill("hello");
  await page.click(`//button[@id='send']`);
});
