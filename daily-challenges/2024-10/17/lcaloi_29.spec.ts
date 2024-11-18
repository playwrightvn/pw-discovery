import {test, Locator, expect} from "@playwright/test";

test('solution 17/10/2024', async ({page}) => {
    const FIX_TIME:Date = new Date('2024-10-17T01:00:00');
    const PAGE_URL:string = 'https://material.playwrightvn.com/017-detect-user-agent.html';
    const EXPECTED_TIME:string = '1:00:00';
    const TIME_LOCATOR:Locator = page.locator('span#localTime');

    await page.clock.setFixedTime(FIX_TIME);
    await page.goto(PAGE_URL);
    await expect(TIME_LOCATOR).toContainText(EXPECTED_TIME);
})
