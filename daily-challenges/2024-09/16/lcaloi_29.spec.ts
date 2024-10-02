//Javascript
import { expect, test } from "@playwright/test";
import path from "path";

function reverseString(input: string): string {
    return input.split('').reverse().join('');
}
console.log(reverseString('Nhungloidoigian'));

//Playwright
test('Solution 16/09/2024', async ({ page }) => {
    const userName = 'Yah Sure';
    const email = 'bestyahsure123@gmail.com';

    await page.goto('https://material.playwrightvn.com/');
    await page.getByText('Bài học 1: Register Page (có đủ các element)', { exact: true }).click();
    expect(page.url()).toContain('01-xpath-register-page.html');
    await page.locator('#username').clear();
    await page.locator('#username').fill(userName);
    await page.locator('#email').clear();
    await page.locator('#email').fill(email);
    await page.getByRole('radio', { name: 'Male', exact: true }).click();
    await page.getByRole('checkbox', { name: 'Reading' }).click();
    await page.getByRole('option').filter({ hasText: 'music' }).click();
    await page.locator('#country').selectOption('uk')
    await page.locator('#dob').pressSequentially('2000-02-29', { delay: 200 });
    await page.locator('#profile').setInputFiles(path.join(process.cwd(), '/data/upload.png'));
    await page.locator('label.switch').click();
    await page.getByRole('button', { name: 'Register' }).click();

    await expect(page.locator('//table[@id="userTable"]//tbody')).toHaveCount(1);
    await expect(page.locator('//table[@id="userTable"]//tbody//td').nth(1)).toHaveText(userName);
    await expect(page.locator('//table[@id="userTable"]//tbody//td').nth(2)).toHaveText(email);
    const txtInfo: string = await page.locator('//table[@id="userTable"]//tbody//td').nth(3).innerText();
    const arrTxt: string[] = txtInfo.split("\n");
    arrTxt.forEach(element => {
        console.log(`${element}`)
    });
    expect(arrTxt[0]).toContain('male');
    expect(arrTxt[1]).toContain('reading');
    expect(arrTxt[2]).toContain('uk');
    expect(arrTxt[3]).toContain('2000-02-29');
    expect(arrTxt[arrTxt.length - 1]).toContain('Yes')
});


