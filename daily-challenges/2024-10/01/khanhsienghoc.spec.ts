import {test} from '@playwright/test';
import { beforeEach } from 'node:test';

test.describe('Demo annotation', () => {
    test.beforeEach(async ({ isMobile })  => {
        test.fixme(isMobile, "Cannot run this test on mobile application")
    });
    test('Test 01',  {
        annotation: [
            { type: 'demo', description: 'https://github.com/playwrightvn/pw-discovery' },
        ],
    }, async ({ }) => {
        console.log("Hello from test 1");

    })
    test('Test 02', async ({ browser }) => {
    test.info().annotations.push({
        type: 'browser version', description: browser.version(),
        });
        console.log("Hello from test 2")
    })
})
