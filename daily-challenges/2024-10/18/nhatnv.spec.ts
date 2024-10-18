import test, { expect } from "@playwright/test";

test('Verify alert message', async ({ page }) => {
  const PAGE_URL = 'https://material.playwrightvn.com/026-count-time-in-page.html';
  const WAIT_FOR_VERIFY = 1000;
  const TIME_FORWARD = 5 * 60 * 1000 - WAIT_FOR_VERIFY; // 4 mins 59 secs
  await page.clock.install();

  const verifyAlert = async (timeWait) => {
    page.on('dialog', async (dialog) => {
      await expect(dialog.message()).toContain('Bạn đã ở lại trang web hơn 5 phút!');
      await dialog.accept();
    });
    await page.waitForTimeout(timeWait);
  }

  await page.goto(PAGE_URL);
  await page.clock.fastForward(TIME_FORWARD);
  await verifyAlert(WAIT_FOR_VERIFY)
})