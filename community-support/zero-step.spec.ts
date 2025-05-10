import { expect, test } from '@playwright/test'
import { ai } from '@zerostep/playwright'

test('zerostep example', async ({ page }) => {
  await page.goto('https://academy.betterbytesvn.com')

  // An object with page and test must be passed into every call
  const aiArgs = { page, test }
  const headerText = await ai('Get the latest course name inside courses section', aiArgs)
  expect(headerText).toContain('HỌC API TESTING TỪ CHƯA BIẾT GÌ');
})