$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/estafet_2/workspace/training/src/test/resources/SOAPFeatures/SOAPService.feature");
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
  "name": "I want to search for specific bank branches in Germay",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I run a SOAP request using code \u003cBLZ\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I verify the location \u003clocation\u003e in step",
  "keyword": "Then "
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
        "location"
      ],
      "line": 9,
      "id": "bank-branches-search-based-on-a-blz-codes;find-bank-branches-in-germany-using-blz-codes;;1"
    },
    {
      "cells": [
        "31460290",
        "Viersen"
      ],
      "line": 10,
      "id": "bank-branches-search-based-on-a-blz-codes;find-bank-branches-in-germany-using-blz-codes;;2"
    },
    {
      "cells": [
        "31061108",
        "Willich"
      ],
      "line": 11,
      "id": "bank-branches-search-based-on-a-blz-codes;find-bank-branches-in-germany-using-blz-codes;;3"
    },
    {
      "cells": [
        "31261282",
        "Erkelenz"
      ],
      "line": 12,
      "id": "bank-branches-search-based-on-a-blz-codes;find-bank-branches-in-germany-using-blz-codes;;4"
    },
    {
      "cells": [
        "34270094",
        "Solingen"
      ],
      "line": 13,
      "id": "bank-branches-search-based-on-a-blz-codes;find-bank-branches-in-germany-using-blz-codes;;5"
    }
  ],
  "keyword": "Examples"
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
  "name": "I want to search for specific bank branches in Germay",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I run a SOAP request using code 31460290",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I verify the location Viersen in step",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "name": "I want to search for specific bank branches in Germay",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I run a SOAP request using code 31061108",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I verify the location Willich in step",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "name": "I want to search for specific bank branches in Germay",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I run a SOAP request using code 31261282",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I verify the location Erkelenz in step",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "name": "I want to search for specific bank branches in Germay",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I run a SOAP request using code 34270094",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I verify the location Solingen in step",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Find bank names using BLZ codes",
  "description": "",
  "id": "bank-branches-search-based-on-a-blz-codes;find-bank-names-using-blz-codes",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I want to search for bank names in Germay",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I run a SOAP request using code \u003cBLZ\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I verify the bank name \u003cname\u003e in step",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "bank-branches-search-based-on-a-blz-codes;find-bank-names-using-blz-codes;",
  "rows": [
    {
      "cells": [
        "BLZ",
        "name"
      ],
      "line": 22,
      "id": "bank-branches-search-based-on-a-blz-codes;find-bank-names-using-blz-codes;;1"
    },
    {
      "cells": [
        "43020000",
        "Westfalenbank"
      ],
      "line": 23,
      "id": "bank-branches-search-based-on-a-blz-codes;find-bank-names-using-blz-codes;;2"
    },
    {
      "cells": [
        "43000000",
        "Bundesbank"
      ],
      "line": 24,
      "id": "bank-branches-search-based-on-a-blz-codes;find-bank-names-using-blz-codes;;3"
    },
    {
      "cells": [
        "43060129",
        "Volksbank Bochum Witten"
      ],
      "line": 25,
      "id": "bank-branches-search-based-on-a-blz-codes;find-bank-names-using-blz-codes;;4"
    },
    {
      "cells": [
        "43080083",
        "Dresdner Bank"
      ],
      "line": 26,
      "id": "bank-branches-search-based-on-a-blz-codes;find-bank-names-using-blz-codes;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Find bank names using BLZ codes",
  "description": "",
  "id": "bank-branches-search-based-on-a-blz-codes;find-bank-names-using-blz-codes;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I want to search for bank names in Germay",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I run a SOAP request using code 43020000",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I verify the bank name Westfalenbank in step",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 24,
  "name": "Find bank names using BLZ codes",
  "description": "",
  "id": "bank-branches-search-based-on-a-blz-codes;find-bank-names-using-blz-codes;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I want to search for bank names in Germay",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I run a SOAP request using code 43000000",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I verify the bank name Bundesbank in step",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 25,
  "name": "Find bank names using BLZ codes",
  "description": "",
  "id": "bank-branches-search-based-on-a-blz-codes;find-bank-names-using-blz-codes;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I want to search for bank names in Germay",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I run a SOAP request using code 43060129",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I verify the bank name Volksbank Bochum Witten in step",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 26,
  "name": "Find bank names using BLZ codes",
  "description": "",
  "id": "bank-branches-search-based-on-a-blz-codes;find-bank-names-using-blz-codes;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I want to search for bank names in Germay",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I run a SOAP request using code 43080083",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I verify the bank name Dresdner Bank in step",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});