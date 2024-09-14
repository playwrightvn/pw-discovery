import test from "@playwright/test";
import { LoginPage } from "../000-pom/login-page";

test.describe("failure cases", async () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        await loginPage.login();
    })
    
    test.afterEach(async () => {
        await loginPage.cleanUp();
    })

    test('Login failure - case 1', async () => {
        console.log("Login failure - case 1");
    });

    test('Login failure - case 2', async () => {
        console.log("Login failure - case 2");
    });

    test('Login failure - case 3', async () => {
        console.log("Login failure - case 3");
    });
})