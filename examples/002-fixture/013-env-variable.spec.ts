import { test } from '@playwright/test';

test('Get environment variable', () => {
    console.log(process.env.KEY);
    console.log(process.env.KEY1);
    console.log(process.env.KEY2);
    console.log(process.env.KEY3);
})