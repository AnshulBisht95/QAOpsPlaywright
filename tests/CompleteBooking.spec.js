import { test, expect } from "@playwright/test"

test("Login into Webapp", async ({ page }) => {
    const eventName = "Learning Automation From Rahul Shetty Academy";
    const eventDescription = "Learning Automation & implementing it";
    const eventLocation = "Bengaluru";
    const eventVenue = "Doddabomasandra";
    const eventDate = "12122026";
    const eventTime = "12121"
    const eventPrice = "420";
    const eventSeats = "2";
    await page.goto("https://eventhub.rahulshettyacademy.com/login");
    await page.getByPlaceholder("you@email.com").fill("coolansh9999000@gmail.com");
    await page.getByPlaceholder("••••••").fill("Anshul@123");
    await page.getByRole("button", { name: "Sign In" }).click();
    await page.getByRole("button", { name: "Events" }).click();
    await page.locator("img[alt='Dilli Diwali Mela']").waitFor();
    await page.locator("button[type='button']").click();
    await page.getByText("Dilli Diwali Mela").waitFor();
    await page.getByPlaceholder("Event title").fill(eventName);
    await page.getByPlaceholder("Describe the event…").fill(eventDescription);
    await page.locator("#city").fill(eventLocation);
    await page.locator("#venue").fill(eventVenue);
    await page.locator("input[type='datetime-local']").press("Space");
    await page.locator("input[type='datetime-local']").pressSequentially(eventDate, { delay: 250 });
    
    await page.locator("[id='price-($)']").fill(eventPrice);
    await page.getByPlaceholder("e.g. 500").fill(eventSeats);
    await page.getByRole("button", { name: "+ Add Event" }).click();

})


