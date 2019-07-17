package com.examples.test.training.glue;

import org.junit.Assert;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.xml.XmlPath;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import testData.SoapXML;

public class SOAPStepDefs {

	private String BLZ;
	private String responseBody;
	private ValidatableResponse response;
	private static String location;
	private static String res;
	private static String bankName;
	
	SoapXML xmlBody = new SoapXML();
	
	@Before()

	public void setUp() {
    RestAssured.baseURI = "http://www.thomas-bayer.com";
    RestAssured.basePath = "/axis2/services/BLZService?wsdl";
}	
	@Given("^I run a SOAP request using code (.*?)$")
	public void runRequest(String BLZ) {

		xmlBody.setBLZ(BLZ);
		
			Response res = RestAssured.given()
	            .header("SOAPAction", "Content-Type", "text/xml")
	            .and()
	            .body(xmlBody.getBody())
	            .when()
	            .post(RestAssured.basePath)
	            .then()
	            .statusCode(200)
	            .and()
	            .contentType(ContentType.XML)
	            .and()
	            .log().all()
                .extract().response();
             
		XmlPath xmlReturned= new XmlPath(res.asInputStream());
		String location = xmlReturned.get("Envelope.Body.getBankResponse.details.ort");
		String bankName = xmlReturned.get("Envelope.Body.getBankResponse.details.bezeichnung");
		
	}


	@Then("^I verify the location Viersen$")
	public void i_verify_the_location_Viersen() throws Throwable {
		Assert.assertTrue(bankName.contains("Volksbank"));	}
	
//	@Then("^the bank name is Volksbank Viersen$")
//	public void the_bank_name_is_Volksbank_Viersen() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//	}
//
//	@Then("^I verify the location Willich$")
//	public void i_verify_the_location_Willich() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//	}
//
//	@Then("^the bank name is Volksbank Willich$")
//	public void the_bank_name_is_Volksbank_Willich() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//	}
//
//	@Then("^I verify the location Erkelenz$")
//	public void i_verify_the_location_Erkelenz() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//	}
//
//	@Then("^the bank name is Volksbank Erkelenz-Hückelhoven-Wegberg$")
//	public void the_bank_name_is_Volksbank_Erkelenz_Hückelhoven_Wegberg() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//	}
//
//	@Then("^I verify the location Solingen$")
//	public void i_verify_the_location_Solingen() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//	}
//
//	@Then("^the bank name is Deutsche Bank$")
//	public void the_bank_name_is_Deutsche_Bank() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//	}
//
////	@Then("^I verify the location Viersen$")
////	public void verifyViersen() throws Throwable {
////		Assert.assertTrue(location.contains("Viersen"));
////	}
}