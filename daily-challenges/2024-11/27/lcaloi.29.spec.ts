import { expect, Locator, test } from '@playwright/test';

test('solution for day 27/11/24', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await expect(page.getByText('Tài liệu học automation test')).toBeVisible();
    await page.click(`a[href='games/003-vi-tinh-tu.html']`);
    let targetName = '';
    let loopCount = 0;
    do {
        const text = await page.locator(`span#target-name`).textContent();
        if (text) {
            targetName = text;
            break;
        }
        else if (loopCount >= 3) {
            throw new Error(`ERROR: get target name failed!!! `);
        }
        loopCount++;
    } while (!targetName);
    const mysteryBoxTarget: Locator = page.locator(`//*[@class='constellation-name' and text()='${targetName}']`);
    page.on('dialog', async dialog => {
        expect(dialog.message()).toEqual('Chúc mừng! Bạn đã tìm được vì tinh tú đúng!')
        await dialog.accept();
    });
    await mysteryBoxTarget.click();
})