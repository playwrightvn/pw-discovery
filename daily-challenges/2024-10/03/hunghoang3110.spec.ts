// Playwright

import { test, expect } from '@playwright/test';
test('Web socket', async ({ page }) => {
    // Navigate to Websocket page
    await page.goto('https://echo.websocket.org/.ws');
  
    // Listen for WebSocket frame events 
    page.on('websocket', ws => {
      ws.on('framereceived', async frame => {
        // Assert the frame payload is the expected value
        await expect(async () => {
          expect(frame.payload).toBe('Hello');
        }).toPass();
      });
    });
  
    await page.getByRole('textbox').fill('Hello')
    await page.getByRole('button', { name: 'Send Message' })
      .click()
  });