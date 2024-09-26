import { expect, test } from '@playwright/test';

test.describe('Challenge day', async() => {
    const xpathSearch = '//input[@id="searchInput"]';
    const xpathTypeSearch = '//select[@id="filterCriteria"]';
    const xpathBtnSearch = '//input[@id="searchInput"]';
    const url = 'https://material.playwrightvn.com/021-import-export.html';

    await test('Search student by class', async({page})  => { 
        //Go to Page
        await page.goto(url)     

        await test.step('Search student', async () => {
            await page.selectOption(xpathTypeSearch, 'Điểm Toán');
            await page.locator(xpathSearch).fill('A4');
            await page.locator(xpathBtnSearch).click();
            //Check data search
            const result = await page.locator('text=Phạm Thị D').isVisible(); 
            expect(result).toBeTruthy();
        });

        await test.step('Delete search Note', async() => {

            const students = [
                'Nguyễn Văn A',
                'Trần Thị B',
                'Lê Văn C',
                'Phạm Thị D',
                'Hoàng Văn E',
            ];
            
            await page.locator(xpathSearch).fill(''); 
            await page.locator(xpathBtnSearch).click();
            for (const student of students){
                const checkTotalTable = await page.locator(`//td[text()=${student}]`)
                expect (checkTotalTable).toBeTruthy();
            }
        });    
    });
})
