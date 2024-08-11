import test from "@playwright/test";
import { PomManager } from "../000-pom/pom-manager";

test('POM manager example', async ({ page }) => {
    const manager = new PomManager(page);
    const loginPage = manager.getLoginPage();
    const dashboardPage = manager.getDashboardPage();

    await loginPage.login("phong", "tmp_pass");
    await dashboardPage.navigateToMenu("Post")
});
