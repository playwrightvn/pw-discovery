import { test, expect } from '@playwright/test';

// Javascript

function getCurrentDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  return `${day}/${month}/${year}`;
  }
  
console.log(getCurrentDate());

// Playwright

test("Mock API fruist", async ({ page }) => {
  await page.route('*/**/api/v1/fruits', async route => {
    const json = 
    [
      { name: 'Cam', id: 1 },
      { name: 'Táo', id: 2 },
      { name: 'Xoài', id: 3 },
    ];
    await route.fulfill({ json });
  });
  await page.goto('https://demo.playwright.dev/api-mocking');

  await expect(page.getByText('Cam')).toBeVisible();
  await expect(page.getByText('Táo')).toBeVisible();
  await expect(page.getByText('Xoài')).toBeVisible();
  });