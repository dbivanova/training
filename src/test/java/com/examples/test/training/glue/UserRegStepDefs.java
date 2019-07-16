package com.examples.test.training.glue;

import com.examples.test.training.implementation.UserRegistrationImplementation;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class UserRegStepDefs {

		UserRegistrationImplementation actions = new UserRegistrationImplementation();
		
		@Given("^I want to create new user profile$")
		public void generateUsernamePassword() throws Throwable {
		actions.GenerateData();
		}

		@When("^I fill out the form and click on the Create Account button$")
		public void enterNewRegData() throws Throwable {
			actions.openBrowser();
			actions.CreateAccount();
		}

		@Then("^My account is created and I'm able to log into WordPress with that account$")
			public void accountCreatedSuccessfully() throws Throwable {
			actions.openBrowser();
			actions.AccountCreated();
			}

		@Given("^I want to validate error message from WordPress$")
			public void generateCredentials() throws Throwable {
			actions.GenerateInvalidData();
			
		}

		@When("^I enter invalid credentials and click on Login$")
		public void enterInvalidUsername() throws Throwable {
		    actions.openBrowser();
		    actions.InvalidLogin();
		    
		}

		@Then("^I won't be logged in$")
		public void loginFailed() throws Throwable {
		    actions.openBrowser();
			actions.loginFailed();
			
		}
	}

	

