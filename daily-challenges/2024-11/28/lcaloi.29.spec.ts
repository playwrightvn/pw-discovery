import { expect, test } from '@playwright/test';

test('solution for day 28/11/24', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await expect(page.getByText('Tài liệu học automation test')).toBeVisible();

    await page.click(`a[href='games/004-pokemon.html']`);
    await expect(page.getByText('Mở Túi Mù Pokemon!')).toBeVisible();

    let targetName = '';
    let loopCount = 0;
    await page.waitForTimeout(500);
    do {
        const text = await page.locator(`div#target-pokemon`).textContent();
        if (text) {
            targetName = text.slice(text.indexOf(': ') + 2).trim();
            break;
        }
        else if (loopCount >= 5) {
            throw new Error(`ERROR: get target pokemon failed!!! `);
        }
        loopCount++;
    } while (!targetName);

    const arrLocator = await page.locator(`div.bag`).all();

    for (const element of arrLocator) {
        await element.click();
        let pokemonName = await element.locator('div.pokemon-name').textContent();
        let resultsMsg = await page.locator(`//div[@id='result']`).textContent();
        if (pokemonName === targetName) {
            expect(resultsMsg).toEqual(`Chúc mừng! Bạn đã tìm thấy ${targetName}!`)
            break;
        } else {
            expect(resultsMsg).toEqual(`Tiếp tục tìm kiếm! Đây là ${pokemonName}`)
        }
    }
})