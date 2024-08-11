import { Page } from '@playwright/test'

export class DashboardPage {
    page: Page

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToMenu(menuName: string) {
    }
}