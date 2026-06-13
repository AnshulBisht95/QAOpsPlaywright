class BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
    }

    printOut(){
        console.log("Parent Page");
    }
}

module.exports = { BasePage };