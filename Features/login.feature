Feature: New login page

    Scenario: User logs in with valid credentials
        Given I am on the login page
        When I enter "valid_username" as username
        And I enter "valid_password" as password    
        And I click the login button
        Then I should see the dashboard page