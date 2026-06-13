import { test, expect } from "@playwright/test"

test("Validations", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.locator("#mousehover").hover();
    await page.getByRole("link", { name: "Top" }).click();
    page.on("dialog", dialog => dialog.accept());
    await page.locator("#confirmbtn").click();
    await page.waitForTimeout(2000);
    //iframe
    // await page.pause();
    await page.frameLocator("#courses-iframe").getByRole("link", {name: "Job Support"}).click();
     
     await page.waitForTimeout(2000);
})