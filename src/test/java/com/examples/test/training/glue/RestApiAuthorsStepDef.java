package com.examples.test.training.glue;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import com.examples.test.training.implementation.RestApiAuthorsImplementation;;

public class RestApiAuthorsStepDef {

	RestApiAuthorsImplementation operations = new RestApiAuthorsImplementation();

	@When("^I send GET request to the authors endpoint$")
	public void getAllAuthors() throws Throwable {
		operations.getAuthorsList();

	}

	@Then("^The response code will be (\\d+)$")
	public void verifyResponseCode(int arg1) throws Throwable {
		operations.verifyResponseCode();
	}

	@Then("^The service will return a list of existing entries$")
	public void verifyAuthorsList() throws Throwable {
		operations.verifyAuthorsList();
	}

	@When("^I send GET request using the author's ID$")
	public void getSpecificAuthor() throws Throwable {
		operations.getAuthor();
	}

	@Then("^The service will return the entry that corresponds to the authorID$")
	public void verifyEntry() throws Throwable {
		operations.verifyAuthor();
	}

	@When("^I send GET request using a book's ID$")
	public void getBook() throws Throwable {
		operations.getBookByID();
	}

	@Then("^The service will return the entry that corresponds to the bookID$")
	public void verifyGetAuthorByBook() throws Throwable {
		operations.verifyGetAuthorByBookID();
	}

	@When("^I send POST request to the authors endpoint$")
	public void createEntry() throws Throwable {
		operations.postAuthor();
	}

	@Then("^The service will return new author ID$")
	public void verifyNewEntry() throws Throwable {
		operations.validateNewAuthor();
	}

	@When("^I send PUT request to the authors endpoint changing the author's name$")
	public void editEntry() throws Throwable {
		operations.editExistingAuthor();
	}

	@Then("^The service will return the updated name in the details$")
	public void verifyResponse() throws Throwable {
		operations.validateEditedEntry();
	}

	@When("^I send DELETE request$")
	public void deleteEntry() throws Throwable {
		operations.deleteAuthor();
	}

}
