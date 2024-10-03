function reverseString(str: string) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(reverseString("hautvph17241"));
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
import { test, expect, errors } from "@playwright/test";
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
  expect(await tableElements.nth(1).innerText()).toEqual(user.name);
  expect(await tableElements.nth(2).innerText()).toEqual(user.email);
  expect(await tableElements.nth(3).innerText()).toContain("Gender: male");
  expect(await tableElements.nth(3).innerText()).toContain(
    "Hobbies: " + `${user.hoobbies}`
  );
  expect(await tableElements.nth(3).innerText()).toContain(
    `Country: ${user.country}`
  );
  expect(await tableElements.nth(3).innerText()).toContain(
    `Date of Birth: ${user.birth}`
  );
  expect(await tableElements.nth(3).innerText()).toContain(
    `Biography: ${user.biography}`
  );
  expect(await tableElements.nth(3).innerText()).toContain(
    `Rating: ${user.rate}`
  );
  expect(await tableElements.nth(3).innerText()).toContain(
    `Favorite Color: ${user.color}`
  );
});
