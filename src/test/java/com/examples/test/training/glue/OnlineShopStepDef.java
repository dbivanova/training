package com.examples.test.training.glue;

import java.util.List;
import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import com.examples.test.training.constants.OnlineShopConstants;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OnlineShopStepDef {

public static String categoriesList; 
public static WebDriver driver;
	
	@Given("^I have an existing account with an online bookshop$")
	public void setUp() throws Throwable {

		System.setProperty("webdriver.firefox.driver", "C:\\Users\\estafet_2\\workspace\\geckodriver\\geckodriver.exe");
		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(15,TimeUnit.SECONDS);
		driver.get(OnlineShopConstants.URL);
		Thread.sleep(5000);
	}

	@When("^I log into the website$")
	public void login() throws Throwable {
		Actions action = new Actions(driver);
		WebElement menu = driver.findElement(By.className("dropdown"));
		action.moveToElement(menu).moveToElement(driver.findElement(By.xpath("//a[@href='/login/']"))).click().build().perform();
		driver.findElement(By.name("email")).sendKeys(OnlineShopConstants.username);
		driver.findElement(By.name("password")).sendKeys(OnlineShopConstants.password);
		driver.findElement(By.cssSelector("a.bardbutton:nth-child(6)")).click();
	}

	@When("^I extend the Категории menu and choose book category$")
	public void extendCategories() throws Throwable {
		Actions hover = new Actions(driver);
		WebElement category = driver.findElement(By.cssSelector(".catalogue > a:nth-child(1)"));
		hover.moveToElement(category).click().build().perform();
		//List<WebElement> categories = driver.findElements(By.xpath("//a[contains(@href, '/genres/?id=')]"));
		driver.findElement(By.xpath("/html/body/div[3]/div[1]/div/ul/li[1]/div/table/tbody/tr/td[1]/div[2]/a[2]")).click();
		

	}
	
	@When("^I choose a book from the list$")
	public void chooseBookFromList() throws Throwable {
	}

	@Then("^The book description will be loaded with price and an option to order$")
	public void bookDetailsValidation() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	}

//	@When("^I search for a specific book$")
//	public void bookSearch() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//	}
//
//	@Then("^I will be able to select the book from the search results$")
//	public void selectBookFromSearch() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//	}
//
//	@When("^I search and load a specific book$")
//	public void searchBook() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//	}
//
//	@When("^I click on the Add to basket option$")
//	public void addToBasket() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//	}
//
//	@Then("^The book will be added to the basket$")
//	public void basketValidation() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//	}
//
//	@When("^I add a book to the basket$")
//	public void addAbookToBasket() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//	}
//
//	@When("^I load the added products$")
//	public void loadBasket() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//	}
//
//	@Then("^I will be able to increase the quantity$")
//	public void increaseQuantity() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//	}
//
//	@Then("^I will be able to remove the products from the basket$")
//	public void emptyBasket() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//	}
}
