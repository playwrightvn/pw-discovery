import { test, expect } from "@playwright/test"

/**
 * Yêu cầu:
 * Viết một hàm JavaScript có tên reverseString để đảo ngược một chuỗi đầu vào.
 * Sau khi đảo ngược chuỗi, in ra kết quả.
 */
async function reverseString(str: string): Promise<string> {
  return [...str].reverse().join("")
}

// Usage:
reverseString("thgirwyalphcavcov").then((result) => console.log(result))

/**
 * Viết code automation cho test case sau (có thể sử copy code từ bài trước để code nhanh hơn)
 * Đi tới trang: https://material.playwrightvn.com/
 * Click vào: Bài học 1: Register Page (có đủ các element)
 * Điền vào đầy đủ các thông tin của user
 * Kiểm tra kết quả đúng như thông tin đã điền.
 */
test("thuna - 2024-09 day 16", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/")
  await page.getByRole("link", { name: "Bài học 1: Register Page" }).click()

  const userName = "thuna"
  const email = "thuna064@gmail.com"
  const dateOfBirth = "1999-06-04"

  await page.locator("#username").fill(userName)
  await page.locator("#email").fill(email)
  await page.locator("#male").click()
  await page.locator("#reading").click()
  await page.locator("#interests").selectOption("art")
  await page.locator("#country").selectOption("uk")
  await page.locator("#dob").fill(dateOfBirth)
  await page.getByRole("button", { name: "Register" }).click()

  await expect(page.locator("td:nth-child(2)")).toHaveText(userName)
  await expect(page.locator("td:nth-child(3)")).toHaveText(email)
  await expect(page.locator("td:nth-child(4)")).toContainText([
    "Gender: male",
    "Hobbies: reading",
    "Country: uk",
    `Date of Birth: ${dateOfBirth}`,
  ])
})
