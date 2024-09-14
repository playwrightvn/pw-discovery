import test from "@playwright/test";
import { LoginPage } from "../000-pom/login-page";

test.describe("success cases", async () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        await loginPage.login();
    })
    
    test.afterEach(async () => {
        await loginPage.cleanUp();
    })

    test('Login success - case 1', async () => {
        console.log("case 1");
    });

    test('Login success - case 2', async () => {
        console.log("case 2");
    });

    test('Login success - case 3', async () => {
        console.log("case 3");
    });
})