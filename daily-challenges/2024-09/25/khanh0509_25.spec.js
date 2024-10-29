import { test, expect } from "@playwright/test";

// javascript
function trimSpaces(str) {
  let arr = str.split(" ");
  arr = arr.filter((value) => value !== "");
  console.log(arr.join(" "));
}
trimSpaces("   Xin   chào   mọi người   ");
trimSpaces("Xin chào mọi người");
trimSpaces("   JavaScript    is    fun   ");
trimSpaces("    Lập  trình   JavaScript   ");

// playwright
test("daily25", async ({ browser }) => {
  const context = await browser.newContext({
    permissions: ['geolocation', 'camera', 'microphone']
  })
  const page = await context.newPage();
  await page.goto(`https://material.playwrightvn.com/017-detect-user-agent.html`)
});
