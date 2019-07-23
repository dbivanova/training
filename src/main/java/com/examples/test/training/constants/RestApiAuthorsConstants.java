package com.examples.test.training.constants;

import org.apache.commons.lang3.RandomStringUtils;
import org.apache.commons.lang3.RandomUtils;

public class RestApiAuthorsConstants {
	
	public static final String BASE_URL = "http://fakerestapi.azurewebsites.net/api/authors/";
	//public static final String GET_AUTHOR_URL = "http://fakerestapi.azurewebsites.net/api/authors/33";
	public static final String firstName = RandomStringUtils.randomAlphabetic(5);
	public static final String lastName = RandomStringUtils.randomAlphabetic(5);
	public static final int postAuthorID = RandomUtils.nextInt(801, 900);
		

}

