package com.examples.test.training.implementation;

import static io.restassured.RestAssured.given;

import com.examples.test.training.constants.RestApiAuthorsConstants;

import org.junit.Assert;

import io.restassured.http.ContentType;
import io.restassured.response.Response;

public class RestApiAuthorsImplementation {

	Response response = null;
	public static int statusCode;
	public static String responseBody;
	public static String id;

	public void getAuthorsList() {

		response = given().contentType(ContentType.JSON).get(RestApiAuthorsConstants.BASE_URL);

		statusCode = response.getStatusCode();
		responseBody = response.getBody().asString();

	}

	public void verifyResponseCode() {

		Assert.assertEquals(200, statusCode);

	}

	public void verifyAuthorsList() {
		Assert.assertTrue(responseBody.contains("FirstName"));
	}

	public void getAuthor() {

		response = given()
				  .contentType(ContentType.JSON)
				  .baseUri(RestApiAuthorsConstants.BASE_URL)
		          .pathParam("id", 33)
		          .when()
		          .get("/{id}");

		
		responseBody = response.getBody().asString();
		System.out.println(responseBody);
	}

	public void verifyAuthor() {

		Assert.assertTrue(responseBody.contains("First Name 33"));

	}
}