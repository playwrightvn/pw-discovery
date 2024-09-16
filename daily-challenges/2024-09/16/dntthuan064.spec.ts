import { test, expect } from "@playwright/test"
import path from "path"

/**
 * Yêu cầu:
 * Viết một hàm JavaScript có tên reverseString để đảo ngược một chuỗi đầu vào.
 * Sau khi đảo ngược chuỗi, in ra kết quả.
 */
async function reverseString(str: string): Promise<string> {
  return [...str].reverse().join('')
}

// Usage:
reverseString("thgirwyalphcavcov").then(result => console.log(result))

/**
 * Viết code automation cho test case sau (có thể sử copy code từ bài trước để code nhanh hơn)
 * Đi tới trang: https://material.playwrightvn.com/
 * Click vào: Bài học 1: Register Page (có đủ các element)
 * Điền vào đầy đủ các thông tin của user
 * Kiểm tra kết quả đúng như thông tin đã điền.
 */
test('thuna - 2024-09 day 16', async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/")
  await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click()

  const testData = {
    userName: "thuna",
    email: "thuna064@gmail.com",
    interests: 'art',
    country: 'uk',
    dateOfBirth: '1999-06-04',
    bio: await reverseString("thgirwyalphcavcov"),
    rating: '8',
    favColor: '#ff1234',
  }

  await page.locator('#username').fill(testData.userName)
  await page.locator('#email').fill(testData.email)
  await page.locator('#male').click()
  await page.locator('#reading').click()
  await page.locator('#interests').selectOption(testData.interests)
  await page.locator('#country').selectOption(testData.country)
  await page.locator('#dob').fill(testData.dateOfBirth)
  await page.locator('#profile').setInputFiles(path.join(__filename, '../../images/001-2024-09-01.gif'))
  await page.locator('#bio').fill(testData.bio)
  await page.locator('#rating').fill(testData.rating)
  await page.locator('#favcolor').fill(testData.favColor)
  await page.locator('#newsletter').check()
  await page.locator('[class="slider round"]').click()

  await page.getByRole("button", { name: "Register" }).click()

  await expect(page.locator('td:nth-child(2)')).toHaveText(testData.userName)
  await expect(page.locator('td:nth-child(3)')).toHaveText(testData.email)
  await expect(page.locator('td:nth-child(4)')).toContainText('Gender: male')
  await expect(page.locator('td:nth-child(4)')).toContainText('Hobbies: reading')
  await expect(page.locator('td:nth-child(4)')).toContainText(`Country: ${testData.country}`)
  await expect(page.locator('td:nth-child(4)')).toContainText(`Date of Birth: ${testData.dateOfBirth}`)
  await expect(page.locator('td:nth-child(4)')).toContainText(`vocvachplaywright`)
  await expect(page.locator('td:nth-child(4)')).toContainText(`Rating: ${testData.rating}`)
  await expect(page.locator('td:nth-child(4)')).toContainText(`Favorite Color: ${testData.favColor}`)
  await expect(page.locator('td:nth-child(4)')).toContainText(`Newsletter: Yes`)
  await expect(page.locator('td:nth-child(4)')).toContainText(`Enable Feature: Yes`)
})
