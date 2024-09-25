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

test.describe("ththao27 - 23-09", () => {
  let userId = null;
  let token = null;
  const newUser = {
    userName: 'ThaoTran127',
    password: 'Tester@123'
  };

  test("Verify create user successfully via API", async ({ request }) => {
    const response = await request.post('https://demoqa.com/Account/v1/User', {
      data: newUser,
    });
  
    const responseBody = JSON.parse(await response.text());
    expect(response.status()).toBe(201);
    expect(responseBody.username).toBe(newUser.userName);
    
    userId = responseBody.userID;

    //Generate token
    const responseGenToken = await request.post('https://demoqa.com/Account/v1/GenerateToken', {
      data: newUser,
    });
    const responseBodyGenToken = JSON.parse(await responseGenToken.text());
    
    expect(responseGenToken.status()).toBe(200);
    
    token = responseBodyGenToken.token;

    // API Authentication
    const responseAuth = await request.post('https://demoqa.com/Account/v1/Authorized', {
      data: newUser,
    });
    expect(responseAuth.status()).toBe(200);
    });

  test.afterAll(async ({ request }) => {
    //Delete account sau khi create
    let deleteResponse = await request.delete(`https://demoqa.com/Account/v1/User/${userId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    expect(deleteResponse.status()).toBe(204);
  });
});