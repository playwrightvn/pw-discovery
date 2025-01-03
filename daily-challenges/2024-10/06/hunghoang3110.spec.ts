// Playwright
import { test, expect } from '@playwright/test';
test('Expect poll', async ({page}) => {
    // poll to check the value
    await expect.poll(async () => {
      await page.goto('https://material.playwrightvn.com/019-enable-form.html');
      const response = await page.locator('#inputDelay').textContent();
      console.log(response);
      return response;
    }, {
      // Custom expect message for reporting, optional.
      message: 'finish PLaywright VN\'s homework',
      // Poll for 10 seconds; defaults to 5 seconds. Pass 0 to disable timeout.
      timeout: 10000,
    }).toBe('7');
  });