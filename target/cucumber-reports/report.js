$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("OnlineShop.feature");
formatter.feature({
  "line": 1,
  "name": "Online Bookshop",
  "description": "I want to create test scenarios about online bookshop operations",
  "id": "online-bookshop",
  "keyword": "Feature"
});
formatter.before({
  "duration": 630917563,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I have an existing account with an online bookshop",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I log into the website",
  "keyword": "When "
});
formatter.match({
  "location": "OnlineShopStepDef.setUp()"
});
formatter.result({
  "duration": 13876815539,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShopStepDef.login()"
});
formatter.result({
  "duration": 4312319867,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Choose a product from random category",
  "description": "",
  "id": "online-bookshop;choose-a-product-from-random-category",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I extend the Категории menu and choose book category",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I choose a book from the list",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "The book description will be loaded with price and an option to order",
  "keyword": "Then "
});
formatter.match({
  "location": "OnlineShopStepDef.extendCategories()"
});
formatter.result({
  "duration": 7306187705,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShopStepDef.chooseBookFromList()"
});
formatter.result({
  "duration": 7063170273,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShopStepDef.bookDetailsValidation()"
});
formatter.result({
  "duration": 1080805274,
  "status": "passed"
});
formatter.before({
  "duration": 39476,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I have an existing account with an online bookshop",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I log into the website",
  "keyword": "When "
});
formatter.match({
  "location": "OnlineShopStepDef.setUp()"
});
formatter.result({
  "duration": 10825564177,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShopStepDef.login()"
});
formatter.result({
  "duration": 3796682932,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Search for a product",
  "description": "",
  "id": "online-bookshop;search-for-a-product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I search for a specific book",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I will be able to select the book from the search results",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "The book description will be loaded with price and an option to order",
  "keyword": "And "
});
formatter.match({
  "location": "OnlineShopStepDef.bookSearch()"
});
formatter.result({
  "duration": 865977868,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShopStepDef.selectBookFromSearch()"
});
formatter.result({
  "duration": 2062533135,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShopStepDef.bookDetailsValidation()"
});
formatter.result({
  "duration": 1070738169,
  "status": "passed"
});
formatter.before({
  "duration": 31581,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I have an existing account with an online bookshop",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I log into the website",
  "keyword": "When "
});
formatter.match({
  "location": "OnlineShopStepDef.setUp()"
});
formatter.result({
  "duration": 10780342736,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShopStepDef.login()"
});
formatter.result({
  "duration": 3914364869,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Add a book to the basket",
  "description": "",
  "id": "online-bookshop;add-a-book-to-the-basket",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I search and load a specific book",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on the Add to basket option",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "The book will be added to the basket",
  "keyword": "Then "
});
formatter.match({
  "location": "OnlineShopStepDef.searchBook()"
});
formatter.result({
  "duration": 3901871585,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShopStepDef.addToBasket()"
});
formatter.result({
  "duration": 227179761,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShopStepDef.basketValidation()"
});
formatter.result({
  "duration": 1032913693,
  "status": "passed"
});
formatter.before({
  "duration": 32370,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I have an existing account with an online bookshop",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I log into the website",
  "keyword": "When "
});
formatter.match({
  "location": "OnlineShopStepDef.setUp()"
});
formatter.result({
  "duration": 10754635341,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShopStepDef.login()"
});
formatter.result({
  "duration": 3831343822,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Edit the basket",
  "description": "",
  "id": "online-bookshop;edit-the-basket",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "I add a book to the basket",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I load the added products",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I will be able to increase the quantity",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I will be able to remove the products from the basket",
  "keyword": "And "
});
formatter.match({
  "location": "OnlineShopStepDef.addAbookToBasket()"
});
formatter.result({
  "duration": 4054494689,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShopStepDef.loadBasket()"
});
formatter.result({
  "duration": 843389846,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShopStepDef.increaseQuantity()"
});
formatter.result({
  "duration": 903002565,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShopStepDef.emptyBasket()"
});
formatter.result({
  "duration": 1761674261,
  "status": "passed"
});
formatter.uri("RestApiAuthors.feature");
formatter.feature({
  "line": 1,
  "name": "Authors REST API",
  "description": "I want to get, create,edit and delete an entry in the sample DB",
  "id": "authors-rest-api",
  "keyword": "Feature"
});
formatter.before({
  "duration": 28818,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Get list of all authors",
  "description": "",
  "id": "authors-rest-api;get-list-of-all-authors",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I send GET request to the authors endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The response code will be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "The service will return a list of existing entries",
  "keyword": "And "
});
formatter.match({
  "location": "RestApiAuthorsStepDef.getAllAuthors()"
});
formatter.result({
  "duration": 848262732,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 26
    }
  ],
  "location": "RestApiAuthorsStepDef.verifyResponseCode(int)"
});
formatter.result({
  "duration": 1684825,
  "status": "passed"
});
formatter.match({
  "location": "RestApiAuthorsStepDef.verifyAuthorsList()"
});
formatter.result({
  "duration": 50134,
  "status": "passed"
});
formatter.before({
  "duration": 46582,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Get author by authorID",
  "description": "",
  "id": "authors-rest-api;get-author-by-authorid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I send GET request using the author\u0027s ID",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The response code will be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "The service will return the entry that corresponds to the authorID",
  "keyword": "And "
});
formatter.match({
  "location": "RestApiAuthorsStepDef.getSpecificAuthor()"
});
formatter.result({
  "duration": 120356024,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 26
    }
  ],
  "location": "RestApiAuthorsStepDef.verifyResponseCode(int)"
});
formatter.result({
  "duration": 95926,
  "status": "passed"
});
formatter.match({
  "location": "RestApiAuthorsStepDef.verifyEntry()"
});
formatter.result({
  "duration": 42634,
  "status": "passed"
});
formatter.before({
  "duration": 33160,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Get authorID by bookID",
  "description": "",
  "id": "authors-rest-api;get-authorid-by-bookid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I send GET request using a book\u0027s ID",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "The response code will be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "The service will return the entry that corresponds to the bookID",
  "keyword": "And "
});
formatter.match({
  "location": "RestApiAuthorsStepDef.getBook()"
});
formatter.result({
  "duration": 106394637,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 26
    }
  ],
  "location": "RestApiAuthorsStepDef.verifyResponseCode(int)"
});
formatter.result({
  "duration": 91583,
  "status": "passed"
});
formatter.match({
  "location": "RestApiAuthorsStepDef.verifyGetAuthorByBook()"
});
formatter.result({
  "duration": 65925,
  "status": "passed"
});
formatter.before({
  "duration": 31975,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Create an Author entry",
  "description": "",
  "id": "authors-rest-api;create-an-author-entry",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I send POST request to the authors endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "The response code will be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "The service will return new author ID",
  "keyword": "And "
});
formatter.match({
  "location": "RestApiAuthorsStepDef.createEntry()"
});
formatter.result({
  "duration": 415252876,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 26
    }
  ],
  "location": "RestApiAuthorsStepDef.verifyResponseCode(int)"
});
formatter.result({
  "duration": 87636,
  "status": "passed"
});
formatter.match({
  "location": "RestApiAuthorsStepDef.verifyNewEntry()"
});
formatter.result({
  "duration": 33159,
  "status": "passed"
});
formatter.before({
  "duration": 31581,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Edit an Author entry",
  "description": "",
  "id": "authors-rest-api;edit-an-author-entry",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "I send PUT request to the authors endpoint changing the author\u0027s name",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "The response code will be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "The service will return the updated name in the details",
  "keyword": "And "
});
formatter.match({
  "location": "RestApiAuthorsStepDef.editEntry()"
});
formatter.result({
  "duration": 108941611,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 26
    }
  ],
  "location": "RestApiAuthorsStepDef.verifyResponseCode(int)"
});
formatter.result({
  "duration": 115270,
  "status": "passed"
});
formatter.match({
  "location": "RestApiAuthorsStepDef.verifyResponse()"
});
formatter.result({
  "duration": 78557,
  "status": "passed"
});
formatter.before({
  "duration": 43818,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Delete an Author entry",
  "description": "",
  "id": "authors-rest-api;delete-an-author-entry",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "I send DELETE request",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "The response code will be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "RestApiAuthorsStepDef.deleteEntry()"
});
formatter.result({
  "duration": 105993168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 26
    }
  ],
  "location": "RestApiAuthorsStepDef.verifyResponseCode(int)"
});
formatter.result({
  "duration": 89610,
  "status": "passed"
});
formatter.uri("SOAPService.feature");
formatter.feature({
  "line": 1,
  "name": "Bank branches search based on a BLZ codes",
  "description": "",
  "id": "bank-branches-search-based-on-a-blz-codes",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Find bank branches in Germany using BLZ codes",
  "description": "",
  "id": "bank-branches-search-based-on-a-blz-codes;find-bank-branches-in-germany-using-blz-codes",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I run a SOAP request using code \u003cBLZ\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I verify the location \u003clocation\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "the bank name is \u003cname\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "bank-branches-search-based-on-a-blz-codes;find-bank-branches-in-germany-using-blz-codes;",
  "rows": [
    {
      "cells": [
        "BLZ",
        "location",
        "name"
      ],
      "line": 9,
      "id": "bank-branches-search-based-on-a-blz-codes;find-bank-branches-in-germany-using-blz-codes;;1"
    },
    {
      "cells": [
        "31460290",
        "Viersen",
        "Volksbank Viersen"
      ],
      "line": 10,
      "id": "bank-branches-search-based-on-a-blz-codes;find-bank-branches-in-germany-using-blz-codes;;2"
    },
    {
      "cells": [
        "31061108",
        "Willich",
        "Volksbank Willich"
      ],
      "line": 11,
      "id": "bank-branches-search-based-on-a-blz-codes;find-bank-branches-in-germany-using-blz-codes;;3"
    },
    {
      "cells": [
        "31261282",
        "Erkelenz",
        "Volksbank Erkelenz-Hückelhoven-Wegberg"
      ],
      "line": 12,
      "id": "bank-branches-search-based-on-a-blz-codes;find-bank-branches-in-germany-using-blz-codes;;4"
    },
    {
      "cells": [
        "34270094",
        "Solingen",
        "Deutsche Bank"
      ],
      "line": 13,
      "id": "bank-branches-search-based-on-a-blz-codes;find-bank-branches-in-germany-using-blz-codes;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 30791,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Find bank branches in Germany using BLZ codes",
  "description": "",
  "id": "bank-branches-search-based-on-a-blz-codes;find-bank-branches-in-germany-using-blz-codes;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I run a SOAP request using code 31460290",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I verify the location Viersen",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "the bank name is Volksbank Viersen",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "31460290",
      "offset": 32
    }
  ],
  "location": "SOAPStepDefs.runRequest(String)"
});
formatter.result({
  "duration": 507489931,
  "status": "passed"
});
formatter.match({
  "location": "SOAPStepDefs.verifyViersen()"
});
formatter.result({
  "duration": 67503,
  "status": "passed"
});
formatter.match({
  "location": "SOAPStepDefs.verifyVolksbankViersen()"
});
formatter.result({
  "duration": 61187,
  "status": "passed"
});
formatter.before({
  "duration": 30791,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Find bank branches in Germany using BLZ codes",
  "description": "",
  "id": "bank-branches-search-based-on-a-blz-codes;find-bank-branches-in-germany-using-blz-codes;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I run a SOAP request using code 31061108",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I verify the location Willich",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "the bank name is Volksbank Willich",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "31061108",
      "offset": 32
    }
  ],
  "location": "SOAPStepDefs.runRequest(String)"
});
formatter.result({
  "duration": 175743259,
  "status": "passed"
});
formatter.match({
  "location": "SOAPStepDefs.verifyWillich()"
});
formatter.result({
  "duration": 49740,
  "status": "passed"
});
formatter.match({
  "location": "SOAPStepDefs.verifyVolksbankWillich()"
});
formatter.result({
  "duration": 31975,
  "status": "passed"
});
formatter.before({
  "duration": 30002,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Find bank branches in Germany using BLZ codes",
  "description": "",
  "id": "bank-branches-search-based-on-a-blz-codes;find-bank-branches-in-germany-using-blz-codes;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I run a SOAP request using code 31261282",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I verify the location Erkelenz",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "the bank name is Volksbank Erkelenz-Hückelhoven-Wegberg",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "31261282",
      "offset": 32
    }
  ],
  "location": "SOAPStepDefs.runRequest(String)"
});
formatter.result({
  "duration": 227328191,
  "status": "passed"
});
formatter.match({
  "location": "SOAPStepDefs.verifyErkelenz()"
});
formatter.result({
  "duration": 56055,
  "status": "passed"
});
formatter.match({
  "location": "SOAPStepDefs.verifyVolksbankErkelenzHückelhovenWegberg()"
});
formatter.result({
  "duration": 32370,
  "status": "passed"
});
formatter.before({
  "duration": 31186,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Find bank branches in Germany using BLZ codes",
  "description": "",
  "id": "bank-branches-search-based-on-a-blz-codes;find-bank-branches-in-germany-using-blz-codes;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I run a SOAP request using code 34270094",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I verify the location Solingen",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "the bank name is Deutsche Bank",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "34270094",
      "offset": 32
    }
  ],
  "location": "SOAPStepDefs.runRequest(String)"
});
formatter.result({
  "duration": 172425323,
  "status": "passed"
});
formatter.match({
  "location": "SOAPStepDefs.verifySolingen()"
});
formatter.result({
  "duration": 63951,
  "status": "passed"
});
formatter.match({
  "location": "SOAPStepDefs.verifyDeutscheBank()"
});
formatter.result({
  "duration": 29212,
  "status": "passed"
});
formatter.uri("UserRegistration.feature");
formatter.feature({
  "line": 1,
  "name": "User Registration",
  "description": "\nI want to register new user in WordPress.",
  "id": "user-registration",
  "keyword": "Feature"
});
formatter.before({
  "duration": 21712,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Register new user in WordPress",
  "description": "",
  "id": "user-registration;register-new-user-in-wordpress",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I want to create new user profile",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I fill out the form and click on the Create Account button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "My account is created and I\u0027m able to log into WordPress with that account",
  "keyword": "Then "
});
formatter.match({
  "location": "UserRegStepDefs.generateUsernamePassword()"
});
formatter.result({
  "duration": 2945680,
  "status": "passed"
});
formatter.match({
  "location": "UserRegStepDefs.enterNewRegData()"
});
formatter.result({
  "duration": 7269986077,
  "status": "passed"
});
formatter.match({
  "location": "UserRegStepDefs.accountCreatedSuccessfully()"
});
formatter.result({
  "duration": 10170748393,
  "status": "passed"
});
formatter.before({
  "duration": 365545,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Login attempt with invalid credentials",
  "description": "",
  "id": "user-registration;login-attempt-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I want to validate error message from WordPress",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I enter invalid credentials and click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I won\u0027t be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "UserRegStepDefs.generateCredentials()"
});
formatter.result({
  "duration": 96320,
  "status": "passed"
});
formatter.match({
  "location": "UserRegStepDefs.enterInvalidUsername()"
});
formatter.result({
  "duration": 6961706552,
  "status": "passed"
});
formatter.match({
  "location": "UserRegStepDefs.loginFailed()"
});
formatter.result({
  "duration": 6186966608,
  "status": "passed"
});
formatter.uri("restAPI.feature");
formatter.feature({
  "line": 1,
  "name": "Test REST API calls",
  "description": "\r\nI want to execute API calls to create and retrieve information",
  "id": "test-rest-api-calls",
  "keyword": "Feature"
});
formatter.before({
  "duration": 34344,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Create an entry in the DB",
  "description": "",
  "id": "test-rest-api-calls;create-an-entry-in-the-db",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I want to create new employee entry in the DB",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I send my json to the POST endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I will see response 200",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "The response body will contain new employee ID",
  "keyword": "And "
});
formatter.match({
  "location": "RestApiStepsDef.setUp()"
});
formatter.result({
  "duration": 490205870,
  "status": "passed"
});
formatter.match({
  "location": "RestApiStepsDef.postJson()"
});
formatter.result({
  "duration": 519215806,
  "error_message": "io.restassured.path.json.exception.JsonPathException: Failed to parse the JSON document\r\n\tat io.restassured.path.json.JsonPath$ExceptionCatcher.invoke(JsonPath.java:930)\r\n\tat io.restassured.path.json.JsonPath$4.doParseWith(JsonPath.java:895)\r\n\tat io.restassured.path.json.JsonPath$JsonParser.parseWith(JsonPath.java:974)\r\n\tat io.restassured.path.json.JsonPath.get(JsonPath.java:201)\r\n\tat io.restassured.path.json.JsonPath.getString(JsonPath.java:351)\r\n\tat com.examples.test.training.implementation.RestApiImplementation.postJson(RestApiImplementation.java:49)\r\n\tat com.examples.test.training.glue.RestApiStepsDef.postJson(RestApiStepsDef.java:21)\r\n\tat ✽.When I send my json to the POST endpoint(restAPI.feature:7)\r\nCaused by: groovy.json.JsonException: Lexing failed on line: 1, column: 1, while reading \u0027\u003c\u0027, no possible valid JSON value or punctuation could be recognized.\r\n\tat groovy.json.JsonLexer.nextToken(JsonLexer.java:85)\r\n\tat groovy.json.JsonLexer$nextToken.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:117)\r\n\tat io.restassured.internal.path.json.ConfigurableJsonSlurper.parse(ConfigurableJsonSlurper.groovy:97)\r\n\tat io.restassured.internal.path.json.ConfigurableJsonSlurper$parse.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:154)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.path.json.ConfigurableJsonSlurper.parseText(ConfigurableJsonSlurper.groovy:83)\r\n\tat io.restassured.path.json.JsonPath$4$1.method(JsonPath.java:893)\r\n\tat io.restassured.path.json.JsonPath$ExceptionCatcher.invoke(JsonPath.java:928)\r\n\tat io.restassured.path.json.JsonPath$4.doParseWith(JsonPath.java:895)\r\n\tat io.restassured.path.json.JsonPath$JsonParser.parseWith(JsonPath.java:974)\r\n\tat io.restassured.path.json.JsonPath.get(JsonPath.java:201)\r\n\tat io.restassured.path.json.JsonPath.getString(JsonPath.java:351)\r\n\tat com.examples.test.training.implementation.RestApiImplementation.postJson(RestApiImplementation.java:49)\r\n\tat com.examples.test.training.glue.RestApiStepsDef.postJson(RestApiStepsDef.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 20
    }
  ],
  "location": "RestApiStepsDef.validateResponse(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RestApiStepsDef.addedEntry()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 33554,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Retrieve information from the DB",
  "description": "",
  "id": "test-rest-api-calls;retrieve-information-from-the-db",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "An employee entry exists in the DB",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I perform GET API call using the employee ID",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "The API call will return the employee name",
  "keyword": "Then "
});
formatter.match({
  "location": "RestApiStepsDef.dbQuerySetUp()"
});
formatter.result({
  "duration": 91978,
  "status": "passed"
});
formatter.match({
  "location": "RestApiStepsDef.getEmployee()"
});
formatter.result({
  "duration": 11739692,
  "status": "passed"
});
formatter.match({
  "location": "RestApiStepsDef.retrieveInformation()"
});
formatter.result({
  "duration": 6432572,
  "status": "passed"
});
formatter.before({
  "duration": 37896,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Delete an entry",
  "description": "",
  "id": "test-rest-api-calls;delete-an-entry",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "An employee entry exists in the DB",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I perform DELETE API call using the employee ID",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the user will no longer exist",
  "keyword": "Then "
});
formatter.match({
  "location": "RestApiStepsDef.dbQuerySetUp()"
});
formatter.result({
  "duration": 40265,
  "status": "passed"
});
formatter.match({
  "location": "RestApiStepsDef.deleteEmployee()"
});
formatter.result({
  "duration": 4168639,
  "status": "passed"
});
formatter.match({
  "location": "RestApiStepsDef.validateDeletedEntry()"
});
formatter.result({
  "duration": 5279881,
  "status": "passed"
});
});