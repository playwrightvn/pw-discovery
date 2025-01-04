import { test, expect } from "@playwright/test";

test.describe("daily 04", () => {
  test("Test 1", async () => {
    const slowExpect = expect.configure({ timeout: 30000 });
    slowExpect(10).toEqual(10);
    slowExpect(10).toEqual(0);
  });
  
  test("Test 2", async () => {
    const assertionExpect = expect.configure({ timeout: 10000, soft: true });
    assertionExpect(10).toEqual(14);
    assertionExpect(10).toEqual(10);
    assertionExpect(10).toEqual(17);
    assertionExpect(10).toEqual(19);
  });
});
