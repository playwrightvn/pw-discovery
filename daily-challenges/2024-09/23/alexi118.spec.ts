import { test, expect } from "@playwright/test";
import { randomInt } from "crypto";

/*
# Javascript
## Đề bài:
Cho một mảng các số nguyên, bạn cần tính tổng của tất cả các phần tử trong mảng đó. Trong bài tập này, bạn sẽ viết một hàm để thực hiện việc tính tổng các số trong mảng.

### Yêu cầu:
- Viết một hàm JavaScript có tên `sumArray` để tính tổng các số trong mảng.
- Nếu mảng rỗng, trả về thông báo `"Mảng rỗng"`.
- Nếu mảng chứa các giá trị không phải là số, bỏ qua những giá trị đó.
*/

const arr = [];

function sumArray(arr: Array<any>) {
  if (arr.length == 0) {
    return "Mảng rỗng";
  }
  if (arr.length > 0) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      if (isNaN(arr[i]) === true) {
        continue;
      }
      sum = sum + arr[i];
    }
    return sum;
  }
}

console.log(sumArray(arr));

/*
# Playwright
- Sử dụng fixture `request` trong Playwright để tạo mới 1 account.
- Biết API documentation: https://demoqa.com/swagger/
*/

test("Create account using API", async ({ request }) => {
  let name = `Alexi118${randomInt(1, 1000)}`;
  console.log(name);

  let response = await request.post("https://demoqa.com/Account/v1/User", {
    data: {
      userName: name,
      password: "Abc@12345",
    },
  });

  expect(response.status()).toBe(201);
  let responseBody = JSON.parse(await response.text())
  expect(responseBody.username).toBe(name)
});
