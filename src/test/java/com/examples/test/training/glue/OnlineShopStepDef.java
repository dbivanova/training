package com.examples.test.training.glue;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OnlineShopStepDef {

	@Given("^I have an existing account with an online bookshop$")
	public void setUp() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	}

	@When("^I log into the website$")
	public void login() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	}

	@When("^I extend the Категории menu$")
	public void extendCategories() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	}

	@When("^I choose random book category$")
	public void chooseRandomBookCategory() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	}

	@When("^I choose a book from the list$")
	public void chooseBookFromList() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	}

	@Then("^The book description will be loaded with price and an option to order$")
	public void bookDetailsValidation() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	}

	@When("^I search for a specific book$")
	public void bookSearch() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	}

	@Then("^I will be able to select the book from the search results$")
	public void selectBookFromSearch() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	}

	@When("^I search and load a specific book$")
	public void searchBook() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	}

	@When("^I click on the Add to basket option$")
	public void addToBasket() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	}

	@Then("^The book will be added to the basket$")
	public void basketValidation() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	}

	@When("^I add a book to the basket$")
	public void addAbookToBasket() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	}

	@When("^I load the added products$")
	public void loadBasket() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	}

	@Then("^I will be able to increase the quantity$")
	public void increaseQuantity() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	}

	@Then("^I will be able to remove the products from the basket$")
	public void emptyBasket() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	}
}
