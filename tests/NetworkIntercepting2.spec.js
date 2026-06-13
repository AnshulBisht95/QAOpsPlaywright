const { test, expect} = require("@playwright/test")
import{screenshot} from "@playwright/test"


test.describe.configure({mode: "parallel"})
test("Locator chaining 2", async ({ page }) => {
    await page.goto("https://www.amazon.in/ref=nav_logo");
    await page.route('**/*.{jpg,png,jpeg}', route => { route.abort(); });
    page.on("request", request=> console.log(request.url()));
    page.on("response", response=> console.log(response.url(), response.status()));
    await page.waitForTimeout(20000);
})


test("Locator chaining 3", async ({ page }) => {

    await page.goto("https://access.qa.planhub.com/signup/create-account");
    await page.locator("[qa-locator='register-submit']").waitFor();
     await page.locator("[qa-locator='input-email']").fill("test");
    expect(await page.screenshot()).toMatchSnapshot("testing.png");
})