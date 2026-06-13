const { LoginPage } = require("./LoginPage");
const { Dashboard } = require("./Dashboard");
const { Checkout } = require("./Checkout");
const { OrderPage } = require("./OrderPage");

class PomManager {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.dashboard = new Dashboard(page);
        this.checkout = new Checkout(page);
        this.orderPage = new OrderPage(page);
    }

    getLoginPage() {
        return this.loginPage;
    }

   
    getDashboard() {
        return this.dashboard;
    }

    getCheckout() {
        return this.checkout;
    }

    getOrderPage() {
        return this.orderPage;
    }
}

module.exports = { PomManager };