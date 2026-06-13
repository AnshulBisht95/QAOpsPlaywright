import { test, expect } from "@playwright/test"
import { link } from "node:fs";

test("PW special Locators", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.selectOption("#exampleFormControlSelect1", "Female");
    await page.getByPlaceholder("Password").fill("Testing@123");
    await page.waitForTimeout(2000);
    await page.getByRole("link", { name: "Shop" }).click();
     await page.waitForTimeout(2000);
    await page.locator(".card").filter({hasText: "Blackberry"}).getByRole("button").click();
    await page.waitForTimeout(2000);



})