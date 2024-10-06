import { test, expect } from '@playwright/test';

test('Test 1', async () => {
    const slowExpect = expect.configure({ timeout: 30_000 });
    expect(10).toEqual(20);
    slowExpect(10).toEqual(20);
})

test('Test 2', async () => {
    const softExpect = expect.configure({ timeout: 10_000, soft: true });
    softExpect(10).toEqual(20);
    softExpect(10).toEqual(20);
    softExpect(10).toEqual(20);
    softExpect(10).toEqual(20);
})