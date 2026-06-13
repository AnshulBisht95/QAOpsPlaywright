
const {BasePage} = require("../PageObject/BasePage")
class LoginPage extends BasePage{
  /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);
        this.email = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
        this.loginButton = page.locator("#login");

    }

    async login(email, password) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();

    }

    async webUrl(url) {
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }

}

module.exports = { LoginPage };