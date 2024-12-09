import { expect, test } from '@playwright/test';


const MESSAGE = {
    stop(input) { return `Chúc mừng! Bạn đã tìm thấy ${input}!` },
    continue(input) { return `Tiếp tục tìm kiếm! Đây là ${input}` },
}
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
        if (pokemonName === targetName) {
            await expect(page.locator(`//div[@id='result']`)).toHaveText(MESSAGE.stop(targetName))
            break;
        } else {
            await expect(page.locator(`//div[@id='result']`)).toHaveText(MESSAGE.continue(pokemonName));
        }
    }
})