//javascript
function sumArray(array){
    let sum = 0
    if(array.length == 0){
        console.log("Mang rong")
    }
    else{
        array.forEach((value) => {
            if(typeof(value) === "number"){
                sum+=value
            }
        });
        console.log("Tong la: ", sum)
    }
}
sumArray([1, 2, 3, 4, 5])
sumArray([1, "abc", 3, 4, "xyz", 5])
sumArray([])

//playwright
import {test, expect} from '@playwright/test'
test('daily23', async ({ request }) => {    
    const newAccount = {
        "userName": "khanhdeptrai",
        "password": "Khanh@050916",
    }
    // Gửi yêu cầu POST để tạo tài khoản mới
    const response = await request.post('https://demoqa.com/Account/v1/User', {
        data: newAccount,
    });
    expect(response.status()).toBe(201)
    const resData = await response.json(); // Lấy dữ liệu phản hồi JSON
    expect(resData.username).toBe(newAccount.userName); // Kiểm tra username trong phản hồi
    console.log(resData)
})

