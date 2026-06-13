const { BasePage } = require("./BasePage")

class Checkout extends BasePage {

    /**
* @param {import('@playwright/test').Page} page    // this will help to access page functions in js file
*/


    constructor(page) {
        super(page);
        this.randomImage = page.locator("img[class='iphone']");
        this.countryInitial = page.locator('input[placeholder="Select Country"]');
        this.countrySuggestionList =page.locator("section[class='ta-results list-group ng-star-inserted']")
        this.selectCountry = page.locator("section[class='ta-results list-group ng-star-inserted']").filter({ hasText: "India" });
        this.cvv = page.locator('input[type="text"]').nth(1);
        this.placeOrder = page.locator('.action__submit ');
    }

    async checkoutOrder() {
        await this.randomImage.waitFor();
        await this.countryInitial.pressSequentially('ind');
        await this.countrySuggestionList.waitFor();
        await this.selectCountry.click();
        await this.page.locator('input[type="text"]').nth(1).fill("123");
        await this.cvv.fill("testing");
        await this.placeOrder.click();
    }




}

    module.exports = {Checkout}