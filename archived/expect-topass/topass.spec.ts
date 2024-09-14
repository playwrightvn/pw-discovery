import { test, expect } from '@playwright/test';

test('test expect to pass', async () => {
  await expect(async () => {
    console.log(`${new Date()}: i'm retrying`)
    expect(1).toEqual(2);
  }).toPass();
});