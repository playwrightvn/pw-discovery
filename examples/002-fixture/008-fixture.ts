import { test as base } from '@playwright/test';
import { LoginPage } from '../000-pom/login-page';

const test = base.extend<{ myLoginFixture: LoginPage }>({
    myLoginFixture: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.login();

        await use(loginPage);

        loginPage.cleanUp();
    }
});

export { test }