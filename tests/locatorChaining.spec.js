const { test, expect } = require("@playwright/test")


test("Locator chaining", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("coolansh9999000@gmail.com");
    await page.locator("#userPassword").fill("Anshul@123");
    await page.locator("#login").click();
    await page.waitForURL("https://rahulshettyacademy.com/client/#/dashboard/dash");
    await page.locator(".card-body").last().waitFor();
    const products = await page.locator(".card-body");
    const count = await products.count();
    for (let i = 0; i < count; i++) {
        const text = await products.nth(i).locator("b").textContent();
        console.log(text);
        if (text == "iphone 13 pro") {
            await products.nth(i).locator("i.fa.fa-shopping-cart").click();
            console.log(text);
            break;
        }
    }
    await page.locator('.btn.btn-custom').nth(2).click();
    await page.locator('div li').last().waitFor();
    await page.locator("h3:has-text('iphone 13 pro')").isVisible();
    await page.getByText('Checkout').click();
    await page.locator("img[class='iphone']").waitFor();
    await page.locator('input[placeholder="Select Country"]').pressSequentially('ind');
    await page.locator("section[class='ta-results list-group ng-star-inserted']").waitFor();
    const countries = await page.locator("section[class='ta-results list-group ng-star-inserted']");
    const totalSuggestion = await countries.locator('button').count();
    for (let i = 0; i < totalSuggestion; i++) {
        const text = await countries.locator('button').nth(i).textContent();
        if (text === " India") {
            await countries.locator('button').nth(i).click();
            break;
        }
    }
    await page.waitForTimeout(2000);
    const selectedCountry = await page.locator('input[placeholder="Select Country"]').inputValue();
    console.log(selectedCountry);

    await page.locator('input[type="text"]').nth(1).fill("123");
    await page.locator('input[type="text"]').nth(2).fill("testing");
    await page.locator('.action__submit ').click();
    await page.locator("div[class='title']").last().waitFor();
    await page.waitForTimeout(2000);
    const order = await page.locator("td[class='em-spacer-1'] label").last().textContent();
    const order1 = order.split(" | ");
    const orderID = order1[1].toString();
    console.log(orderID);
    await page.locator("button[routerlink='/dashboard/myorders']").click();
    await page.locator("img[class='img-fluid']").last().waitFor();
    await page.waitForTimeout(2000);
    const rows = await page.locator("tbody tr");
    const totalRows = await rows.count();
    for (let i = 0; i <totalRows; i++) {
        const rowOrderID = await rows.nth(i).locator("th").textContent();
        if (rowOrderID == orderID) {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }
    await page.waitForTimeout(2000);
    const orderSummyPage = await page.locator("div[routerlink='/dashboard/myorders']").textContent();
    expect(orderSummyPage).toBe(" View Orders ");
    console.log(orderSummyPage);
})