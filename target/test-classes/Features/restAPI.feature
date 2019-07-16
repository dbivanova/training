Feature: Test REST API calls

  I want to execute API calls to create and retrieve information

  Scenario: Create an entry in the DB
		Given I want to create new employee entry in the DB
		When I send my json to the POST endpoint
		Then I will see response 200
		And The response body will contain new employee ID
	
	  
  Scenario: Retrieve information from the DB
  	Given An employee entry exists in the DB
   	When I perform GET API call using the employee ID
  	Then The API call will return the employee name
  	
  Scenario: Delete an entry
  	Given An employee entry exists in the DB
  	When I perform DELETE API call using the employee ID
  	Then the user will no longer exist 
  	
  	
 