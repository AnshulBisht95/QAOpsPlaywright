const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber")
const { setWorldConstructor } = require('@cucumber/cucumber');
const { PomManager } = require("../../PageObject/PomManager");
const { expect } = require("@playwright/test");
const playwright = require('playwright');
const { TIMEOUT } = require("node:dns");

setDefaultTimeout(100000);


Given('a login to the webapp with {string} & {string}', async function (email, password) {
    const loginPage = this.pomManager.getLoginPage();
    await loginPage.webUrl();
    await loginPage.login(email, password);

});



When('user add product {string} to the cart', async function (itemName) {
    const dashboard = this.pomManager.getDashboard();
    const text = await dashboard.addItem();
    expect(text).toBe(itemName + "wrong name");

});

Then('verify the text is displayed in the cart', async function () {
    const checkout = this.pomManager.getCheckout();
    await checkout.checkoutOrder();

});


Then('checkout with valid data & Verify the order is in the oder history', async function () {
    const orderPage = this.pomManager.getOrderPage();
    await orderPage.viewOrder();
    const orderSummyPage = await this.page.locator("div[routerlink='/dashboard/myorders']").textContent();
    expect(orderSummyPage).toBe(" View Orders ");
    console.log(orderSummyPage);
});




Given('I am on login page', async function () {
     const loginPage = this.pomManager.getLoginPage();
    await loginPage.webUrl();
   
});

When('I try to login with {string} and {string}', async function (email, password) {
     const loginPage = this.pomManager.getLoginPage();
 await loginPage.login(email, password);
});


Then('I will get an error message', async function () {
    const text = await this.page.locator("div[role='alert']").textContent();
    expect(text).toBe(" Incorrect email or password. ")
});