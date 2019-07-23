Feature: Authors REST API
  I want to get, create,edit and delete an entry in the sample DB

  Scenario: Get list of all authors
    When I send GET request to the authors endpoint
    Then The response code will be 200
    And The service will return a list of existing entries

  Scenario: Get author by authorID
    When I send GET request using the author's ID
    Then The response code will be 200
    And The service will return the entry that corresponds to the authorID

  Scenario: Get authorID by bookID
    When I send GET request using a book's ID
    Then The response code will be 200
    And The service will return the entry that corresponds to the bookID

  Scenario: Create an Author entry
    When I send POST request to the authors endpoint
    Then The response code will be 200
    And The service will return new author ID

  Scenario: Edit an Author entry
    When I send PUT request to the authors endpoint changing the author's name
    Then The response code will be 200
    And The service will return the updated name in the details

  Scenario: Delete an Author entry
    When I send DELETE request
    Then The response code will be 200
