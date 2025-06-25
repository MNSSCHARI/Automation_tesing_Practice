Feature: Validate the Valid Cred

  @smoke
  Scenario: Validate the user is logged out
    Given I am on the login page
    
    When I enter valid credentials
    And I click on the login button

    Then I should see a logout button
    