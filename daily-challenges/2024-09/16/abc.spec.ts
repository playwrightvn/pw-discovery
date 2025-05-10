import { test, expect } from "@playwright/test"
import path from "path"

test('thuna - 2024-09 day 16', async ({ page }) => {
  await page.context().tracing.start({ screenshots: true, snapshots: true });
  await page.goto("https://material.playwrightvn.com/")
  await page.context().tracing.stop({ path: 'record.zip'})
})
