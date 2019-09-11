Feature: Tests for my REST service

  Scenario: Test the GET all API - successfully retrieving information
    When I execute the getAll API call
    Then I will see a list with all existing authors retrieved

  Scenario: Test the GET author API call
    When I execute the getAuthorById API call
    Then I will see the author info retrieved from the DB

  Scenario: Test the POST API call
    When I execute the POST API call
    Then New author will be added to the DB

  Scenario: Test the PUT API Call
    When I execute the PUT API call
    Then The author entry in use will be updated

  Scenario: Test the DELETE API call
    When I execute the DELETE API call
    Then The author in use will be erased from the DB