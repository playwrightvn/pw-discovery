import { test, expect } from '@playwright/test';

const playerName: string = 'ththao27';
test('the solution 13-11-2024', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/games/002-pikachu.html');
    await page.fill('#playerName', playerName);
    await page.click('//button[@onclick="startGame()"]');
    await expect(page.locator('#playerInfo')).toHaveText(`Người chơi: ${playerName}`);

    const texts = await page.locator('//div[@class="outer"]').allInnerTexts();
    let setOuter: Set<string> = new Set(texts);

    page.on('dialog', dialog => {
        expect(dialog.message()).toEqual('Bạn đã thắng cuộc!');
        dialog.accept();
    });

    for (let value of setOuter) {
        let item = page.locator(`(//div[@class='outer' and text()=${value}])`).first();
        await item.click();
        await item.click();
        await expect.soft(item).toBeHidden();
    }
    await page.close();
});