import test, { expect } from "@playwright/test";

test("Challenge 14", async ({ page }) => {
    const data = getTestData();

    await test.step("Open material page, click on register page", async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page
            .locator("//a[contains(text(), 'Bài học 1: Register Page (có đủ các element)')]")
            .click();
    });

    await test.step("Fill registration information", async () => {
        await page.locator("#username").fill(data.username);
        await page.locator("#email").fill(data.email);
        await page.getByRole("button", { name: "Register" }).click();
        await expect(page.locator("//*[@id='userTable']/tbody/tr")).toHaveCount(1);
        await expect(page.getByRole("row", { name: data.username })).toBeVisible();
        await expect(page.getByRole("row", { name: data.email })).toBeVisible();
    });
});

function getTestData() {
    const username = "playwrightvn";
    const email = "playwrightvn@gmail.com";
    return {
        username: `${username}-${Math.random()}`,
        email: email
    }
}