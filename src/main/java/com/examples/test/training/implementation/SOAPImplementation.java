package com.examples.test.training.implementation;

import java.io.File;
import java.io.FileInputStream;

import org.apache.commons.io.IOUtils;

import com.jayway.restassured.RestAssured;
import io.restassured.path.xml.XmlPath;
import io.restassured.response.Response;
public class SOAPImplementation {


public void runRequest() {
	FileInputStream fileInputStream = new FileInputStream(new File("/training/src/test/resources/testData/requestBody.xml"));
    RestAssured.baseURI="http://www.thomas-bayer.com/axis2/services/BLZService";
    Response response = given()
    		.header("Content-Type", "text/xml")
            .and()
            .body(IOUtils.toString(fileInputStream,"UTF-8"))
            .when()
            .post("/converter.asmx")
            .then()
            .statusCode(200)
            .and()
            .log().all()
            .extract().response();

    XmlPath jsXpath= new XmlPath(response.asString());//Converting string into xml path to assert
    String bank=jsXpath.getString("GetResults");
    System.out.println("ban is returned: " +  bank);

}

}

