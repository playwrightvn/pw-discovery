import { test, expect } from '@playwright/test';

// Support: https://www.facebook.com/groups/playwright.automation.test/posts/1581930092374310/?comment_id=1581931179040868&reply_comment_id=1581932632374056
// Just a temp solution
test('traveloka', async ( { page }) => {
  await page.goto('https://www.traveloka.com/en-vn');
  await page.waitForTimeout(8000);
  await page.getByTestId('airport-input-destination').click();
  await page.locator("//div[@class='css-1dbjc4n']").nth(7).click();
});