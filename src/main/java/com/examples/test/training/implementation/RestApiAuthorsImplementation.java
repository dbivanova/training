package com.examples.test.training.implementation;

import static io.restassured.RestAssured.given;

import com.examples.test.training.constants.RestApiAuthorsConstants;

import org.apache.commons.lang3.RandomStringUtils;
import org.apache.commons.lang3.RandomUtils;
import org.junit.Assert;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import testData.PostJSONAuthors;

public class RestApiAuthorsImplementation {

	Response response = null;
	public static int statusCode;
	public static String responseBody;
	public static String id;
	public static String bookId;

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
		response = RestAssured.given().pathParam("id", 33).when().get(RestApiAuthorsConstants.BASE_URL + "/{id}");

		responseBody = response.getBody().asString();
	}

	public void verifyAuthor() {

		Assert.assertTrue(responseBody.contains("\"ID\":33"));

	}

	public void getBookByID() {

		response = RestAssured.given().pathParam("bookId", 24).when()
				.get(RestApiAuthorsConstants.BOOKS_URL + "/{bookId}");

		responseBody = response.getBody().asString();
		System.out.println(responseBody);
	}

	public void verifyGetAuthorByBookID() {

		Assert.assertTrue(responseBody.contains("\"IDBook\":24"));

	}

	public void postAuthor() {

		PostJSONAuthors requestBody = new PostJSONAuthors();
		requestBody.setAuthorId(RandomUtils.nextInt(1, 500));
		requestBody.setBookID(RandomUtils.nextInt(1, 500));
		requestBody.setFirstName(RandomStringUtils.randomAlphabetic(5));
		requestBody.setLastName(RandomStringUtils.randomAlphabetic(5));

		response = RestAssured.given().body(requestBody).when().contentType(ContentType.JSON)
				.post(RestApiAuthorsConstants.BASE_URL);

		responseBody = response.getBody().asString();

	}

	public void validateNewAuthor() {
		Assert.assertTrue(responseBody.contains("ID"));

	}

	public void editExistingAuthor() {

		PostJSONAuthors requestBody = new PostJSONAuthors();
		requestBody.setAuthorId(42);
		requestBody.setBookID(RandomUtils.nextInt(1, 500));
		requestBody.setFirstName(RandomStringUtils.randomAlphabetic(5));
		requestBody.setLastName(RandomStringUtils.randomAlphabetic(5));

		response = RestAssured.given().body(requestBody).when().contentType(ContentType.JSON)
				.put(RestApiAuthorsConstants.BASE_URL + "/42");

		responseBody = response.getBody().asString();

		System.out.println(responseBody);
	}

	public void validateEditedEntry() {

		Assert.assertTrue(responseBody.contains("\"ID\":42"));

	}

	public void deleteAuthor() {

		RestAssured.given().when().delete(RestApiAuthorsConstants.BASE_URL + "/123");

	}
}
