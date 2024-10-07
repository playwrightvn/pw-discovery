import { test, expect } from "@playwright/test";

// javascript
function calculateTip(sum, tip) {
  console.log("Tien tip: ", sum * tip * 0.01);
}
calculateTip(100, 15);
calculateTip(1200, 10);
calculateTip(1030, 1);

// playwright
async function countSearch(page, search) {
  await page.locator(`//input[@id='searchInput']`).fill(search);
  await page.click(`//button[@id='searchButton']`);
  const resultSearch = await page.locator(`//table[@id="studentTable"]//tbody//tr[not(contains(@style, 'display: none;'))]`).count();
  return resultSearch;
}

test("basic test", async ({ page }) => {
  await page.goto(`https://material.playwrightvn.com/021-import-export.html`);
  await page.locator(`//select[@id='filterCriteria']`).selectOption("lop");
  expect(await countSearch(page,"10A4")).toBe(1); // verify 1 hs 10a4
  expect(await countSearch(page,"")).toBe(5); // verify toan bo hs
  await page.pause()
});
