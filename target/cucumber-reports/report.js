$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/DBConnection.feature");
formatter.feature({
  "name": "DB Connection test",
  "description": "  I want to test my DB connection.",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@DB"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Test for select operation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I send a select query using \u003cfilm_id\u003e to the DB",
  "keyword": "When "
});
formatter.step({
  "name": "I will get title \u003ctitle\u003e in the response",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "film_id",
        "title"
      ]
    },
    {
      "cells": [
        "1",
        "Die Hard"
      ]
    },
    {
      "cells": [
        "3",
        "LOTR: The Two Towers"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test for select operation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DB"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I send a select query using 1 to the DB",
  "keyword": "When "
});
formatter.match({
  "location": "DBConnectionStepDef.selectQuery(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will get title Die Hard in the response",
  "keyword": "Then "
});
formatter.match({
  "location": "DBConnectionStepDef.selectVerify()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Test for select operation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DB"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I send a select query using 3 to the DB",
  "keyword": "When "
});
formatter.match({
  "location": "DBConnectionStepDef.selectQuery(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will get title LOTR: The Two Towers in the response",
  "keyword": "Then "
});
formatter.match({
  "location": "DBConnectionStepDef.anotherSelectVerify()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test for insert operation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Insert"
    }
  ]
});
formatter.step({
  "name": "I send new \u003cinventory_id\u003e, \u003cfilm_id\u003e and \u003cstore_id\u003e information to the DB via insert statement",
  "keyword": "When "
});
formatter.step({
  "name": "New row will be added to the inventory table with inventory_id \u003cinventory_id\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "inventory_id",
        "film_id",
        "store_id"
      ]
    },
    {
      "cells": [
        "9",
        "11",
        "67"
      ]
    },
    {
      "cells": [
        "10",
        "12",
        "22"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test for insert operation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DB"
    },
    {
      "name": "@Insert"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I send new 9, 11 and 67 information to the DB via insert statement",
  "keyword": "When "
});
formatter.match({
  "location": "DBConnectionStepDef.insertStatement(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "New row will be added to the inventory table with inventory_id 9",
  "keyword": "Then "
});
formatter.match({
  "location": "DBConnectionStepDef.newRowVerify(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Test for insert operation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DB"
    },
    {
      "name": "@Insert"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I send new 10, 12 and 22 information to the DB via insert statement",
  "keyword": "When "
});
formatter.match({
  "location": "DBConnectionStepDef.insertStatement(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "New row will be added to the inventory table with inventory_id 10",
  "keyword": "Then "
});
formatter.match({
  "location": "DBConnectionStepDef.newRowVerify(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test for update operation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Update"
    }
  ]
});
formatter.step({
  "name": "I send an update query to change \u003cfilm_id\u003e where actor_id is \u003cactor_id\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "The rows in the DB will be successfully updated",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "film_id",
        "actor_id"
      ]
    },
    {
      "cells": [
        "33",
        "3"
      ]
    },
    {
      "cells": [
        "11",
        "1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test for update operation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DB"
    },
    {
      "name": "@Update"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I send an update query to change 33 where actor_id is 3",
  "keyword": "When "
});
formatter.match({
  "location": "DBConnectionStepDef.updateQuery(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The rows in the DB will be successfully updated",
  "keyword": "Then "
});
formatter.match({
  "location": "DBConnectionStepDef.verifyUpdate()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Test for update operation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DB"
    },
    {
      "name": "@Update"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I send an update query to change 11 where actor_id is 1",
  "keyword": "When "
});
formatter.match({
  "location": "DBConnectionStepDef.updateQuery(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The rows in the DB will be successfully updated",
  "keyword": "Then "
});
formatter.match({
  "location": "DBConnectionStepDef.verifyUpdate()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test for delete operation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Delete"
    }
  ]
});
formatter.step({
  "name": "I send a delete query using the \u003cfilm_id\u003e to the film_category table",
  "keyword": "When "
});
formatter.step({
  "name": "An existing entry with id \u003ccategory_id\u003e will be successfully deleted",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "film_id",
        "category_id"
      ]
    },
    {
      "cells": [
        "6",
        "6"
      ]
    },
    {
      "cells": [
        "7",
        "7"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test for delete operation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DB"
    },
    {
      "name": "@Delete"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I send a delete query using the 6 to the film_category table",
  "keyword": "When "
});
formatter.match({
  "location": "DBConnectionStepDef.deleteQuery(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "An existing entry with id 6 will be successfully deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "DBConnectionStepDef.verifyDelete(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Test for delete operation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DB"
    },
    {
      "name": "@Delete"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I send a delete query using the 7 to the film_category table",
  "keyword": "When "
});
formatter.match({
  "location": "DBConnectionStepDef.deleteQuery(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "An existing entry with id 7 will be successfully deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "DBConnectionStepDef.verifyDelete(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/OnlineShop.feature");
formatter.feature({
  "name": "Online Bookshop",
  "description": "  I want to create test scenarios about online bookshop operations",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have an existing account with an online bookshop",
  "keyword": "Given "
});
formatter.match({
  "location": "OnlineShopStepDef.setUp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I log into the website",
  "keyword": "When "
});
formatter.match({
  "location": "OnlineShopStepDef.login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Choose a product from random category",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I extend the Категории menu and choose book category",
  "keyword": "And "
});
formatter.match({
  "location": "OnlineShopStepDef.extendCategories()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I choose a book from the list",
  "keyword": "And "
});
formatter.match({
  "location": "OnlineShopStepDef.chooseBookFromList()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The book description will be loaded with price and an option to order",
  "keyword": "Then "
});
formatter.match({
  "location": "OnlineShopStepDef.bookDetailsValidation()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have an existing account with an online bookshop",
  "keyword": "Given "
});
formatter.match({
  "location": "OnlineShopStepDef.setUp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I log into the website",
  "keyword": "When "
});
formatter.match({
  "location": "OnlineShopStepDef.login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search for a product",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I search for a specific book",
  "keyword": "And "
});
formatter.match({
  "location": "OnlineShopStepDef.bookSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will be able to select the book from the search results",
  "keyword": "Then "
});
formatter.match({
  "location": "OnlineShopStepDef.selectBookFromSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The book description will be loaded with price and an option to order",
  "keyword": "And "
});
formatter.match({
  "location": "OnlineShopStepDef.bookDetailsValidation()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have an existing account with an online bookshop",
  "keyword": "Given "
});
formatter.match({
  "location": "OnlineShopStepDef.setUp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I log into the website",
  "keyword": "When "
});
formatter.match({
  "location": "OnlineShopStepDef.login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add a book to the basket",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I search and load a specific book",
  "keyword": "And "
});
formatter.match({
  "location": "OnlineShopStepDef.searchBook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Add to basket option",
  "keyword": "And "
});
formatter.match({
  "location": "OnlineShopStepDef.addToBasket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The book will be added to the basket",
  "keyword": "Then "
});
formatter.match({
  "location": "OnlineShopStepDef.basketValidation()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have an existing account with an online bookshop",
  "keyword": "Given "
});
formatter.match({
  "location": "OnlineShopStepDef.setUp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I log into the website",
  "keyword": "When "
});
formatter.match({
  "location": "OnlineShopStepDef.login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Edit the basket",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I add a book to the basket",
  "keyword": "And "
});
formatter.match({
  "location": "OnlineShopStepDef.addAbookToBasket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I load the added products",
  "keyword": "And "
});
formatter.match({
  "location": "OnlineShopStepDef.loadBasket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will be able to increase the quantity",
  "keyword": "Then "
});
formatter.match({
  "location": "OnlineShopStepDef.increaseQuantity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will be able to remove the products from the basket",
  "keyword": "And "
});
formatter.match({
  "location": "OnlineShopStepDef.emptyBasket()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/RestApiAuthors.feature");
formatter.feature({
  "name": "Authors REST API",
  "description": "  I want to get, create,edit and delete an entry in the sample DB",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Get list of all authors",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I send GET request to the authors endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "RestApiAuthorsStepDef.getAllAuthors()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response code will be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "RestApiAuthorsStepDef.verifyResponseCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The service will return a list of existing entries",
  "keyword": "And "
});
formatter.match({
  "location": "RestApiAuthorsStepDef.verifyAuthorsList()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get author by authorID",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I send GET request using the author\u0027s ID",
  "keyword": "When "
});
formatter.match({
  "location": "RestApiAuthorsStepDef.getSpecificAuthor()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response code will be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "RestApiAuthorsStepDef.verifyResponseCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The service will return the entry that corresponds to the authorID",
  "keyword": "And "
});
formatter.match({
  "location": "RestApiAuthorsStepDef.verifyEntry()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get authorID by bookID",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I send GET request using a book\u0027s ID",
  "keyword": "When "
});
formatter.match({
  "location": "RestApiAuthorsStepDef.getBook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response code will be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "RestApiAuthorsStepDef.verifyResponseCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The service will return the entry that corresponds to the bookID",
  "keyword": "And "
});
formatter.match({
  "location": "RestApiAuthorsStepDef.verifyGetAuthorByBook()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create an Author entry",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I send POST request to the authors endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "RestApiAuthorsStepDef.createEntry()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response code will be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "RestApiAuthorsStepDef.verifyResponseCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The service will return new author ID",
  "keyword": "And "
});
formatter.match({
  "location": "RestApiAuthorsStepDef.verifyNewEntry()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Edit an Author entry",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I send PUT request to the authors endpoint changing the author\u0027s name",
  "keyword": "When "
});
formatter.match({
  "location": "RestApiAuthorsStepDef.editEntry()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response code will be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "RestApiAuthorsStepDef.verifyResponseCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The service will return the updated name in the details",
  "keyword": "And "
});
formatter.match({
  "location": "RestApiAuthorsStepDef.verifyResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete an Author entry",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I send DELETE request",
  "keyword": "When "
});
formatter.match({
  "location": "RestApiAuthorsStepDef.deleteEntry()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response code will be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "RestApiAuthorsStepDef.verifyResponseCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/SOAPService.feature");
formatter.feature({
  "name": "Bank branches search based on a BLZ codes",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SOAP"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Find bank branches in Germany using BLZ codes",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I run a SOAP request using code \u003cBLZ\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "I verify the location \u003clocation\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "the bank name is \u003cname\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BLZ",
        "location",
        "name"
      ]
    },
    {
      "cells": [
        "31460290",
        "Viersen",
        "Volksbank Viersen"
      ]
    },
    {
      "cells": [
        "31061108",
        "Willich",
        "Volksbank Willich"
      ]
    },
    {
      "cells": [
        "31261282",
        "Erkelenz",
        "Volksbank Erkelenz-Hückelhoven-Wegberg"
      ]
    },
    {
      "cells": [
        "34270094",
        "Solingen",
        "Deutsche Bank"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Find bank branches in Germany using BLZ codes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SOAP"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I run a SOAP request using code 31460290",
  "keyword": "Given "
});
formatter.match({
  "location": "SOAPStepDefs.runRequest(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the location Viersen",
  "keyword": "Then "
});
formatter.match({
  "location": "SOAPStepDefs.verifyViersen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the bank name is Volksbank Viersen",
  "keyword": "And "
});
formatter.match({
  "location": "SOAPStepDefs.verifyVolksbankViersen()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Find bank branches in Germany using BLZ codes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SOAP"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I run a SOAP request using code 31061108",
  "keyword": "Given "
});
formatter.match({
  "location": "SOAPStepDefs.runRequest(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the location Willich",
  "keyword": "Then "
});
formatter.match({
  "location": "SOAPStepDefs.verifyWillich()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the bank name is Volksbank Willich",
  "keyword": "And "
});
formatter.match({
  "location": "SOAPStepDefs.verifyVolksbankWillich()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Find bank branches in Germany using BLZ codes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SOAP"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I run a SOAP request using code 31261282",
  "keyword": "Given "
});
formatter.match({
  "location": "SOAPStepDefs.runRequest(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the location Erkelenz",
  "keyword": "Then "
});
formatter.match({
  "location": "SOAPStepDefs.verifyErkelenz()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the bank name is Volksbank Erkelenz-Hückelhoven-Wegberg",
  "keyword": "And "
});
formatter.match({
  "location": "SOAPStepDefs.verifyVolksbankErkelenzHückelhovenWegberg()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Find bank branches in Germany using BLZ codes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SOAP"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I run a SOAP request using code 34270094",
  "keyword": "Given "
});
formatter.match({
  "location": "SOAPStepDefs.runRequest(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the location Solingen",
  "keyword": "Then "
});
formatter.match({
  "location": "SOAPStepDefs.verifySolingen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the bank name is Deutsche Bank",
  "keyword": "And "
});
formatter.match({
  "location": "SOAPStepDefs.verifyDeutscheBank()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/UserRegistration.feature");
formatter.feature({
  "name": "User Registration",
  "description": "  I want to register new user in WordPress.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Register new user in WordPress",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I want to create new user profile",
  "keyword": "Given "
});
formatter.match({
  "location": "UserRegStepDefs.generateUsernamePassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill out the form and click on the Create Account button",
  "keyword": "When "
});
formatter.match({
  "location": "UserRegStepDefs.enterNewRegData()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "My account is created and I\u0027m able to log into WordPress with that account",
  "keyword": "Then "
});
formatter.match({
  "location": "UserRegStepDefs.accountCreatedSuccessfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login attempt with invalid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I want to validate error message from WordPress",
  "keyword": "Given "
});
formatter.match({
  "location": "UserRegStepDefs.generateCredentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter invalid credentials and click on Login",
  "keyword": "When "
});
formatter.match({
  "location": "UserRegStepDefs.enterInvalidUsername()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I won\u0027t be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "UserRegStepDefs.loginFailed()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/restAPI.feature");
formatter.feature({
  "name": "Test REST API calls",
  "description": "  I want to execute API calls to create and retrieve information",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Create an entry in the DB",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I want to create new employee entry in the DB",
  "keyword": "Given "
});
formatter.match({
  "location": "RestApiStepsDef.setUp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send my json to the POST endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "RestApiStepsDef.postJson()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see response 200",
  "keyword": "Then "
});
formatter.match({
  "location": "RestApiStepsDef.validateResponse(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response body will contain new employee ID",
  "keyword": "And "
});
formatter.match({
  "location": "RestApiStepsDef.addedEntry()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Retrieve information from the DB",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "An employee entry exists in the DB",
  "keyword": "Given "
});
formatter.match({
  "location": "RestApiStepsDef.dbQuerySetUp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I perform GET API call using the employee ID",
  "keyword": "When "
});
formatter.match({
  "location": "RestApiStepsDef.getEmployee()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The API call will return the employee name",
  "keyword": "Then "
});
formatter.match({
  "location": "RestApiStepsDef.retrieveInformation()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Edit an entry in the DB",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I perform PUT API call using the employee ID",
  "keyword": "When "
});
formatter.match({
  "location": "RestApiStepsDef.editEmployee()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The API call will return the updated data",
  "keyword": "Then "
});
formatter.match({
  "location": "RestApiStepsDef.verifyUpdatedEmployee()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete an entry",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "An employee entry exists in the DB",
  "keyword": "Given "
});
formatter.match({
  "location": "RestApiStepsDef.dbQuerySetUp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I perform DELETE API call using the employee ID",
  "keyword": "When "
});
formatter.match({
  "location": "RestApiStepsDef.deleteEmployee()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user will no longer exist",
  "keyword": "Then "
});
formatter.match({
  "location": "RestApiStepsDef.validateDeletedEntry()"
});
formatter.result({
  "status": "passed"
});
});