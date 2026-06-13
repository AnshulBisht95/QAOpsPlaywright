import{test, expect} from "@playwright/test"
test("Calendar Validations", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");

    const month = "October";
    const date = "12";
    const year = "2026";
    const calendarDate = ["10", date, year];
    await page.locator(".react-date-picker__button").last().click();
    await page.locator(".react-calendar__navigation__label__labelText--from").click();
    await page.getByLabel("January");
    await page.locator("div button.react-calendar__tile").filter({hasText: month}).click();
    await page.locator("button.react-calendar__tile").filter({hasText: date}).click();
    const values = await page.locator("input.react-date-picker__inputGroup__input");
    for(let i=0; i<3; i++){
        const value = await values.nth(i).inputValue();
        
        expect(value).toEqual(calendarDate[i]);
    }

})