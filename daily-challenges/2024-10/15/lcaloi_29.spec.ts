import {test, Page, Locator} from "@playwright/test";

test('solution 15/10/2024', async ({context}) => {
    const pageOne: Page = await context.newPage();
    const pageTwo: Page = await context.newPage();

    await Promise.allSettled([
        pageOne.goto('https://www.thegioididong.com/'),
        pageTwo.goto('https://didongviet.vn/')
    ]);

    await Promise.allSettled([
        searchItem(pageOne, "IPhone 16"),
        searchItem(pageTwo, "IPhone 16")
    ]);
    const results: PromiseSettledResult<Awaited<Promise<number>>>[] = await Promise.allSettled([
        getPriceFirstItem(pageOne),
        getPriceFirstItem(pageTwo)
    ])
    const prices: number[] = results
        .filter(result => result.status === 'fulfilled')
        .map(result => (result as PromiseFulfilledResult<number>).value);

    const priceDDV: number = prices[1];
    const priceMWG: number = prices[0];
    const minPrice: number = priceDDV < priceMWG ? priceDDV : priceMWG;
    let message: string = priceMWG < priceDDV ? 'TGDĐ có giá iPhone16 rẻ hơn' : 'Di Động Việt có giá iPhone16 rẻ hơn';
    console.log(message);
    let message2: string = minPrice<=25000000? 'Tôi đã đủ tiền mua' : 'Tôi không đủ tiền mua';
    console.log(message2);
})

async function searchItem(page: Page, keyword: string): Promise<void> {
    const url: string = page.url();
    let txtInputSearch: Locator = url.includes('thegioididong.com') ?
        page.getByPlaceholder('Bạn tìm gì...', {exact: true}) :
        page.getByPlaceholder('Siêu phẩm iPhone 16 Pro', {exact: true}).first();
    await txtInputSearch.fill(keyword);
    await page.keyboard.press('Enter');
    await page.waitForLoadState('domcontentloaded', {timeout: 30 * 1000});
}

async function getPriceFirstItem(page: Page): Promise<number> {
    let firstItem: Locator;
    let priceFirstItemStr: string;
    let priceFirstItemNumber: number;
    if (page.url().includes('thegioididong.com')) {
        firstItem = page.locator('//ul[@class="listproduct"]/li')
            .filter({hasText: 'iPhone 16 128GB'})
            .first();
        priceFirstItemStr = await firstItem.getAttribute('data-price');
        priceFirstItemNumber = Number(priceFirstItemStr);
    } else {
        firstItem = page.locator('//div[contains(@class,"grid grid-cols-2")]/div')
            .filter({hasText: 'iPhone 16 128GB'})
            .first();
        const priceItemLocator: Locator = firstItem.locator('//p[contains(@class,\'font-bold !text-17\')]');
        priceFirstItemStr = await priceItemLocator.textContent().then(value => value.replace(/\D/g, ''));
        priceFirstItemNumber = Number(priceFirstItemStr);
    }
    return priceFirstItemNumber;
}