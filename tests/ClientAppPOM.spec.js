const { test, expect } = require("@playwright/test")
const { PomManager } = require("../PageObject/PomManager");
const { customTest} = require("../ApiUtils.js/testBase");
const testData = JSON.parse(JSON.stringify(require("../ApiUtils.js/testData.json")));

for (const data of testData){
test.only(`Locator chaining ${data.email}` , async ({ page }) => {
    const pomManager = new PomManager(page);
    const loginPage = pomManager.getLoginPage();
    await loginPage.webUrl();
    await loginPage.login(data.email, data.password);
    const dashboard = pomManager.getDashboard();
    const text = await dashboard.addItem();
    expect(text).toBe("ZARA COAT 3");
    const checkout = pomManager.getCheckout();
    await checkout.checkoutOrder();
    const orderPage = pomManager.getOrderPage();
    await orderPage.viewOrder();
    await page.waitForTimeout(2000);
    const orderSummyPage = await page.locator("div[routerlink='/dashboard/myorders']").textContent();
    expect(orderSummyPage).toBe(" View Orders ");
    console.log(orderSummyPage);
})
}


customTest("Locator chaining" , async ({ page, testDataCustom}) => {

    const pomManager = new PomManager(page);
    const loginPage = pomManager.getLoginPage();
    await loginPage.webUrl();
    await loginPage.login(testDataCustom.email, testDataCustom.password);
    const dashboard = pomManager.getDashboard();
    const text = await dashboard.addItem();
    
})