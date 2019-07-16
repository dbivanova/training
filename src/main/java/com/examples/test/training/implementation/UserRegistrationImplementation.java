package com.examples.test.training.implementation;


	import org.apache.commons.lang3.RandomStringUtils;
	import org.junit.Assert;
	import org.openqa.selenium.By;
	import org.openqa.selenium.WebDriver;
	import org.openqa.selenium.WebElement;
	import org.openqa.selenium.firefox.*;
	import org.openqa.selenium.support.ui.ExpectedConditions;
	import org.openqa.selenium.support.ui.WebDriverWait;
	import java.util.concurrent.TimeUnit;

	public class UserRegistrationImplementation {
		
	public static String email = null;
	public static String username = null;
	public static String password = null;
	public static String invalidUsername = null;
	public WebDriver driver;

	public void openBrowser() {
		System.setProperty("webdriver.firefox.driver", "C:\\Users\\estafet_2\\workspace\\geckodriver\\geckodriver.exe");
		driver = new FirefoxDriver();
		driver.manage().timeouts().implicitlyWait(15,TimeUnit.SECONDS);
	}

	public void GenerateData() { 
			this.email = RandomStringUtils.randomAlphabetic(10)+"@testemail.com";
			//System.out.println(this.email);
			this.username = RandomStringUtils.randomAlphabetic(10);
			//System.out.println(this.username);
			this.password = RandomStringUtils.randomAlphanumeric(10);
			//System.out.println(this.password);
	}

	public void CreateAccount() {		
			String WordPressURL = "https://wordpress.com/start/user/en?ref=homepage";
			driver.get(WordPressURL);
			driver.findElement (By.id("email")).sendKeys(email);
			driver.findElement (By.id("username")).sendKeys(username);
			driver.findElement (By.id("password")).sendKeys(password);
			driver.findElement(By.xpath("/html/body/div[1]/div/div[1]/div[1]/div/div[2]/div/div/div/div[1]/div/div[1]/form/div[2]/button")).click();
			Assert.assertNotNull(driver.findElement(By.xpath("/html/body/div[1]/div/div/div[1]/div/div[2]/div/div/div/div[1]/div/button[1]/strong")));
			driver.quit();
	}

	public void AccountCreated() {
		
			String LoginURL = "https://wordpress.com/log-in";
			driver.get(LoginURL);
			WebDriverWait wait = new WebDriverWait(driver, 15);
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("usernameOrEmail"))).sendKeys(username);
			driver.findElement(By.xpath("/html/body/div[1]/div/div[1]/div[1]/div/main/div/div[1]/div/form/div[1]/div[2]/button")).click();
			WebDriverWait wait2 = new WebDriverWait(driver, 5);
			wait2.until(ExpectedConditions.visibilityOfElementLocated(By.id("password"))).sendKeys(password);
			driver.findElement(By.xpath("/html/body/div[1]/div/div[1]/div[1]/div/main/div/div[1]/div/form/div[1]/div[2]/button")).click();
			Assert.assertNotNull(driver.findElement(By.xpath("/html/body/div[1]/div/div[2]/div[2]/main/header/div/div[1]/span/strong")));
			driver.quit();
	}

	public void GenerateInvalidData () {
		
		invalidUsername = RandomStringUtils.randomAlphabetic(10);
		
	}
	public void InvalidLogin() {
		String LoginURL = "https://wordpress.com/log-in";
		driver.get(LoginURL);
		driver.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS);
		WebElement usernameField = driver.findElement (By.id("usernameOrEmail"));
		usernameField.click();
		usernameField.sendKeys(invalidUsername);
		driver.findElement(By.xpath("/html/body/div[1]/div/div[1]/div[1]/div/main/div/div[1]/div/form/div[1]/div[2]/button")).click();
		driver.quit();
	}

	public void loginFailed() {
		String LoginURL = "https://wordpress.com/log-in";
		driver.get(LoginURL);
		driver.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS);
		WebElement usernameField = driver.findElement (By.id("usernameOrEmail"));
		usernameField.click();
		usernameField.sendKeys(invalidUsername);
		driver.findElement(By.xpath("/html/body/div[1]/div/div[1]/div[1]/div/main/div/div[1]/div/form/div[1]/div[2]/button")).click();
		Assert.assertNotNull(driver.findElement(By.cssSelector(".gridicons-notice-outline")));
		driver.quit();
	}
	}
