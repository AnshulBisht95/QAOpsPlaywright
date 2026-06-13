const { test, expect } = require("@playwright/test");

test.skip("browser context", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
});

test("page context", async ({ page }) => {
  await page.goto("https://www.facebook.com");
  await expect(page).toHaveTitle("Facebook");
});

test.skip("Error message on Login", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
  await page.waitForTimeout(2000);
  await page.locator("#username").fill("rahulshetty");
  await page.locator("#password").fill("test@123");
  await page.click(".checkmark");
  await page.waitForTimeout(2000);
  await page.locator("div > label > input[value='user']+span").click();
  await page.locator("#okayBtn").click();
  await page.locator("select:visible").click();
  await page.waitForTimeout(2000);
  await page.getByRole("combobox").selectOption("teach");
  await page.getByRole("button", { name: "Sign In" }).click();
  await page.locator("#login-box").click();
  await page.locator("#terms").click();
  await expect(page.locator("div[style='display: block;']")).toBeVisible();  
  await page.locator("#username").fill("");
  await page.locator("#password").fill("");
  await page.locator("#username").fill("rahulshetty");
  await page.locator("#password").fill("Learning@830$3mK2)");
  await page.locator("//input[@id='terms']").click();

});

  
test("select the first product", async ({page})=>{

    // await page.goto("https://rahulshettyacademy.com/client/#/auth/register");
    // await page.locator("#firstName").fill("test");
    // await page.locator("#lastName").fill("user");
    // await page.locator("#userEmail").fill(`coolansh9999000@gmail.com`);
    // await page.locator("#userMobile").fill("8888888888");
    // await page.locator("//select[@class='custom-select ng-untouched ng-pristine ng-valid']").click({force: true});
    // await page.locator("[formcontrolname='occupation']").selectOption("1: Doctor");
    // await page.locator("input[value='Male']").click();
    // await page.locator("#userPassword").fill("Test@123");
    // await page.locator("#confirmPassword").fill("Test@123");
    // await page.locator("input[type='checkbox']").click();
    // await page.locator("#login").click();
    // await page.waitForURL("https://rahulshettyacademy.com/client/#/auth/login");
    // await expect(page).toHaveTitle("Let's Shop");
    // await page.waitForTimeout(10000);

     await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("coolansh9999000@gmail.com");
    await page.locator("#userPassword").fill("Anshul@123");
    await page.locator("#login").click();
    // await page.waitForURL("https://rahulshettyacademy.com/client/#/dashboard/dash");
    await page.locator(".card-body").nth(0).waitFor({state: "visible"})
    await expect(page).toHaveTitle("Let's Shop");
    console.log(await page.locator(".card-body").nth(0).textContent());
    const txt = await page.locator(".card-body").nth(0).textContent()
 expect(txt === "ADIDAS ORIGINAL$ 11500 View Add To Cart")
  })
