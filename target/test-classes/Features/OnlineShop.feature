Feature: Online Bookshop
  I want to create test scenarios about online bookshop operations
	
	Background:
		Given I have an existing account with an online bookshop
  	When I log into the website
  	
  Scenario: Choose a product from random category
    And I extend the Категории menu and choose book category
    And I choose a book from the list
    Then The book description will be loaded with price and an option to order
    
  Scenario: Search for a product 
    And I search for a specific book
    Then I will be able to select the book from the search results
    And The book description will be loaded with price and an option to order
    
 	Scenario: Add a book to the basket
 		And I search and load a specific book
 		And I click on the Add to basket option
 		Then The book will be added to the basket
 		
 	Scenario: Edit the basket
 		And I add a book to the basket 
 		And I load the added products
 		Then I will be able to increase the quantity
 		And I will be able to remove the products from the basket
 		
