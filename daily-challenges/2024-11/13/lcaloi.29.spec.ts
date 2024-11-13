import { test, expect } from '@playwright/test';
const txtPlayerName: string = 'yahSure';

test('solution 13/11/24', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/games/002-pikachu.html');
    await page.fill('#playerName', txtPlayerName);
    await page.click('//button[@onclick="startGame()"]');
    await page.locator('#playerInfo').waitFor({ state: 'visible', timeout: 5000 });
    await expect(page.locator('#playerInfo')).toHaveText(`Người chơi: ${txtPlayerName}`);

    let size = await page.locator('//div[@class="outer"]').count();
    let setOuter: Set<string> = new Set();
    for (let i = 1; i <= size; i++) {
        let textOuter = await page.locator(`//div[@class="outer"][${i}]`).textContent();
        if (textOuter) {
            setOuter.add(textOuter);
        }
    }

    page.on('dialog', dialog => {
        expect(dialog.message()).toEqual('Bạn đã thắng cuộc!');
        dialog.accept();
    });

    const arr: string[] = [...setOuter];
    for (const value of arr) {
        let outer1 = page.locator(`//div[@id='grid']/div[text()="${value}"][1]`);
        let outer2 = page.locator(`//div[@id='grid']/div[text()="${value}"][2]`);
        await outer1.click();
        await outer2.click();
        await expect.soft(outer1).toBeHidden();
        await expect.soft(outer2).toBeHidden();
        expect(test.info().errors).toHaveLength(0);
    }
    await page.close();
});