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

//	private void takeScreenshot(String className, String method, LocalTime timestamp) {
//		if (driver instanceof TakesScreenshot) {
//			TakesScreenshot screenshotTakingDriver = (TakesScreenshot) this.driver;
//			try {
//				File localScreenshots = new File(new File("target"), "screenshots");
//				if (!localScreenshots.exists() || !localScreenshots.isDirectory()) {
//					localScreenshots.mkdirs();
//				}
//				File screenshot = new File(localScreenshots, className + "_" + method + "_" + timestamp.getHour() + "." + timestamp.getMinute() + ".png");
//				FileUtils.moveFile(screenshotTakingDriver.getScreenshotAs(OutputType.FILE), screenshot);
//				logger.info("Screenshot for class={} method={} saved in: {}", className, method, screenshot.getAbsolutePath());
//			} catch (Exception e1) {
//				logger.error("Unable to take screenshot", e1);
//			}
//		} else {
//			logger.info("Driver '{}' can't take screenshots so skipping it.", driver.getClass());
//		}
//	}
}


