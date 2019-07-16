package com.examples.test.training.glue;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import com.examples.test.training.implementation.SOAPImplementation;

public class SOAPStepDefs {
SOAPImplementation actions = new SOAPImplementation();

	@Given("^I run a SOAP request using code (\\d+)$")
	public void runRequest(int arg1) throws Throwable {
	    actions.runRequest();
	    throw new PendingException();
	}

	@Then("^I verify the location Viersen$")
	public void i_verify_the_location_Viersen() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^I verify the location Willich$")
	public void i_verify_the_location_Willich() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^I verify the location Erkelenz$")
	public void i_verify_the_location_Erkelenz() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^I verify the location Solingen$")
	public void i_verify_the_location_Solingen() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^I verify the bank name Westfalenbank$")
	public void i_verify_the_bank_name_Westfalenbank() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^I verify the bank name Bundesbank$")
	public void i_verify_the_bank_name_Bundesbank() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^I verify the bank name Volksbank Bochum Witten$")
	public void i_verify_the_bank_name_Volksbank_Bochum_Witten() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^I verify the bank name Dresdner Bank$")
	public void i_verify_the_bank_name_Dresdner_Bank() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	} 

}
