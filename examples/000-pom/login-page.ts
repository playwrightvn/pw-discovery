import { Page } from '@playwright/test'
import { DashboardPage } from './dashboard-page';

export class LoginPage {
    page: Page

    constructor(page: Page) {
        this.page = page;
    }

    async login1(username: string, password: string) {
        // fill thong tin
        // click button login
        
        return new DashboardPage(this.page);
    }

    async login(){
        console.log('Do login');
    }

    async cleanUp() {
        console.log('Do clean up');
    }

}