import { test, chromium } from "@playwright/test";

function convertNumber(price) {
  return Number(price.replace(/[^\d]/g, ""));
}

function reasonablePrice(price) {
  if (price < 25000000) {
    console.log("Tôi đã đủ tiền mua");
  }
  else {
    console.log("Tôi không đủ tiền mua");
  }
}
test("daily/10/15_multiple-pages", async ({}) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const pageTGDD = await context.newPage();
  const pageDDV = await context.newPage();
  // // TGDD
  await pageTGDD.goto(`https://www.thegioididong.com/`);
  await pageTGDD.locator(`//input[@id='skw']`).fill(`iPhone 16`);
  await pageTGDD.click(`//button[@aria-label='button suggest search']`);
  let priceTGDD = await pageTGDD
    .locator(`//section[@id='categoryPage']//li[1]//strong[@class='price']`)
    .textContent();
  const convertPriceTGDD = convertNumber(priceTGDD);

  // DDV
  await pageDDV.goto(`https://didongviet.vn/`);
  await pageDDV
    .locator(`//div[contains(@class,'w-[28%]')]//input[@id='input-search']`)
    .fill(`iPhone 16`);
  await pageDDV
    .locator(`//div[contains(@class,'w-[28%]')]//input[@id='input-search']`)
    .press("Enter");
  let priceDDV = await pageDDV
    .locator(`//div[@class="md:hidden"][1]//p[@class="font-bold !text-17"]`)
    .textContent();
  const convertPriceDDV = convertNumber(priceDDV);

  if (convertPriceDDV > convertPriceTGDD) {
    console.log(`TGDD có giá iPhone 16 rẻ hơn la ${convertPriceTGDD}`);
    reasonablePrice(convertPriceTGDD);
  } else {
    console.log(`DDV có giá iPhone 16 rẻ hơn la ${convertPriceDDV}`);
    reasonablePrice(convertPriceDDV);
  }
});
