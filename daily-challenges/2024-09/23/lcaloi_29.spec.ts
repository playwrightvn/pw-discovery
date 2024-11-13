//Javascript
import { test, APIResponse, expect } from "@playwright/test";

function sumArray(input: any[]): string { // Regular expression
    if (input.length === 0)
        return 'Mảng rỗng';

    let sumArray = 0;
    for (let element of input) {
        if (typeof element == 'number')
            sumArray += element;
    }
    return `Tổng của mảng là: ${sumArray}`
}

const arr: any[] = [1, 2, 3, 4, '', "adb", 6, 7, 8, 9];
console.log(sumArray(arr));

const regInfo = {
    userName: 'yahsure@123',
    password: 'Asd@1234567890'
}
//Playwright
test('Solution 23/09/2024', async ({ request }) => {
    const response: APIResponse = await request.post('https://demoqa.com/Account/v1/User', {
        data: regInfo
    });

    const responseBody = JSON.parse(await response.text());
    expect(response.status()).toBe(201);
    expect(responseBody.username).toBe(regInfo.userName);

    const userId: string = responseBody['userID'];
    console.log(`userid:${userId}`);

    //Generate token
    const responseGenToken = await request.post('https://demoqa.com/Account/v1/GenerateToken', {
        data: regInfo
    });
    const responseBodyGenToken = JSON.parse(await responseGenToken.text());
    expect(responseGenToken.status()).toBe(200);

    const token: string = responseBodyGenToken['token'];
    console.log(`token:${token}`);
    // API Authentication
    const responseAuth = await request.post('https://demoqa.com/Account/v1/Authorized', {
        data: regInfo,
    });
    expect(responseAuth.status()).toBe(200);

    let deleteResponse = await request.delete(`https://demoqa.com/Account/v1/User/${userId}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
    expect(deleteResponse.status()).toBe(204);
});