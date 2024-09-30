import { expect, Page, test } from '@playwright/test';

test('demo price', async ({ page }) => {
    await page.goto(''); // Replace URL here

    let shouldWait = await isLoadingAppear(page);
    do {
        await page.locator("//footer").scrollIntoViewIfNeeded();
        shouldWait = await isLoadingAppear(page);
    } while (shouldWait);


    const priceLocators = await page.locator('//div[@class="price"]//span[contains(@class, "price-inner")]').all();
    const prices: number[] = [];
    const rawPrices: string[] = [];
    for (const locator of priceLocators) {
        const rawPrice = await locator.locator("//span[@class='sales']//span").textContent() || '';
        
        if (rawPrice === '') {
            console.log('Ignore empty value');
            continue;
        }

        let price = rawPrice.replace('RM', '');
        price = price.replace(',', '');
        rawPrices.push(price);
        
        const parsedPrice = parseFloat(price);
        prices.push(parsedPrice);
    }

    const sortedArr = prices.sort((a, b) => a - b);
    expect(JSON.stringify(prices)).toEqual(JSON.stringify(sortedArr));
});

const isLoadingAppear = async (page: Page): Promise<boolean> => {
    const loadingLocator = page.locator("//img[@class='scroll-loading-amimation']");

    try {
        await expect(loadingLocator).toBeVisible();
        console.log('Loading appear');
        await expect(loadingLocator).toBeHidden({ timeout: 8_000 });
        console.log('Loading hidden');
        return true;
    } catch (e) {
        console.log('Loading may not appear')
        return false;
    }
}