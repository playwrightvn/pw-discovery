import {test, expect, Locator} from '@playwright/test';

test('Check the Add item function', async ({ page }) => {
    const maxAttempts = 3;

    await test.step('Navigate to the market page', async () => {
        await page.goto('https://material.playwrightvn.com/games/001-di-cho.html');
        await expect(page).toHaveTitle(/Game Đi Chợ/);
    })

    const listMarket = await test.step('Get the list of food', async () => {
        return page.getByRole('table')
            .filter({ hasText: 'Tên món ăn' });
    })

    await test.step('Find the item and add it to the list', async () => {
        const numberOfRows = await listMarket.getByRole('row').count() - 1;
        for (let index = 1; index <= numberOfRows; index++) {
            const orderRow = listMarket.getByRole('row').nth(index);
            const nameOfFood = await getCellText(orderRow, 0);
            const quantity = await getCellText(orderRow, 1);
            if (nameOfFood === null || quantity === null) {
                throw new Error('Cell text is null');
            }
            let currentPage = await page.locator('#page-number').textContent();
            if (currentPage === null) {
                throw new Error('Cell text is null');
            }
            // First, go back to the first page
            while (Number(currentPage) > 1) {
                await page.getByRole('button', { name: 'Trang trước' })
                    .click();
                currentPage = await page.locator('#page-number').textContent();
            }
            await test.step('Add the quantity of item', async () => {
                for (let i = 1; i <= maxAttempts; i++) {
                    const isVisible = await page.locator('.product-item')
                        .filter({ has: page.getByText(nameOfFood, {exact: true}) })
                        .isVisible();
                    if (isVisible) {
                        for (let index = 0; index < Number(quantity); index++) {
                            await page.locator('.product-item')
                                .filter({ has: page.getByText(nameOfFood) })
                                .getByRole('button', { name: '+' })
                                .click();
                        }
                        break;
                    } else {
                        // Move to the next page if the item cannot be found in the current page
                        console.log(`Not found on attempt ${i + 1}`);
                        await page.getByRole('button', { name: 'Trang sau' })
                            .click();

                    }
                }
            })
        }
    })

    await test.step('Check the result', async () => {
        // Set up dialog handler first
        page.on('dialog', dialog => {
            expect(dialog.message()).toBe('Bạn đã đi chợ chính xác!');
            dialog.accept();
        });
        await page.getByRole('button', {name: 'Kiểm tra kết quả'})
            .click();
    })
});

async function getCellText(orderRow: Locator, col: number): Promise<string | null> {
    // Locate the cell in the row and get its text content
    return await orderRow.getByRole('cell').nth(col).textContent();
}