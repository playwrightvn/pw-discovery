import { test, expect } from '@playwright/test';

// Javascript

function sumArray(arr) {
    if (arr.length == 0) {
        return "Mảng rỗng";
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (isNaN(arr[i])) {
        continue;
      }
      sum += arr[i];
    }
    return `Tổng là: ${sum}`;
}

// **Input 1**:
console.log(sumArray([1, 2, 3, 4, 5]));
//**Input 2**:
console.log(sumArray([1, "abc", 3, 4, "xyz", 5]));
//**Input 3**:
console.log(sumArray([]));

// Playwright

test("ththao27 - 23-09", async ({ request }) => {
    let randomNumber = Math.random();

    let newUser = {
        userName: 'ThaoTran$' + randomNumber,
        password: 'Tester@123'
    };
    let response = await request.post("https://demoqa.com/Account/v1/User", {
        data: newUser,
    });

    let responseBody = JSON.parse(await response.text());
    expect(response.status()).toBe(201);
    expect(responseBody.username).toBe(newUser.userName);
  });