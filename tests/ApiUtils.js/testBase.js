const base = require("@playwright/test")

  exports.customTest =   base.test.extend({

        testDataCustom:  {
        email: "modifyingtest@gmail.com",
        password: "Anshul@1234"
    }
    })