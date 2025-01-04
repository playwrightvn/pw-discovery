import { test } from '@playwright/test';

test('t3 @test_order', async ({ }) => {
    console.log('t3');
});

test('t1 @test_order', async ({ }) => {
    console.log('t1');
});

test('t2 @test_order', async ({ }) => {
    console.log('t2');
});
