import { expect, Page, test } from "@playwright/test";

function getCurrentDate(): string {
    const d = new Date();
    let dd: string | number = d.getDate();
    let mm: number | string = d.getMonth() + 1;
    console.log(`mm:${mm}`)
    const yyyy: number = d.getFullYear();
    dd = (dd <= 9) ? '0' + dd : dd;
    mm = (mm === 1) ? '12' : mm <= 9 ? '0' + mm : mm
    return `Ngày hiện tại là: ${dd}/${mm}/${yyyy}`;
}

const currentDate: string = getCurrentDate();
console.log(currentDate);

//Playwright
test("Solution 24/09/2024", async ({ page }: { page: Page }) => {
    await page.route('*/**/api/v1/fruits', async route => {
        const jsonBody: { name: string, id: number }[] =
            [
                { name: 'Cam', id: 1 },
                { name: 'Táo', id: 2 },
                { name: 'Xoài', id: 3 },
            ];
        await route.fulfill({ json: jsonBody });
    });
    await page.goto('https://demo.playwright.dev/api-mocking');

    await expect(page.getByText('Cam')).toBeVisible();
    await expect(page.getByText('Táo')).toBeVisible();
    await expect(page.getByText('Xoài')).toBeVisible();
});