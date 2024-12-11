import { test } from "@playwright/test";

function convertNumber(price) {
  return Number(price.replace(/[^\d]/g, ""));
}

function reasonablePrice(price) {
  if (price < 25000000) console.log("Tôi đã đủ tiền mua");
  else console.log("Tôi không đủ tiền mua");
}
test("daily/10/15_multiple-pages", async ({context}) => {
  const page_TGDD = await context.newPage();
  const page_DDV = await context.newPage();

  // TGDD
  await page_TGDD.goto(`https://www.thegioididong.com/`);
  await page_TGDD.click(`//div[@class="icon-close-popup"]`);
  await page_TGDD.locator(`//input[@id='skw']`).fill(`iPhone 16`);
  await page_TGDD.click(`//button[@aria-label='button suggest search']`);
  let priceTGDD = await page_TGDD
    .locator(`//section[@id='categoryPage']//li[1]//strong[@class='price']`)
    .textContent();
  const TGDD = convertNumber(priceTGDD);

  // DDV
  await page_DDV.goto(`https://didongviet.vn/`);
  await page_DDV
    .locator(`//div[contains(@class,'w-[28%]')]//input[@id='input-search']`)
    .fill(`iPhone 16`);
  await page_DDV
    .locator(`//div[contains(@class,'w-[28%]')]//input[@id='input-search']`)
    .press("Enter");
  let priceDDV = await page_DDV
    .locator(`//div[@class="md:hidden"][1]//p[@class="font-bold !text-17"]`)
    .textContent();
  const DDV = convertNumber(priceDDV);

  // comparison prices
  if (DDV > TGDD) {
    console.log(`TGDD có giá iPhone 16 rẻ hơn la ${TGDD}`);
    reasonablePrice(TGDD);
  } else {
    console.log(`DDV có giá iPhone 16 rẻ hơn la ${DDV}`);
    reasonablePrice(DDV);
  }
});
