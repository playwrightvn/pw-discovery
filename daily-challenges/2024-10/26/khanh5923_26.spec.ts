import { test, expect, Page } from "@playwright/test";
interface Product {
  name: string | null;
  qnt: string | null;
}
async function buyProduct(productsList: Product[], page: Page): Promise<void> {
  let productSecondtList:Product[] = [];
  for (const product of productsList) {
    let visible = false;
    try {
      await expect(page.locator(`//div[contains(text(),'${product.name}')]`)).toHaveText(product.name!);
      visible = true;
    } catch {
      productSecondtList.push(product);
    }
    if (visible) {
      for (let i = 1; i <= Number(product.qnt); i++) {
        await page.waitForTimeout(10);
        await page.locator(`//div[contains(text(),'${product.name}')]/following-sibling::div//button[2]`).click();
      }
    }
  }
  if (productSecondtList.length > 0) {
    await page.click(`//div[@class="pagination"]//button[2]`);
    await buyProduct(productSecondtList, page);
  }
  else return;
}

test.setTimeout(60000);
test("khanh5923_26", async ({ page }) => {
  await page.goto(`https://material.playwrightvn.com/games/001-di-cho.html`);
  let productsList:Product[] = [];
  for (let i = 1; i <= 5; i++) {
    productsList.push({
      name: await page.locator(`//tbody[@id="wishlist"]//tr[${i}]//td[1]`).textContent(),
      qnt: await page.locator(`//tbody[@id="wishlist"]//tr[${i}]//td[2]`).textContent(),
    });
  }
  await buyProduct(productsList, page);
  page.on("dialog", async (dialog) => {
    const messageResult = dialog.message();
    await dialog.accept();
    expect(messageResult).toContain('Bạn đã đi chợ chính xác!');
  });
  await page.click(`//button[@class='check-result']`);
});
