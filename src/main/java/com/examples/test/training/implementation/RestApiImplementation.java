package com.examples.test.training.implementation;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;
import com.examples.test.training.testData.PostJSONRestApi;
import com.examples.test.training.testData.PutJSONRestApi;

import static io.restassured.RestAssured.given;
import static org.junit.Assert.assertEquals;
import static org.junit.matchers.JUnitMatchers.containsString;

public class RestApiImplementation {

	Response response = null;
	String employeeName = null;
	public static int statusCode;
	public static String newID;
	public static String requestBody;
	public static String updatedName;

	public void setUp(String payload) {
		String URL = "http://dummy.restapiexample.com/api/v1/employees";
		given().contentType(ContentType.JSON).get(URL).then().statusCode(200);
	}

	public void postJson() {
		PostJSONRestApi requestBody = new PostJSONRestApi();

		requestBody.setName("Desi Test");
		requestBody.setSalary(1234);
		requestBody.setAge(34);

		response = given().contentType(ContentType.JSON).body(requestBody).when()
				.post("http://dummy.restapiexample.com/api/v1/create");

		String json = response.getBody().asString();
		JsonPath jsonPath = new JsonPath(json);
		newID = jsonPath.getJsonObject("id");
		// System.out.println(newID);

		System.out.println("Response :" + response.asString());
		statusCode = response.getStatusCode();
		// System.out.println(statusCode);
	}

	public void validateResponse() {

		assertEquals(200, statusCode);
		// System.out.print("Status Code: " + statusCode);
	}

	public void validateID() {
		Assert.assertNotNull(newID);
		// System.out.println(newID);
	}

	public void newEmployeeID() {
		String newEmployee = newID;
		System.out.println(newEmployee);
	}

	public void getExistingEmployee() {
		String newEmployee = newID;
		System.out.println(newEmployee);

		given().contentType("application/json").pathParam("employeeID", newEmployee).when()
				.get("http://dummy.restapiexample.com/api/v1/employee/{employeeID}", newEmployee).then().assertThat()
				.statusCode(200);

	}

	public void returnEmployeeName() {

		String newEmployee = newID;
		System.out.println(newEmployee);
		given().contentType("application/json").pathParam("employeeID", newEmployee).when()
				.get("http://dummy.restapiexample.com/api/v1/employee/{employeeID}", newEmployee).then()
				.content(containsString("employee_name"));

	}

	public void editEmployeeEntry() {
		PutJSONRestApi putRequestBody = new PutJSONRestApi();

		String newEmployee = newID;

		putRequestBody.setName("Desi Updated Name");
		putRequestBody.setSalary(1234);
		putRequestBody.setAge(34);

		response = given().contentType("application/json").pathParam("employeeID", newEmployee).body(putRequestBody)
				.when().put("http://dummy.restapiexample.com/api/v1/update/{employeeID}", newEmployee);

		String json = response.getBody().asString();
		JsonPath jsonPath = new JsonPath(json);
		System.out.println(json);
		updatedName = jsonPath.getJsonObject("name");
		System.out.println(updatedName);

		System.out.println("Response :" + response.asString());
		statusCode = response.getStatusCode();

	}
	public void verifyEditedEmployee() {
		
		Assert.assertEquals("Desi Updated Name", updatedName);
		
	}
	public void deleteEmployee() {

		String newEmployee = newID;

		RestAssured.given().contentType("application/json").pathParam("employeeID", newEmployee).when()
				.delete("http://dummy.restapiexample.com/api/v1/delete/{employeeID}", newEmployee).then()
				.content(containsString("success"));

	}

	public void validateDeletedEntry() {
		String newEmployee = newID;

		RestAssured.given().contentType("application/json").pathParam("employeeID", newEmployee).when()
				.get("http://dummy.restapiexample.com/api/v1/employee/{employeeID}", newEmployee).then()
				.content(containsString("false"));

	}
}