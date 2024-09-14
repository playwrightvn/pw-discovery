import { test, expect } from '@playwright/test';

test('Test cookie', async( { page, context }) => {
  await page.goto("http://127.0.0.1:5500/html/1.44/html/api-v1/a.html");

  // context.clearCookies();
  context.clearCookies({ path: 'api-v1', domain: '' });

  await page.waitForTimeout(1000);
  await page.waitForTimeout(10_00);

})