import {test, expect} from '@playwright/test';

test.describe('Solution 04/10/2024', () => {
    test('Test 01', async () => {
        expect.configure({timeout: 30 * 1000})
    });

    test('Test 02', async () => {
        expect.configure({timeout: 10 * 1000, soft: true})
    });
})