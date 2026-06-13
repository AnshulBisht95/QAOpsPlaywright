Feature: Valdiations for wrong Credentials
    @ui
    Scenario Outline: Scenario Outline name: Login with wrong credentials
        Given I am on login page
        When I try to login with "<email>" and "<password>"
        Then I will get an error message

        Examples:
            | email                      | password         |
            | coolansh9999000@gmail.scom | Pass@123Pass@123 |
            | hello@123                  | testing@123      |