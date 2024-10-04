import { test, expect } from "@playwright/test";

const user = {
  name: "Hautvph17241",
  email: "hautvph17241@gmail.com",
  gender: "Male",
  hoobbies: "cooking",
  interests: "Technology",
  country: "canada",
  birth: "2002-04-07",
  biography: "con Rồng, cháu Tiên",
  rate: 6,
  color: "#ff0000",
};

test("Day 02 16/09/2024", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/");
  await page.waitForLoadState("networkidle");
  await page.getByRole("link", { name: "Register Page" }).click();
  await page.locator("#username").fill(user.name);
  await page.locator("#email").fill(user.email);
  await page
    .getByRole("radio", { name: `${user.gender}`, exact: true })
    .click();
  await page.getByRole("checkbox", { name: `${user.hoobbies}` }).click();
  await page.getByRole("option", { name: `${user.interests}` }).click();
  await page.getByLabel("Country:").selectOption(`${user.country}`);
  await page.getByLabel("Date of Birth:").fill(`${user.birth}`);
  await page.getByLabel("Biography:").fill(`${user.biography}`);
  await page.locator("#favcolor").fill(`${user.color}`);

  await page.getByRole("button", { name: "Register" }).click();

  const tableElements = page.locator('//table[@id="userTable"]/tbody/tr/td');
  await expect(tableElements).toBeVisible();
  await expect(tableElements.nth(1)).toHaveText(user.name);
  await expect(tableElements.nth(2)).toHaveText(user.email);
  await expect(tableElements.nth(3)).toHaveText("Gender: male");
  await expect(tableElements.nth(3)).toHaveText(
    "Hobbies: " + `${user.hoobbies}`
  );
  await expect(tableElements.nth(3)).toHaveText(`Country: ${user.country}`);
  await expect(tableElements.nth(3)).toHaveText(`Date of Birth: ${user.birth}`);
  await expect(tableElements.nth(3)).toHaveText(`Biography: ${user.biography}`);
  await expect(tableElements.nth(3)).toHaveText(`Rating: ${user.rate}`);
  await expect(tableElements.nth(3)).toHaveText(
    `Favorite Color: ${user.color}`
  );
});

function reverseString(str: string) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

console.log(reverseString("hautvph17241"));
