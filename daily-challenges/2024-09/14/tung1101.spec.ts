import { test, expect, Browser, chromium, BrowserContext, Page } from '@playwright/test';



// Bài 2

test.beforeEach('go to page', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
});

const value = [
    'UserName',
    'test@gmai.com'
]
test('demo test', async ({ page }) => {

    await page.getByRole('link', { name: 'Register Page (có đủ các element' }).click();
    await page.getByRole('textbox', { name: 'username' }).fill(value[0]);
    await page.locator("//input[@id='email']").fill(value[1]);
    await page.getByRole('button', { name: 'Register' }).click();
    const name = page.locator("//table[@id='userTable']//td[text()='" + value[0] + "']");
    const email = page.locator("//table[@id='userTable']//td[text()='" + value[1] + "']");
    await expect(name).toBeVisible();
    await expect(email).toBeVisible();

    // Nếu em muốn viết dạng như bên dưới thì cú pháp như thế nào ạ
    // await expect(page.locator("//table[@id='userTable']")).toHaveText(value[1]);

    await page.close();

});