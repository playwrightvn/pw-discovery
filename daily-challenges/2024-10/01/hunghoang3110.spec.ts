// Playwright

import { test } from '@playwright/test';

test.describe('Demo annotation', () => {
    test.beforeEach(async ({ isMobile }) => {
      test.fixme(isMobile, 'Setting page does not work in mobile yet');
    })
  
    // config test annotation then log
    test('Test 01', {
      annotation: {
        type: 'issue',
        description: 'https://github.com/playwrightvn/pw-discovery'
      },
    }, async () => {
      console.log('Hello from test 1');
    });
  
    // log then config test annotation
    test('Test 02', async ({ browser }) => {
      console.log('Hello from test 2');
      test.info().annotations.push({
        type: 'browser version',
        description: browser.version(),
      })
    })
  });
  