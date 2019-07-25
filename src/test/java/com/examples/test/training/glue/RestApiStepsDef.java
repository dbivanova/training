package com.examples.test.training.glue;

import com.examples.test.training.implementation.RestApiImplementation;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RestApiStepsDef {

	RestApiImplementation apiCalls = new RestApiImplementation();

	@Given("^I want to create new employee entry in the DB$")
	public void setUp() throws Throwable {
		apiCalls.setUp(null);

	}

	@When("^I send my json to the POST endpoint$")
	public void postJson() throws Throwable {
		apiCalls.postJson();
	}

	@Then("^I will see response (\\d+)$")
	public void validateResponse(int arg1) throws Throwable {
		apiCalls.validateResponse();

	}

	@Then("^The response body will contain new employee ID$")
	public void addedEntry() throws Throwable {
		apiCalls.validateID();

	}

	@Given("^An employee entry exists in the DB$")
	public void dbQuerySetUp() throws Throwable {
		apiCalls.newEmployeeID();

	}

	@When("^I perform GET API call using the employee ID$")
	public void getEmployee() throws Throwable {
		apiCalls.getExistingEmployee();

	}

	@Then("^The API call will return the employee name$")
	public void retrieveInformation() throws Throwable {
	    apiCalls.returnEmployeeName();
	}    
	    
	@When("^I perform PUT API call using the employee ID$")
	public void editEmployee() throws Throwable {
	apiCalls.editEmployeeEntry();
	}

	@Then("^The API call will return the updated data$")
	public void verifyUpdatedEmployee() throws Throwable {
	apiCalls.verifyEditedEmployee();
	}

	@When("^I perform DELETE API call using the employee ID$")
	public void deleteEmployee() throws Throwable {
		apiCalls.deleteEmployee();

	}

	@Then("^the user will no longer exist$")
	public void validateDeletedEntry() throws Throwable {
		apiCalls.validateDeletedEntry();
	}

}
