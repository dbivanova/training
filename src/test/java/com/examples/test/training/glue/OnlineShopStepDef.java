package com.examples.test.training.glue;

import static org.junit.Assert.assertTrue;

import java.util.List;
import java.util.Random;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.examples.test.training.constants.OnlineShopConstants;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OnlineShopStepDef {

public static String categoriesList; 
public static WebDriver driver;
float unitPrice = 0.00f;
float totalPrice = 0.00f;
	
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
		WebElement bookCategory;		
		bookCategory=driver.findElement(By.xpath("/html/body/div[3]/div[1]/div/ul/li[1]/div/table/tbody/tr/td[1]/div[2]/a[2]"));
		WebDriverWait wait = new WebDriverWait(driver, 5); 
		wait.until(ExpectedConditions.visibilityOf(bookCategory));
		bookCategory.click();
		Thread.sleep(5000);

	}
	
	@When("^I choose a book from the list$")
	public void chooseBookFromList() throws Throwable {
		List<WebElement> allBooks = driver.findElements(By.xpath("//a[contains(@href, '/book/?id=')]"));
	    Random rand = new Random();
	    int randomBook = rand.nextInt(allBooks.size());
	    allBooks.get(randomBook).click();
	    Thread.sleep(5000);
	}

	@Then("^The book description will be loaded with price and an option to order$")
	public void bookDetailsValidation() throws Throwable {
		WebElement orderButton = driver.findElement(By.className("btn-order"));
		WebElement price = driver.findElement(By.className("purchase-price"));
		Assert.assertEquals(true, price.isDisplayed());	
		Assert.assertEquals(true, orderButton.isDisplayed());
		driver.quit();

		}

	@When("^I search for a specific book$")
	public void bookSearch() throws Throwable {
		driver.findElement(By.className("text")).sendKeys(OnlineShopConstants.searchBook);
		driver.findElement(By.className("submit")).click();
	}

	@Then("^I will be able to select the book from the search results$")
	public void selectBookFromSearch() throws Throwable {
		driver.findElement(By.cssSelector("div.book:nth-child(4) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > div:nth-child(1) > h2:nth-child(1) > a:nth-child(1)")).click();
		WebElement cover = driver.findElement(By.xpath("/html/body/div[3]/div[2]/div/div[1]/div/div[1]/div/div/div/div/img"));
		Assert.assertEquals(true, cover.isDisplayed());
	}

	@When("^I search and load a specific book$")
	public void searchBook() throws Throwable {
		driver.findElement(By.className("text")).sendKeys(OnlineShopConstants.searchAnotherBook);
		driver.findElement(By.className("submit")).click();
		Thread.sleep(3000);
	}

	@When("^I click on the Add to basket option$")
	public void addToBasket() throws Throwable {
		driver.findElement(By.className("btn-order")).click();

	}

	@Then("^The book will be added to the basket$")
	public void basketValidation() throws Throwable {
		WebElement shoppingCart = driver.findElement(By.className("shopcart-info-title"));
		WebElement shopcartLink = driver.findElement(By.className("shopcart-link"));
		Assert.assertEquals(true, shoppingCart.isDisplayed());
		Assert.assertEquals(true, shopcartLink.isDisplayed());
		driver.quit();
	}

	@When("^I add a book to the basket$")
	public void addAbookToBasket() throws Throwable {
		driver.findElement(By.className("text")).sendKeys(OnlineShopConstants.searchAnotherBook);
		driver.findElement(By.className("submit")).click();
		Thread.sleep(3000);
		driver.findElement(By.className("btn-order")).click();
	}

	@When("^I load the added products$")
	public void loadBasket() throws Throwable {
		driver.findElement(By.className("shopcart-info-title")).click();
				
	}

	@Then("^I will be able to increase the quantity$")
	public void increaseQuantity() throws Throwable {
		//String price = driver.findElement(By.xpath("/html/body/div[2]/div[2]/div/div/form/table/tbody/tr[4]/td[3]")).getText();
		//System.out.println(price);
		WebElement quantity = driver.findElement(By.name("quantity[bvar1171]"));
		quantity.clear();
		quantity.sendKeys("5");
		driver.findElement(By.xpath("/html/body/div[3]/div[2]/div/div/form/table/tbody/tr[4]/td[2]/a")).click();
		
		}

	@Then("^I will be able to remove the products from the basket$")
	public void emptyBasket() throws Throwable {
	    driver.findElement(By.xpath("/html/body/div[3]/div[2]/div/div/form/table/tbody/tr[4]/td[4]/a")).click();
	    WebElement emptyBasket = driver.findElement(By.cssSelector("#shopping-cart-list > p:nth-child(1)"));
	    Assert.assertEquals(true, emptyBasket.isDisplayed());
	    driver.quit();
	}
}
