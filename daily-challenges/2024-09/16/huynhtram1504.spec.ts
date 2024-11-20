import {test, expect} from "@playwright/test";
//Javascript
//Viết một hàm JavaScript có tên reverseString để đảo ngược một chuỗi đầu vào.
//Sau khi đảo ngược chuỗi, in ra kết quả.
function reverseString(stringInput){
    //Tach chuoi thanh mang ky tu
    const charArray = stringInput.split('');
    console.log("Mảng ký tự: ", charArray);

    //Đảo ngược mảng
    const reversedArray = charArray.reverse();
    console.log("Mảng đảo ngược ", reversedArray);

    //Nối mảng thành chuỗi
    const reversedString = reversedArray.join('');
    console.log("Chuỗi đảo ngược ", reversedString);
    return reversedString;

};

const originalString = "Checking";
reverseString(originalString);

//Playwright
test ("2024-09 day 16", async({page})=>{
    const data = {
        username: "huynhtram1504",
        email: "huynhtram1100@gmail.com",
        gender: "Female",
        interests: "Technology",
        country: "Australia",
        dob:"1988-05-15",
        biography: "ahihihih",
        rateUs: "10",
      };
    //Go to register page
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");

    //Fill info into the Register form
    await page.locator("//input[@id='username']").fill(data.username);
    await page.locator("//input[@id='email']").fill(data.email);
    await page.locator("//input[@id='female']").check();
    await page.locator("//input[@id='cooking']").check();
    await page.selectOption("//select[@id='interests']", data.interests);
    await page.selectOption("//select[@id='country']", data.country);
    await page.locator("//input[@id='dob']").fill(data.dob);
    await page.locator("//textarea[@id='bio']").fill(data.biography);
    await page.locator("//input[@id='rating']").fill(data.rateUs);
    await page.locator("//input[@id='newsletter']").check();
    await page.locator("//span[@class='slider round']").click();

    //Click Register button
    await page.locator("//button[text()='Register']").click();

    //Check result
    await expect(page.locator("//table[@id='userTable']/tbody/tr/td[2]")).toHaveText(data.username);
    await expect(page.locator("//table[@id='userTable']/tbody/tr/td[3]")).toHaveText(data.email);
    await expect(page.locator("//table[@id='userTable']/tbody/tr/td[4]")).toContainText("female");
    await expect(page.locator("//table[@id='userTable']/tbody/tr/td[4]")).toContainText("australia");
    await expect(page.locator("//table[@id='userTable']/tbody/tr/td[4]")).toContainText("cooking");
    await expect(page.locator("//table[@id='userTable']/tbody/tr/td[4]")).toContainText("1988-05-15");
    await expect(page.locator("//table[@id='userTable']/tbody/tr/td[4]")).toContainText("ahihihih");
    await expect(page.locator("//table[@id='userTable']/tbody/tr/td[4]")).toContainText("10");
    await expect(page.locator("//table[@id='userTable']/tbody/tr/td[4]")).toContainText("Newsletter: Yes");
    await expect(page.locator("//table[@id='userTable']/tbody/tr/td[4]")).toContainText("Enable Feature: Yes");
                     

    });
    


