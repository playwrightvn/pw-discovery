import { test, expect } from '@playwright/test';

type Product = {
    name: string;
    quantity: number;
};

test ('Go shopping for mom', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/games/001-di-cho.html');
    
    const shoppingList: Product[] = await page.$$eval(
        '#wishlist > tr',
        rows => rows.map(row => {
            const cells = row.querySelectorAll('td');
            return {
                name: cells[0].textContent || "",
                quantity: Number(cells[1].textContent) || 0
            }
        })
    )

    for(let i = 0; i < 4; i++) {
        const productNames = await page.$$eval('.product-name', elements => elements.map(el => el.textContent?.trim()));
        console.log(productNames);
        const hashTable = new Set(productNames);
        const remainingItems: { name: string; quantity: number }[] = [];
        
        for (const item of shoppingList) {
            if (hashTable.has(item.name)) {
                const plusButton = await page.locator(`#cart div:has-text("${item.name} - +")`).getByRole('button').first();
                for (let i = 0; i < item.quantity; i++) {
                    await plusButton.click();
                }
            } else {
                // sau khi check, lưu những product chưa được shopping vào mảng tạm
                remainingItems.push(item);
            }
        }
        if (remainingItems.length === 0) {
            break;
        }
        shoppingList.length = 0; 
        shoppingList.push(...remainingItems);

        await page.locator('button:has-text("Trang sau")').click();
    }

    const checkResultsButton = page.locator('button.check-result', { hasText: 'Kiểm tra kết quả' });
    await checkResultsButton.click();

    page.once('dialog', async dialog => {
        expect(dialog.message()).toBe('Bạn đã đi chợ chính xác!');
        await dialog.accept();
    })

});

