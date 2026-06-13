import { test, expect, request } from "@playwright/test"
import { apiUtils } from "./ApiUtils.js/ApiUtils";
const payload = { userEmail: "coolansh9999000@gmail.com", userPassword: "Anshul@123" }

const OderPayload = {
    orders: [{country: "Bahamas",productOrderedId: "6960eac0c941646b7a8b3e68"}]};
let response;
test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const apiUTils = new apiUtils(apiContext, payload);
    response = await apiUTils.createOrder(OderPayload);
    console.log("Function response---" + response)

})

test.beforeEach(async () => {
})
test("Checkout Webapp @api", async ({ page }) => {
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value)
    }, response.token)
    await page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash");
    await page.waitForURL("https://rahulshettyacademy.com/client/#/dashboard/dash");
    await page.locator("button[routerlink='/dashboard/myorders']").click();
    await page.locator("img[class='img-fluid']").last().waitFor();
    await page.waitForTimeout(2000);
    await page.locator("tbody tr").filter({ hasText: response.orderID }).getByRole("button", { name: "View" }).click();
    await page.waitForTimeout(2000);
    const orderSummyPage = await page.locator("div[routerlink='/dashboard/myorders']").textContent();
    expect(orderSummyPage).toBe(" View Orders ");
    console.log(orderSummyPage);

})


