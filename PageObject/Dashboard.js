const { BasePage } = require("../PageObject/BasePage");
class Dashboard  extends BasePage{
    /**
   * @param {import('@playwright/test').Page} page    // this will help to access page functions in js file
   */

    constructor(page) {
        super(page);
        this.pageItems = page.locator(".card-body");
        this.addToCart = page.locator(".card-body").filter({ hasText: "ZARA COAT 3" }).getByRole("button", { name: " Add To Cart" });
        this.viewCart = page.locator('.btn.btn-custom');
        this.imagesOnOrdersPage = page.locator('div li');
        this.textOnCart = page.locator("h3:has-text('ZARA COAT 3')");

    }

    async addItem() {
        await this.page.waitForURL("https://rahulshettyacademy.com/client/#/dashboard/dash");
        await this.pageItems.last().waitFor();
        await this.addToCart.click();
        await this.viewCart.nth(2).click();
        await this.imagesOnOrdersPage.last().waitFor();
        const cartText =await this.textOnCart.textContent();
        await this.page.getByText('Checkout').click();
        return cartText;
    }

}

module.exports = {Dashboard}