const { BasePage } = require("./BasePage")

class OrderPage extends BasePage {

    /**
* @param {import('@playwright/test').Page} page    // this will help to access page functions in js file
*/


    constructor(page) {
        super(page);
        this.randomImage = page.locator("div[class='title']");
        this.orderIdText =  page.locator("td[class='em-spacer-1'] label");
        this.orders = page.locator("button[routerlink='/dashboard/myorders']");
        this.ordersRandomImage = page.locator("img[class='img-fluid']");
        this.viewOrder1 = page.locator("tbody tr");

    }

    async OrderId() {
        await this.page.locator("div[class='title']").last().waitFor();
        const order = await this.orderIdText.last().textContent();
        const order1 = order.split(" | ");
        const orderID = order1[1].toString();
        console.log(orderID);
        return orderID;
    }

    async viewOrder() {
        const orderId = await this.OrderId();
        await this.orders.click();
        await this.ordersRandomImage.last().waitFor();
        await this.viewOrder1.filter({ hasText: orderId }).getByRole("button", { name: "View" }).click();
        console.log("here");
        
    }



}

module.exports = { OrderPage }