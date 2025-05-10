import { test } from '@playwright/test';

test('Voc vach 03: Mouse actions', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/018-mouse.html');
    const element = page.locator("#clickArea");

    // Click: click, right click, middle click
    await element.click();
    await element.click({ button: "middle" })

    // Double click
    await element.dblclick();

    // Multiple click
    await element.click({ clickCount: 20 });

    // Delay: thời gian chờ giữa sự kiện mousedown và mouseup, mặc định là 0
    await element.click({ delay: 2_000 });

    // Force
    await element.click({ force: true });

    // Click + press key
    await element.click({ modifiers: ["Shift", "Alt"] });

    // Click theo toạ độ
    await element.click({ position: { x: 0, y: 0 }});

    // timeout
    await element.click({ timeout: 3_000 });

    // trial: chờ accessibility chạy xong, nhưng ko click.
    await element.click({ trial: true });

    const faqElement = page.locator(".faq");
    await faqElement.click();
});