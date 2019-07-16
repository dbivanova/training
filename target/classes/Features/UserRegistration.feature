Feature: User Registration
  
  I want to register new user in WordPress.

  Scenario: Register new user in WordPress
    Given I want to create new user profile
    When I fill out the form and click on the Create Account button
    Then My account is created and I'm able to log into WordPress with that account

  Scenario: Login attempt with invalid credentials
    Given I want to validate error message from WordPress
    When I enter invalid credentials and click on Login
    Then I won't be logged in