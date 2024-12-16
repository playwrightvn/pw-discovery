// Javascript
function myFunction(total, value) {
    return total + value;
}

function sumArray(array) {
    let total = 0;

    if (!Array.isArray(array) || array.length === 0) {
        return 'Empty array';
    }
    if (array.every(num => typeof num === 'number')) {
        array.forEach(num => {
            total += num;
        });
    }

    const filterArray = array.filter(num => typeof num === 'number')

    return filterArray.reduce((total, value) => total + value);
}

// Playwright
import { test, expect } from '@playwright/test'

let apiContext;
const USERNAME = 'carterNguyen',
    PASSWORD = 'passWord@01';

test.beforeAll(async ({ playwright }) => {
    apiContext = await playwright.request.newContext({
        // All requests we send go to this API endpoint.
        baseURL: 'https://demoqa.com',
        extraHTTPHeaders: {
            // We set this header per GitHub guidelines.
            'Accept': 'application/json',
        },
    });
});

test.afterAll(async ({ }) => {
    // Dispose all responses.
    await apiContext.dispose();
});

test('should create new user', async ({ }) => {
    const newUser = await apiContext.post('/Account/v1/User', {
        data: {
            userName: USERNAME,
            password: PASSWORD
        }
    });
    expect(newUser.ok()).toBeTruthy();
});