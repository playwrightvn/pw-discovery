import { test, expect } from '@playwright/test';

test('daily 10/17', async ({ page }) => {
    await page.clock.setFixedTime(new Date(`2024-10-17T01:00:00`));
    await page.goto('https://material.playwrightvn.com/017-detect-user-agent.html');
    const timeClock = page.locator(`//span[@id='localTime']`)
    await expect(timeClock).toHaveText('01:00:00 AM');
});