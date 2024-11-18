import {test, expect} from "@playwright/test";

test('solution 18/10/2024', async ({page}) => {
    const TIME_FORWARD: number = 5 * 60 * 1000 - 1000; //4p59s

    await page.clock.install();
    page.on('dialog', async (dialog) => {
        expect(dialog.message()).toContain('Bạn đã ở lại trang web hơn 5 phút!');
        await dialog.accept();
    });

    await page.goto('https://material.playwrightvn.com/026-count-time-in-page.html');
    await page.clock.fastForward(TIME_FORWARD);
    await page.waitForTimeout(2000);
})
