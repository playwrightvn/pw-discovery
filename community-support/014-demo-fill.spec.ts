import { test } from '@playwright/test';

test.describe("Correct way to use fill", async () => {
    test('Correct way to use fill', async ({ page }) => {
        await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");

        const input = page.getByLabel("Username");

        // ❌ Cách chưa đúng: xoá đi rồi mới fill
        await input.clear();
        await input.fill("Playwright Viet Nam");

        // ✅ Cách đúng: dùng thẳng hàm fill
        await input.fill("Playwright Viet Nam");
    });
})