/*
# Javascript
## Đề bài:
Cho một mảng các số nguyên, bạn cần tính tổng của tất cả các phần tử trong mảng đó. Trong bài tập này, bạn sẽ viết một hàm để thực hiện việc tính tổng các số trong mảng.

### Yêu cầu:
- Viết một hàm JavaScript có tên `sumArray` để tính tổng các số trong mảng.
- Nếu mảng rỗng, trả về thông báo `"Mảng rỗng"`.
- Nếu mảng chứa các giá trị không phải là số, bỏ qua những giá trị đó.
*/

function sumArray(arr) {
    let sum = 0
    if (arr.length === 0) {
        console.log(`"Mảng rỗng"`)
    }
    else{
        const numbers = arr.filter(item => typeof item === 'number')
        for (let i = 0; i < numbers.length; i++) {
            sum = sum + numbers[i]
        }
    }
    return sum
}

let arr = [1, 3, 4, 'a', 9, 't', 0, 8, 12, 'i']
console.log(sumArray(arr))

/*
# Playwright
- Sử dụng fixture `request` trong Playwright để tạo mới 1 account.
- Biết API documentation: https://demoqa.com/swagger/
*/

import { test, expect } from '@playwright/test'

test('min240923', async ( {request} ) => {
    const newAccountData = {
        userName: 'playwright',
        password: 'pwd1234@',
    };

    let response = await request.post("https://demoqa.com/Account/v1/User", {
        data: newAccountData,
    });

    const bodyJson = await response.json()
    console.log(bodyJson)

    expect(response.status()).toEqual(201)
    expect(bodyJson.username).toEqual(newAccountData.userName)
});


