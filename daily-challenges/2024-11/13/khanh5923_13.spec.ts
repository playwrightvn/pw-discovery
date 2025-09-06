import {test, expect} from '@playwright/test';

test.setTimeout(60000);
test('pikachu', async ({page}) => {
    await page.goto('https://material.playwrightvn.com/games/002-pikachu.html');
    await page.fill(`//input[@id='playerName']`,`khanh5923_13`);
    await page.click(`//button[@onclick='startGame()']`);
    const maxNumberOfPikachu = await page.locator(`//div[@id='grid']//div[@class="outer"]`).count();
    page.on('dialog', async (dialog) => {
        expect(dialog.message()).toBe('Bạn đã thắng cuộc!');
        await dialog.accept();
    })
    for (let i = 1; i <= maxNumberOfPikachu/2; i++) {
        const firstPikachu = page.locator(`//div[@id='grid']//div[@class="outer"][1]`);
        const textPikachuSelected = await firstPikachu.textContent();
        await firstPikachu.click();
        await page.click(`//div[@id='grid']//div[@class="outer" and text()='${textPikachuSelected}']`);
        await page.waitForTimeout(1000);
    }
});