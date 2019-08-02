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
import com.examples.test.training.testData.SoapXML;
public class SOAPStepDefs {

	private String BLZ;
	private String responseBody;
	private ValidatableResponse response;
	private static String location;
	private static String res;
	private static String bankName;
	
	SoapXML xmlBody = new SoapXML();
	
	@Before("@SOAP")

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
		location = xmlReturned.get("Envelope.Body.getBankResponse.details.ort");
		bankName = xmlReturned.get("Envelope.Body.getBankResponse.details.bezeichnung");
	}

	@Then("^I verify the location Viersen$")
	public void verifyViersen() {
		Assert.assertTrue(location.contentEquals("Viersen"));
	}
	
	@Then("^the bank name is Volksbank Viersen$")
	public void verifyVolksbankViersen() {
		Assert.assertTrue(bankName.contentEquals("Volksbank Viersen"));
	}
	
	@Then("^I verify the location Willich$")
	public void verifyWillich() {
		Assert.assertTrue(location.contentEquals("Willich"));
	}

	@Then("^the bank name is Volksbank Willich$")
	public void verifyVolksbankWillich() {
		Assert.assertTrue(bankName.contentEquals("Volksbank Willich"));
	}

	@Then("^I verify the location Erkelenz$")
	public void verifyErkelenz() {
		Assert.assertTrue(location.contentEquals("Erkelenz"));
	}
	
	@Then("^the bank name is Volksbank Erkelenz-Hückelhoven-Wegberg$")
	public void verifyVolksbankErkelenzHückelhovenWegberg()  {
		Assert.assertTrue(bankName.contentEquals("Volksbank Erkelenz-Hückelhoven-Wegberg"));
}

	@Then("^I verify the location Solingen$")
	public void verifySolingen() {
		Assert.assertTrue(location.contentEquals("Solingen"));
}

	@Then("^the bank name is Deutsche Bank$")
	public void verifyDeutscheBank() {
		Assert.assertTrue(bankName.contentEquals("Deutsche Bank"));
}

}