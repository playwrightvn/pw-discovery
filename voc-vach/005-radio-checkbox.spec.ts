import { test } from '@playwright/test';

test('Voc vach 05: Radio and checkbox', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
    
    const radioMale = page.locator("#male");
    const radioFemale = page.locator("#female");

    const cbReading = page.locator("#reading");
    const cbTraveling = page.locator("#traveling");
    const cbCooking = page.locator("#cooking");

    // Check
    await radioMale.check();
    await cbReading.check();

    // Uncheck
    await radioFemale.check();
    await cbReading.uncheck();

    // Set checked
    await cbTraveling.setChecked(true);
    await cbTraveling.setChecked(false, {
        // force: true,
        // timeout: 10_000,
        // trial: true,
    });

    // option: force

    // option: timeout

    // option: trial

});