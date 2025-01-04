// Playwright

import { test, expect } from '@playwright/test';
test.describe('Configure test', () => {
    test('Test 01', async () => {
      const firstExpect = expect.configure({ timeout: 30000 });
    })
  
    test('Test 02', async () => {
      // Always do soft assertions.
      const secondExpect = expect.configure({ soft: true });
    })
  })