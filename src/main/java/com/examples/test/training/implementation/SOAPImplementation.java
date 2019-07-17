package com.examples.test.training.implementation;

import cucumber.api.java.Before;
import io.restassured.RestAssured;
import io.restassured.response.ValidatableResponse;
import testData.SoapXML;

public class SOAPImplementation {

	private String BLZ;
	SoapXML xmlBody = new SoapXML();
	private ValidatableResponse response;
    
@Before()
    public void setUp() {
	    RestAssured.baseURI = "http://www.thomas-bayer.com";
        RestAssured.basePath = "/axis2/services/BLZService?wsdl";
    }	
public void runRequest() {

	xmlBody.setBLZ(BLZ);
	System.out.println(xmlBody.getBody());

		response = RestAssured.given()
            .header("SOAPAction", "Content-Type", "text/xml")
            .and()
            .body(xmlBody.getBody())
            .when()
            .post(RestAssured.basePath)
            .then()
            .statusCode(200);
//XmlPath jsXpath= new XmlPath(response.asString());
//System.out.println(jsXpath);

}

}

