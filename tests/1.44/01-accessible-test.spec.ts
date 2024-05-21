import { test, expect } from '@playwright/test';

test('Demo accessible test', async( { page }) => {
  await page.goto("http://127.0.0.1:5500/html/1.44/html/01-accessible.html");

  const locator = page.locator("//button");
  await expect(locator).toHaveAccessibleName("Submit Form")

  await expect(locator).toHaveAccessibleDescription("Clicking this button will submit your form data.")

  await expect(locator).toHaveRole("button");

})