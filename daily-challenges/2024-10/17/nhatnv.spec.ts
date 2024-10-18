import test, { expect } from "@playwright/test";

test('Verify time', async ({ page }) => {
  const FIXED_TIME = new Date('2024-10-17T01:00:00');
  const PAGE_URL = 'https://material.playwrightvn.com/017-detect-user-agent.html';
  const EXPECTED_TIME = '1:00:00';

  await page.clock.setFixedTime(FIXED_TIME);
  await page.goto(PAGE_URL);
  const timeLocator = page.locator('span#localTime');
  await expect(timeLocator).toContainText(EXPECTED_TIME);
})