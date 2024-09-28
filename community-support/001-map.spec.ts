import { test } from '@playwright/test';

test('Get schedule data', async ({ request }) => {
    const result = await request.get('https://d0a70b357ce64eeda19b006e769e1251.api.mockbin.io/');
    const json = await result.json();

    const lichKham = json?.dulieu?.lichkham;
    const list = [];

    for (const [lichKhamKey, lickKhamItem] of Object.entries(lichKham)) {
        for (const [buoiKey, item] of Object.entries(lickKhamItem.buoi)) {
            list.push(item);
        }
    }

    console.log(list);
})