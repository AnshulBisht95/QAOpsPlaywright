Feature: Ecommerce validations
@regression
Scenario: Buy an item
Given a login to the webapp with "coolansh9999000@gmail.com" & "Anshul@123"
When user add product "ZARA COAT 3" to the cart
Then verify the text is displayed in the cart
Then checkout with valid data & Verify the order is in the oder history
 