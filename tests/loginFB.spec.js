const {test} = require ('@playwright/test');


test ("Opening browser  @ui", async({page})=>{

        await page.goto("https://www.facebook.com");
        await page.getByText("Email address or mobile number").fill("Hii");
        await page.waitForTimeout(2000);
        

})