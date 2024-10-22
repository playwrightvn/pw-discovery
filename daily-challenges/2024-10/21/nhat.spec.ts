import { test as base, expect, Locator, Page } from "@playwright/test";

class Utils {
  static getNumberFromString (str: string): number {
    return Number(str.replace(/\D/g, ''));
  };
}

abstract class Base {
  protected _page: Page;
  protected _url: string;
  constructor(page: Page, url: string) {
    this._page = page;
    this._url = url;
  }

  setPage (page: Page): void{
    this._page = page;
  }

  async gotoAsync (): Promise<void> {
    await this._page.goto(this._url);
  }

  async closeAsync (): Promise<void> {
    await this._page.close();
  }
}

class LoginPage extends Base {
  private readonly _usernameInputLocator: string = 'input#username';
  private readonly _passwordInputLocator: string = 'input#password';
  private readonly _loginBtnLocator: string = 'button#login-btn';
  private readonly _logoutBtnLocator: string = 'button#logout-btn';

  async loginAsync (username: string, password: string): Promise<void> {
    await this._page.locator(this._usernameInputLocator).fill(username);
    await this._page.locator(this._passwordInputLocator).fill(password);
    await this._page.locator(this._loginBtnLocator).click();
  }

  async verifyLoginSuccessfullyAsync (): Promise<void> {
    await this._page.waitForSelector(this._logoutBtnLocator, { state: 'visible' });
  }
}

class HomePage extends Base {
  private readonly _cartQuantityLocator: string = '#cart-count';
  private readonly _ticketQuantityInputLocator: string = 'input#ticket-quantity';
  private readonly _logoutBtnLocator: string = '#logout-btn';
  private readonly _submitBuyTicketBtnLocator: string = 'button.btn-confirm';

  async buyTicketAsync (ticketName: string, quantity: number): Promise<string> {
    const categoryLocator: Locator = this._page.locator(`.ticket-category:has([data-ticket-name="${ticketName}"])`);
    const categoryPrice: string = await categoryLocator.locator('.price').innerText();
    await categoryLocator.locator('button.btn-book-ticket').click();

    await this._page.locator(this._ticketQuantityInputLocator).fill(quantity.toString());
    await this._page.locator(this._submitBuyTicketBtnLocator).click();

    return categoryPrice;
  }

  async verifyCartQuantityAsync (quantity: number): Promise<void> {
    const cartQuantity: string = await this._page.locator(this._cartQuantityLocator).innerText();
    expect(cartQuantity).toBe(quantity.toString());
  }

  async logoutAsync (): Promise<void> {
    await this._page.locator(this._logoutBtnLocator).click();
  }
}

class CartPage extends Base {
  private readonly _totalPriceLocator: string = '#total-price';

  async verifyTotalPriceAsync (expectedPrice: string): Promise<void> {
    const totalPrice = await this._page.locator(this._totalPriceLocator).innerText();
    expect(Utils.getNumberFromString(totalPrice)).toBe(Utils.getNumberFromString(expectedPrice));
  }
}

type MixFixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
  cartPage: CartPage;
}

const test = base.extend<MixFixtures>({
  loginPage: async ({ page }, use) => {
    const login = new LoginPage(page, 'https://material.playwrightvn.com/01-concert-ticket/login.html');
    use(login);
  },
  homePage: async ({ page }, use) => {
    const home = new HomePage(page, 'https://material.playwrightvn.com/01-concert-ticket/index.html');
    use(home);
  },
  cartPage: async ({ page }, use) => {
    const cart = new CartPage(page, 'https://material.playwrightvn.com/01-concert-ticket/cart.html');
    use(cart);
  }
});

test.describe("Buy Ticket", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.gotoAsync();
    await loginPage.loginAsync('vn84', 'StrongPassword@123');
    await loginPage.verifyLoginSuccessfullyAsync();
  });

  test.afterEach(async ({ homePage }) => {
    await homePage.logoutAsync();
    await homePage.closeAsync();
  });

  test("Verify Buy Ticket: Hỏa lực 1,2,3,4", async ({ context, homePage, cartPage }) => {
    await homePage.gotoAsync();
    const BUY_QUANTITY = 1;
    const price = await homePage.buyTicketAsync('Hỏa lực 1,2,3,4', BUY_QUANTITY);
    await homePage.verifyCartQuantityAsync(BUY_QUANTITY);

    const newTab = await context.newPage();
    cartPage.setPage(newTab);
    await cartPage.gotoAsync();
    await cartPage.verifyTotalPriceAsync(price);
    await cartPage.closeAsync();
  });
});