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
formatter.scenarioOutline({
  "name": "Insert into film",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I send new \u003cfilm_id\u003e, \u003ctitle\u003e, \u003cdescription\u003e, \u003crental_duration\u003e and \u003crental_rate\u003e to the DB via insert statement",
  "keyword": "When "
});
formatter.step({
  "name": "I send a select statement using id \u003cfilm_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I will get title \"Primal Fear\" in the response",
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
        "title",
        "description",
        "rental_duration",
        "rental_rate"
      ]
    },
    {
      "cells": [
        "9",
        "\"Primal Fear\"",
        "\"Thriller movie\"",
        "72",
        "10"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Insert into film",
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
  "name": "I send new 9, \"Primal Fear\", \"Thriller movie\", 72 and 10 to the DB via insert statement",
  "keyword": "When "
});
formatter.match({
  "location": "DBConnectionStepDef.insertNewFilm(int,String,String,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send a select statement using id 9",
  "keyword": "And "
});
formatter.match({
  "location": "DBConnectionStepDef.selectNewFilm(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will get title \"Primal Fear\" in the response",
  "keyword": "Then "
});
formatter.match({
  "location": "DBConnectionStepDef.verifyNewFilm()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Update film row",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I send an update statement to change the title \u003ctitle\u003e using id \u003cfilm_id\u003e to the film table",
  "keyword": "When "
});
formatter.step({
  "name": "The table will be successfully updated",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "title",
        "film_id"
      ]
    },
    {
      "cells": [
        "\"Along Came Spider\"",
        "9"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Update film row",
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
  "name": "I send an update statement to change the title \"Along Came Spider\" using id 9 to the film table",
  "keyword": "When "
});
formatter.match({
  "location": "DBConnectionStepDef.updateNewFilm(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The table will be successfully updated",
  "keyword": "Then "
});
formatter.match({
  "location": "DBConnectionStepDef.verifyUpdatedFilm()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Delete film row",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I execute a delete statement using id \u003cfilm_id\u003e in the film table",
  "keyword": "When "
});
formatter.step({
  "name": "The existing entry with title \u003ctitle\u003e will be successfully deleted",
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
        "9",
        "\"Along Came Spider\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Delete film row",
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
  "name": "I execute a delete statement using id 9 in the film table",
  "keyword": "When "
});
formatter.match({
  "location": "DBConnectionStepDef.deleteNewFilm(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The existing entry with title \"Along Came Spider\" will be successfully deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "DBConnectionStepDef.verifyDelete(String)"
});
formatter.result({
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
  "error_message": "org.openqa.selenium.WebDriverException: Reached error page: about:neterror?e\u003dnetTimeout\u0026u\u003dhttps%3A//www.bard.bg/\u0026c\u003dUTF-8\u0026f\u003dregular\u0026d\u003d%D0%A1%D1%8A%D1%80%D0%B2%D1%8A%D1%80%D1%8A%D1%82%20www.bard.bg%20%D0%BF%D1%80%D0%BE%D1%81%D1%80%D0%BE%D1%87%D0%B8%20%D0%B7%D0%B0%D0%B4%D0%B0%D0%B4%D0%B5%D0%BD%D0%BE%D1%82%D0%BE%20%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%20%D0%B7%D0%B0%20%D0%BE%D1%82%D0%B3%D0%BE%D0%B2%D0%BE%D1%80.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027TOSHIBA\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 68.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20190717172542, moz:geckodriverVersion: 0.24.0, moz:headless: false, moz:processID: 5928, moz:profile: C:\\Windows\\Temp\\rust_mozpro..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 6.3, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 2b651b72-de7f-4ee2-8ca6-d2c4067cde6b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:190)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:124)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:51)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:577)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.examples.test.training.glue.OnlineShopStepDef.setUp(OnlineShopStepDef.java:43)\r\n\tat ✽.I have an existing account with an online bookshop(file:src/test/resources/Features/OnlineShop.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I log into the website",
  "keyword": "When "
});
formatter.match({
  "location": "OnlineShopStepDef.login()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Choose a product from category",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UI"
    }
  ]
});
formatter.step({
  "name": "I extend the Категории menu and choose book category",
  "keyword": "And "
});
formatter.match({
  "location": "OnlineShopStepDef.extendCategories()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I choose a book from the list",
  "keyword": "And "
});
formatter.match({
  "location": "OnlineShopStepDef.chooseBookFromList()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The book description will be loaded with price and an option to order",
  "keyword": "Then "
});
formatter.match({
  "location": "OnlineShopStepDef.bookDetailsValidation()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Finished scenario");
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
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
  "error_message": "org.openqa.selenium.WebDriverException: Reached error page: about:neterror?e\u003ddnsNotFound\u0026u\u003dhttps%3A//www.bard.bg/\u0026c\u003dUTF-8\u0026f\u003dregular\u0026d\u003d%D0%9D%D1%8F%D0%BC%D0%B0%20%D0%B2%D1%80%D1%8A%D0%B7%D0%BA%D0%B0%20%D1%81%D1%8A%D1%81%20%D1%81%D1%8A%D1%80%D0%B2%D1%8A%D1%80%D0%B0%20%D0%BD%D0%B0%20%E2%80%9Ewww.bard.bg%E2%80%9C.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027TOSHIBA\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 68.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20190717172542, moz:geckodriverVersion: 0.24.0, moz:headless: false, moz:processID: 8540, moz:profile: C:\\Windows\\Temp\\rust_mozpro..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 6.3, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 96f523b2-8f01-4dc4-9679-c02a7559ad7e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:190)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:124)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:51)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:577)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.examples.test.training.glue.OnlineShopStepDef.setUp(OnlineShopStepDef.java:43)\r\n\tat ✽.I have an existing account with an online bookshop(file:src/test/resources/Features/OnlineShop.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I log into the website",
  "keyword": "When "
});
formatter.match({
  "location": "OnlineShopStepDef.login()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Search for a product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UI"
    }
  ]
});
formatter.step({
  "name": "I search for a specific book",
  "keyword": "And "
});
formatter.match({
  "location": "OnlineShopStepDef.bookSearch()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I will be able to select the book from the search results",
  "keyword": "Then "
});
formatter.match({
  "location": "OnlineShopStepDef.selectBookFromSearch()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The book description will be loaded with price and an option to order",
  "keyword": "And "
});
formatter.match({
  "location": "OnlineShopStepDef.bookDetailsValidation()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Finished scenario");
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
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
  "error_message": "org.openqa.selenium.TimeoutException: Timeout loading page after 300000ms\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027TOSHIBA\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 68.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20190717172542, moz:geckodriverVersion: 0.24.0, moz:headless: false, moz:processID: 2608, moz:profile: C:\\Windows\\Temp\\rust_mozpro..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 6.3, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: c30fde11-deb3-44e1-8729-b2a98c4c0e5e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:190)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:124)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:51)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:577)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.examples.test.training.glue.OnlineShopStepDef.setUp(OnlineShopStepDef.java:43)\r\n\tat ✽.I have an existing account with an online bookshop(file:src/test/resources/Features/OnlineShop.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I log into the website",
  "keyword": "When "
});
formatter.match({
  "location": "OnlineShopStepDef.login()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Add a book to the basket",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UI"
    }
  ]
});
formatter.step({
  "name": "I search and load a specific book",
  "keyword": "And "
});
formatter.match({
  "location": "OnlineShopStepDef.searchBook()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on the Add to basket option",
  "keyword": "And "
});
formatter.match({
  "location": "OnlineShopStepDef.addToBasket()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The book will be added to the basket",
  "keyword": "Then "
});
formatter.match({
  "location": "OnlineShopStepDef.basketValidation()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Finished scenario");
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
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
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UI"
    }
  ]
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
formatter.write("Finished scenario");
formatter.after({
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
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: *[name\u003d\u0027email\u0027]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027TOSHIBA\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 68.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20190717172542, moz:geckodriverVersion: 0.24.0, moz:headless: false, moz:processID: 3868, moz:profile: C:\\Windows\\Temp\\rust_mozpro..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 6.3, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 9476d3cd-e387-4ec6-af24-2cd4a874af9a\n*** Element info: {Using\u003dname, value\u003demail}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:190)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:124)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:51)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:577)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:328)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:320)\r\n\tat com.examples.test.training.glue.OnlineShopStepDef.login(OnlineShopStepDef.java:53)\r\n\tat ✽.I log into the website(file:src/test/resources/Features/OnlineShop.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Add to favourites",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UI"
    }
  ]
});
formatter.step({
  "name": "I extend the Категории menu and choose random category",
  "keyword": "And "
});
formatter.match({
  "location": "OnlineShopStepDef.i_extend_the_Категории_menu_and_choose_random_category()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I choose random book from the list",
  "keyword": "And "
});
formatter.match({
  "location": "OnlineShopStepDef.i_choose_random_book_from_the_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Add to favourites",
  "keyword": "And "
});
formatter.match({
  "location": "OnlineShopStepDef.i_click_on_Add_to_favourites()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The book will appear in the favourites list",
  "keyword": "Then "
});
formatter.match({
  "location": "OnlineShopStepDef.the_book_will_appear_in_the_favourites_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Finished scenario");
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
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
  "error_message": "java.net.SocketTimeoutException: Read timed out\r\n\tat java.net.SocketInputStream.socketRead0(Native Method)\r\n\tat java.net.SocketInputStream.socketRead(SocketInputStream.java:116)\r\n\tat java.net.SocketInputStream.read(SocketInputStream.java:171)\r\n\tat java.net.SocketInputStream.read(SocketInputStream.java:141)\r\n\tat org.apache.http.impl.io.AbstractSessionInputBuffer.fillBuffer(AbstractSessionInputBuffer.java:160)\r\n\tat org.apache.http.impl.io.SocketInputBuffer.fillBuffer(SocketInputBuffer.java:84)\r\n\tat org.apache.http.impl.io.AbstractSessionInputBuffer.readLine(AbstractSessionInputBuffer.java:273)\r\n\tat org.apache.http.impl.conn.LoggingSessionInputBuffer.readLine(LoggingSessionInputBuffer.java:122)\r\n\tat org.apache.http.impl.conn.DefaultHttpResponseParser.parseHead(DefaultHttpResponseParser.java:140)\r\n\tat org.apache.http.impl.conn.DefaultHttpResponseParser.parseHead(DefaultHttpResponseParser.java:57)\r\n\tat org.apache.http.impl.io.AbstractMessageParser.parse(AbstractMessageParser.java:261)\r\n\tat org.apache.http.impl.AbstractHttpClientConnection.receiveResponseHeader(AbstractHttpClientConnection.java:283)\r\n\tat org.apache.http.impl.conn.DefaultClientConnection.receiveResponseHeader(DefaultClientConnection.java:259)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.receiveResponseHeader(ManagedClientConnectionImpl.java:209)\r\n\tat org.apache.http.protocol.HttpRequestExecutor.doReceiveResponse(HttpRequestExecutor.java:272)\r\n\tat org.apache.http.protocol.HttpRequestExecutor.execute(HttpRequestExecutor.java:124)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryExecute(DefaultRequestDirector.java:686)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:488)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:884)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:82)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:133)\r\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2028)\r\n\tat io.restassured.internal.http.HTTPBuilder.doRequest(HTTPBuilder.java:494)\r\n\tat io.restassured.internal.http.HTTPBuilder.request(HTTPBuilder.java:451)\r\n\tat io.restassured.internal.http.HTTPBuilder$request$2.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:141)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendHttpRequest(RequestSpecificationImpl.groovy:1434)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:154)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1221)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:149)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:141)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:133)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1631)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:154)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1637)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:154)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:166)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy)\r\n\tat com.examples.test.training.implementation.RestApiAuthorsImplementation.getAuthorsList(RestApiAuthorsImplementation.java:24)\r\n\tat com.examples.test.training.glue.RestApiAuthorsStepDef.getAllAuthors(RestApiAuthorsStepDef.java:13)\r\n\tat ✽.I send GET request to the authors endpoint(file:src/test/resources/Features/RestApiAuthors.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The response code will be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "RestApiAuthorsStepDef.verifyResponseCode(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The service will return a list of existing entries",
  "keyword": "And "
});
formatter.match({
  "location": "RestApiAuthorsStepDef.verifyAuthorsList()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "java.lang.AssertionError: expected:\u003c200\u003e but was:\u003c0\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat com.examples.test.training.implementation.RestApiAuthorsImplementation.verifyResponseCode(RestApiAuthorsImplementation.java:33)\r\n\tat com.examples.test.training.glue.RestApiAuthorsStepDef.verifyResponseCode(RestApiAuthorsStepDef.java:19)\r\n\tat ✽.The response code will be 200(file:src/test/resources/Features/RestApiAuthors.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The service will return the entry that corresponds to the authorID",
  "keyword": "And "
});
formatter.match({
  "location": "RestApiAuthorsStepDef.verifyEntry()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "java.lang.AssertionError: expected:\u003c200\u003e but was:\u003c0\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat com.examples.test.training.implementation.RestApiAuthorsImplementation.verifyResponseCode(RestApiAuthorsImplementation.java:33)\r\n\tat com.examples.test.training.glue.RestApiAuthorsStepDef.verifyResponseCode(RestApiAuthorsStepDef.java:19)\r\n\tat ✽.The response code will be 200(file:src/test/resources/Features/RestApiAuthors.feature:16)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The service will return the entry that corresponds to the bookID",
  "keyword": "And "
});
formatter.match({
  "location": "RestApiAuthorsStepDef.verifyGetAuthorByBook()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "java.lang.AssertionError: expected:\u003c200\u003e but was:\u003c0\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat com.examples.test.training.implementation.RestApiAuthorsImplementation.verifyResponseCode(RestApiAuthorsImplementation.java:33)\r\n\tat com.examples.test.training.glue.RestApiAuthorsStepDef.verifyResponseCode(RestApiAuthorsStepDef.java:19)\r\n\tat ✽.The response code will be 200(file:src/test/resources/Features/RestApiAuthors.feature:21)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The service will return new author ID",
  "keyword": "And "
});
formatter.match({
  "location": "RestApiAuthorsStepDef.verifyNewEntry()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "java.lang.AssertionError: expected:\u003c200\u003e but was:\u003c0\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat com.examples.test.training.implementation.RestApiAuthorsImplementation.verifyResponseCode(RestApiAuthorsImplementation.java:33)\r\n\tat com.examples.test.training.glue.RestApiAuthorsStepDef.verifyResponseCode(RestApiAuthorsStepDef.java:19)\r\n\tat ✽.The response code will be 200(file:src/test/resources/Features/RestApiAuthors.feature:26)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The service will return the updated name in the details",
  "keyword": "And "
});
formatter.match({
  "location": "RestApiAuthorsStepDef.verifyResponse()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "java.lang.AssertionError: expected:\u003c200\u003e but was:\u003c0\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat com.examples.test.training.implementation.RestApiAuthorsImplementation.verifyResponseCode(RestApiAuthorsImplementation.java:33)\r\n\tat com.examples.test.training.glue.RestApiAuthorsStepDef.verifyResponseCode(RestApiAuthorsStepDef.java:19)\r\n\tat ✽.The response code will be 200(file:src/test/resources/Features/RestApiAuthors.feature:31)\r\n",
  "status": "failed"
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