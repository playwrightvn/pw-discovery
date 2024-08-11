import { Page } from '@playwright/test'
import { DashboardPage } from './dashboard-page';

export class LoginPage {
    page: Page

    constructor(page: Page) {
        this.page = page;
    }

    async login(username: string, password: string) {
        return new DashboardPage(this.page);
    }

}