const { Before, After, AfterStep, Status } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");
const { PomManager } = require("../../PageObject/PomManager");

Before({tag: "@regression"}, async function () {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    this.pomManager = new PomManager(this.page);
});

After(async function () {
    await this.browser.close();
});

AfterStep(async function ({ result }) {
    if (result.status === Status.FAILED) {
        await this.page.screenshot({ path: "screenshot1.png" });
    }
});