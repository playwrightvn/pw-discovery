import { test, expect } from '@playwright/test';

test('WYSIWYG Editor - Add formatted text', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/034-WYSIWYG.html');

  const editor = page.locator('#editor');
  
  await test.step('Remove all text', async () => {
    await editor.click();
    const isMac = process.platform === 'darwin';
    const modifier = isMac ? 'Meta' : 'Control';
    
    await page.keyboard.down(modifier);
    await page.keyboard.press('a');
    await page.keyboard.up(modifier);
    await page.keyboard.press('Backspace');
  });
  
  await test.step('Enter text', async () => {
    await editor.pressSequentially('Hello Playwright Viet Nam');
    await expect(editor).toContainText('Hello Playwright Viet Nam');
  });
  
  await test.step('Enter text with formatted content', async () => {
    await page.keyboard.press('Enter');
    await page.keyboard.press('Enter');
    
    const isMac = process.platform === 'darwin';
    const modifier = isMac ? 'Meta' : 'Control';
    
    await page.keyboard.down(modifier);
    await page.keyboard.press('b');
    await page.keyboard.up(modifier);
    
    await page.keyboard.down(modifier);
    await page.keyboard.press('i');
    await page.keyboard.up(modifier);
    
    await page.waitForTimeout(100); // Small wait to ensure formatting is applied
    
    await editor.pressSequentially('Forum automation testing on messenger: https://voz.ee/s/BBA-FB-messenger-automation-group');
    
    await expect(editor).toContainText('Forum automation testing on messenger');
    
    const preview = page.locator('#preview');
    await expect(preview).toContainText('Hello Playwright Viet Nam');
    // Check that the formatted text exists in preview (with bold and italic)
    await expect(preview).toContainText('Forum automation testing on messenger');
  });
  
  await test.step('Format the link', async () => {
    const isMac = process.platform === 'darwin';
    const modifier = isMac ? 'Meta' : 'Control';
    
    // First, we need to select the URL text
    await editor.click();
    
    // Move to the end of the text
    await page.keyboard.down(modifier);
    await page.keyboard.press('End');
    await page.keyboard.up(modifier);
    
    // Select the URL by holding Shift and using arrow keys to select backwards
    // The URL is: https://voz.ee/s/BBA-FB-messenger-automation-group
    await page.keyboard.down('Shift');
    for (let i = 0; i < 'https://voz.ee/s/BBA-FB-messenger-automation-group'.length; i++) {
      await page.keyboard.press('ArrowLeft');
    }
    await page.keyboard.up('Shift');
    
    // First, replace the selected URL text with "Messenger Group"
    await page.keyboard.type('Messenger Group');
    
    // Now select the text we just typed
    await page.keyboard.down('Shift');
    for (let i = 0; i < 'Messenger Group'.length; i++) {
      await page.keyboard.press('ArrowLeft');
    }
    await page.keyboard.up('Shift');
    
    // Handle the prompt dialog that will appear when clicking the link button
    page.once('dialog', async dialog => {
      await dialog.accept('https://voz.ee/s/BBA-FB-messenger-automation-group');
    });
    
    // Click the link button in the toolbar (🔗)
    await page.locator('.toolbar button:has-text("🔗")').click();
    
    // Verify the link was created in the preview
    const preview = page.locator('#preview');
    await expect(preview.locator('a')).toContainText('Messenger Group');
    await expect(preview.locator('a')).toHaveAttribute('href', 'https://voz.ee/s/BBA-FB-messenger-automation-group');
  });
});