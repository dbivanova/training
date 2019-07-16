package com.examples.test.training.implementation;

import static org.junit.Assert.*;
import static org.junit.matchers.JUnitMatchers.*;

import io.restassured.response.*;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;

import static io.restassured.RestAssured.given;

public class RestApiImplementation {
	
	 Response response = null;
	 String employeeName = null;
	 public static int statusCode;
	 public static String newID;
	 
public void setUp(String payload) {
	String URL = "http://dummy.restapiexample.com/api/v1/employees";
	given()
	.contentType(ContentType.JSON)
	.get(URL)
	.then()
	.statusCode(200);
}

public void postJson() {
	
	RestAssured.baseURI = "http://dummy.restapiexample.com/api/v1";
	 
	 String requestBody = "{\n" +
	 "  \"name\": \"Desi_test_User3\",\n" +
	 "  \"salary\": \"1000\",\n" +
	 "  \"age\": \"20\"\n" +
	 "}";
	 
 
	 try {
	 response = RestAssured.given()
	 .contentType(ContentType.JSON)
	 .body(requestBody)
	 .when()
	 .post("/create");

	  } catch (Exception e) {
	 e.printStackTrace();
	 }
	 newID = response.jsonPath().getString("id");
	 
	 System.out.println("Response :" + response.asString());
	 statusCode = response.getStatusCode(); 
}

public void validateResponse() {
	
	 assertEquals(200, statusCode);
	// System.out.print("Status Code: " + statusCode);
	}
	
public void validateID() {
	assertNotNull(newID, "New user was created");
	//System.out.println(newID);
}
public void newEmployeeID() {
	String newEmployee = newID;
	System.out.println(newEmployee);
}

public void getExistingEmployee() {
	String newEmployee = newID;
	System.out.println(newEmployee);
	
	try {
			RestAssured.given()
		  	.contentType("application/json")
		  	.pathParam("employeeID", newEmployee)
			.when()
			.get("http://dummy.restapiexample.com/api/v1/employee/{employeeID}", newEmployee)
			.then()
			.assertThat()
			.statusCode(200);
			
			
	} catch (Exception e) {
		 e.printStackTrace();
		 }

}
public void returnEmployeeName() {
	
	String newEmployee = newID;
	System.out.println(newEmployee);
	
	try {
			RestAssured.given()
		  	.contentType("application/json")
		  	.pathParam("employeeID", newEmployee)
			.when()
			.get("http://dummy.restapiexample.com/api/v1/employee/{employeeID}", newEmployee)
			.then()
			.content(containsString("employee_name"));
			
			
	} catch (Exception e) {
		 e.printStackTrace();
		 }

}
public void deleteEmployee() {
	
	String newEmployee = newID;
	try {
		RestAssured.given()
	  	.contentType("application/json")
	  	.pathParam("employeeID", newEmployee)
		.when()
		.delete("http://dummy.restapiexample.com/api/v1/delete/{employeeID}", newEmployee)
		.then()
		.content(containsString("success"));
		
		
} catch (Exception e) {
	 e.printStackTrace();
	 }
}

public void validateDeletedEntry() {
	String newEmployee = newID;
	
	try {
		RestAssured.given()
	  	.contentType("application/json")
	  	.pathParam("employeeID", newEmployee)
		.when()
		.get("http://dummy.restapiexample.com/api/v1/employee/{employeeID}", newEmployee)
		.then()
		.content(containsString("false"));
		
		
} catch (Exception e) {
	 e.printStackTrace();
	 }
}
}





