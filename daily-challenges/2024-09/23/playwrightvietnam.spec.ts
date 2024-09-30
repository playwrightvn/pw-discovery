// Javascript

function sumArray(arr: any[]) {
    const onlyNumbers: number[] = [];

    arr.forEach(num => {
        if (typeof num === 'number') {
            onlyNumbers.push(num);
        }
    });

    if (onlyNumbers.length === 0) {
        return 'Mảng rỗng';
    }

    return onlyNumbers.reduce((acc, num) => acc + num, 0);
}

console.log(sumArray([]));
console.log(sumArray([1, 2, 3]));
console.log(sumArray([1, '2', 'ABC XYZ', 1000]));

// Playwright
import { expect, test } from "@playwright/test";

test("2024-09-23 challenge", async ({ request }) => {
    const username = 'teo7';
    const response = await request.post('https://demoqa.com/Account/v1/User', {
        data: {
            userName: username,
            password: '123@ABC@abc' 
        }
    });

    const bodyJson = await response.json();
    console.log(bodyJson);

    expect(response.status()).toEqual(201);
    expect(bodyJson.username).toEqual(username);
})