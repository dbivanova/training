package com.examples.test.training.constants;

import org.openqa.selenium.WebDriver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class OnlineShopConstants {
	public static WebDriver driver;
	public static final Logger logger = LoggerFactory.getLogger(OnlineShopConstants.class);

	public static final String URL = "https://www.bard.bg/";
	public static final String searchBook = "властелинът на пръстените";
	public static final String searchAnotherBook = "силмарилион";
	public static final String discountBook = "Огън и кръв";

}


