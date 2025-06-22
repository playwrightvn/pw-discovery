import { test, expect } from '@playwright/test';
test.describe('khanh5923_20-Buy ticket', () => {
    function convertPrice(price: string) {
        return parseInt(price.replace(/\D/g, ''));
    }
    const dataTest = {
        ticketName: 'Hỏa lực 1,2,3,4',
        ticketQuantity: 1,
    }
    test.beforeEach('login', async ({ page }) => {
        await page.goto('https://material.playwrightvn.com/01-concert-ticket/');
        await page.fill(`//input[@id='username']`, 'vn84');
        await page.fill(`//input[@id="password"]`, 'StrongPassword@123');
        await page.click(`//button[@id='login-btn']`);
    });
    test.afterEach(async ({ page }) => {
        await page.click(`//button[@id='logout-btn']`);
    });
    
    test('khanh5923_21', async ({ page }) => {
        const locatorTicket = `//div[@id='ticket-section']//h3[text()='${dataTest.ticketName}']/following-sibling`;
        await page.click(`${locatorTicket}::button`);
        await page.fill(`//input[@id='ticket-quantity']`, `1`);
        page.on('dialog', async dialog => {
            await dialog.accept();
        });
        await page.click(`//button[@class='btn-confirm']`);
        let miniCart = page.locator(`//div[@id="cart-icon"]//span[@id="cart-count"]`);
        expect(await miniCart.textContent()).toBe(`${dataTest.ticketQuantity}`);
        await miniCart.click();
        let priceProductCart = (await page.locator(`//tbody[@id="cart-items"]//td[2]`).textContent()) || '';
        await page.click(`//button[@id="back-home-btn"]`);
        let priceProductSection = (await page.locator(`${locatorTicket}::ul//span[@class="price"]`).textContent()) || '';
        expect(convertPrice(priceProductCart)).toBe(convertPrice(priceProductSection));
    });
});