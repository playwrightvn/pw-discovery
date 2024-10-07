import { test, expect } from "@playwright/test";

function reverseString(s: string): void {
  console.log(s.split("").reverse().join(""));
}

test("Challenge 16", async ({ page }) => {
  const data = {
    username: "testing123",
    email: "testing123@gmail.com",
    gender: "Female",
    interests: "Technology",
    country: "Australia",
    biography: "ahihihih",
    rateUs: "10",
  };

  await test.step("Go to web", async () => {
    await page.goto("https://material.playwrightvn.com/");
    await page
      .locator(
        "//a[contains(text(), 'Bài học 1: Register Page (có đủ các element)')]"
      )
      .click();
  });

  await test.step("Fill and submit form", async () => {
    await page.locator("#username").fill(data.username);
    await page.locator("#email").fill(data.email);
    await page.getByLabel(data.gender).check();
    await page.locator("#interests").selectOption(data.interests);
    await page.locator("#traveling").check();
    await page.getByLabel("Country").selectOption(data.country);
    await page.getByLabel("Biography").fill(data.biography);
    await page.getByLabel("Rate Us").fill(data.rateUs);
    await page.locator("#newsletter").check();
    await page.locator("[class='slider round']").click();

    await page.getByRole("button", { name: "Register" }).click();
  });

  await test.step("Verify info is correct", async () => {
    await expect(page.locator("//*[@id='userTable']/tbody/tr")).toHaveCount(1);
    await expect(page.getByRole("row", { name: data.username })).toBeVisible();
    await expect(page.getByRole("row", { name: data.email })).toBeVisible();
    await expect(
      page.getByRole("row", { name: `Gender: ${data.gender}` })
    ).toBeVisible();
    await expect(
      page.getByRole("row", { name: `Hobbies: traveling` })
    ).toBeVisible();
    await expect(
      page.getByRole("row", { name: `Biography: ${data.biography}` })
    ).toBeVisible();
    await expect(
      page.getByRole("row", { name: `Rating: ${data.rateUs}` })
    ).toBeVisible();
    await expect(
      page.getByRole("row", { name: `Newsletter: Yes` })
    ).toBeVisible();
    await expect(
      page.getByRole("row", { name: `Enable Feature: Yes` })
    ).toBeVisible();
  });
});
