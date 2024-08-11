import { Page } from "@playwright/test";
import { LoginPage } from "./login-page";
import { DashboardPage } from "./dashboard-page";

export class PomManager {
    page: Page;

    constructor(page: Page) {
        this.page = page
    }

    getLoginPage() {
        return new LoginPage(this.page)
    }

    getDashboardPage() {
        return new DashboardPage(this.page)
    }
}