import { test, expect, request } from "@playwright/test"
import { link } from "node:fs";

const fakeResponse = { data: [], message: "No Orders" }

test("PW special Locators", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("coolansh9999000@gmail.com");
    await page.locator("#userPassword").fill("Anshul@123");
    await page.locator("#login").click();
    await page.waitForURL("https://rahulshettyacademy.com/client/#/dashboard/dash");
    await page.locator(".card-body").last().waitFor();
    await page.locator(".card-body").filter({ hasText: "ZARA COAT 3" }).getByRole("button", { name: " Add To Cart" }).click();
    await page.locator('.btn.btn-custom').nth(2).click();
    await page.locator('div li').last().waitFor();
    await page.locator("h3:has-text('iphone 13 pro')").isVisible();
    await page.getByText('Checkout').click();
    await page.locator("img[class='iphone']").waitFor();
    await page.locator('input[placeholder="Select Country"]').pressSequentially('ind');
    await page.locator("section[class='ta-results list-group ng-star-inserted']").waitFor();
    await page.locator("section[class='ta-results list-group ng-star-inserted']").filter({ hasText: "India" }).click();
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
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
        async route => {
            const response = await page.request.fetch(route.request());
            await route.fulfill({ response, json: fakeResponse });

        })//intercepting response -APi response-> { playwright fakeresponse}->browser->render data on front end  
        //before make the api call
    await page.locator("button[routerlink='/dashboard/myorders']").click();
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");//wait for original  api request response then adding the fakeresponse
    await page.waitForTimeout(2000);



})