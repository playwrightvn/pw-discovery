import { test, expect, Page, TestInfo } from '@playwright/test';
import { AxeBuilder } from '@axe-core/playwright';
import { createHtmlReport } from 'axe-html-reporter';
import * as fs from 'fs';
import * as path from 'path';

export async function runAccessibilityCheck(page: Page, testInfo: TestInfo, description: string): Promise<void> {
    // Get axeBuilder from the fixture
    const axeResults = await new AxeBuilder({ page })
        .withTags(['wcag22aa', 'wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

    // Generate HTML report if violations exist
    if (axeResults.violations.length > 0) {
        const reportDir = 'test-results/axe-core-reports'
        const reportPath = path.join(reportDir, `${description}-accessibility-report.html`);

        createHtmlReport({
            results: axeResults,
            options: {
                outputDir: reportDir,
                reportFileName: `${description}-accessibility-report.html`,
            },
        });

        // Ensure the file is created before attaching
        if (fs.existsSync(reportPath)) {
            await testInfo.attach(`${description}-accessibility-report`, {
                path: reportPath,
                contentType: 'text/html',
            });
        } else {
            console.error(`Failed to generate accessibility report at: ${reportPath}`);
        }

        expect.soft(axeResults.violations, `Accessibility violations found in ${description} page`).toEqual([]);
    }
}

test('Accessibility testing', async ({ page }, testInfo) => {
    await page.goto("https://material.playwrightvn.com");
    await runAccessibilityCheck(page, testInfo, 'login-page');
});