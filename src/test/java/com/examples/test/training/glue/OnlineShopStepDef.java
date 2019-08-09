package com.examples.test.training.glue;

import com.examples.test.training.constants.OnlineShopConstants;
import com.examples.test.training.constants.ReadProperties;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.IOException;
import java.util.List;
import java.util.Random;
import java.util.concurrent.TimeUnit;

public class OnlineShopStepDef {

    public static String categoriesList;
    public static WebDriver driver;
    public static int bookList;

    @After("@UI, @Discount")
    public void screenshot(Scenario scenario) {
        scenario.write("Finished scenario");
        if (scenario.isFailed()) {
            scenario.embed(((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES), "image/png");
            driver.quit();
        }
    }

    @Given("^I have an existing account with an online bookshop$")
    public void setUp() throws Throwable {

        System.setProperty("webdriver.firefox.driver", "C:\\Users\\estafet_2\\workspace\\geckodriver\\geckodriver.exe");
        driver = new FirefoxDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
        driver.get(OnlineShopConstants.URL);
        Thread.sleep(5000);
        driver.findElement(By.xpath("/html/body/div[2]/div/button")).click();
    }

    @When("^I log into the website$")
    public void login() throws Throwable {
        ReadProperties creds = new ReadProperties();
        Actions action = new Actions(driver);
        WebElement menu = driver.findElement(By.className("dropdown"));
        action.moveToElement(menu).moveToElement(driver.findElement(By.xpath("//a[@href='/login/']"))).click().build().perform();
        driver.findElement(By.name("email")).sendKeys(creds.getEshopUsername());
        driver.findElement(By.name("password")).sendKeys(creds.getEshopPassword());
        driver.findElement(By.cssSelector("a.bardbutton:nth-child(6)")).click();
		Thread.sleep(2000);
		String loginSuccessful = driver.findElement(By.cssSelector(".name")).getText();
		Assert.assertEquals("Здравей, Пробен", loginSuccessful);

    }

    @When("^I extend the Категории menu and choose book category$")
    public void extendCategories() throws Throwable {
        Actions hover = new Actions(driver);
        WebElement category = driver.findElement(By.cssSelector(".catalogue > a:nth-child(1)"));
        hover.moveToElement(category).click().build().perform();
		WebElement bookCategory = driver.findElement(By.cssSelector(".submenu > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > div:nth-child(2) > a:nth-child(2)"));
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
		Thread.sleep(5000);
		WebElement cover = driver.findElement(By.xpath("/html/body/div[2]/div[2]/div/div[1]/div/div[1]/div/div/div/div/img"));
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
        //	unitPrice = (driver.findElement(By.className("price")).getText());
        WebElement quantity = driver.findElement(By.name("quantity[bvar1171]"));
        quantity.clear();
        quantity.sendKeys("5");
        driver.findElement(By.cssSelector("a.bardbutton:nth-child(2)")).click();

    }

    @Then("^I will be able to remove the products from the basket$")
    public void emptyBasket() throws Throwable {
        driver.findElement(By.cssSelector("a.remove")).click();
        String emptyBasket = driver.findElement(By.cssSelector("#shopping-cart-list > p:nth-child(1)")).getText();
        Assert.assertEquals("Кошницата е празна", emptyBasket);
        driver.quit();
    }

    @When("I choose random book from random category")
    public void randomBook() throws InterruptedException {

        do {
            Actions hover = new Actions(driver);
            WebElement category = driver.findElement(By.cssSelector(".catalogue > a:nth-child(1)"));
            hover.moveToElement(category).click().build().perform();
            Thread.sleep(5000);
            List<WebElement> categoriesList = driver.findElements(By.xpath("//a[contains(@href, '/genres/?id=')]"));
            System.out.println("Number of elements:" + categoriesList.size());
            Random rand = new Random();
            int randomCategory = rand.nextInt(categoriesList.size());
            categoriesList.get(randomCategory).click();
            List<WebElement> bookList = driver.findElements(By.xpath("//a[contains(@href, '/book/?id=')]"));
            //System.out.println("Number of books" + bookList.size());
            Random randBook = new Random();
            int randomBook = randBook.nextInt(bookList.size());
            bookList.get(randomBook).click();
        }
        while (bookList >= 10);

    }

    @When("I click on Add to favourites")
    public void addToFav() {
        driver.findElement(By.className("link_wishlist")).click();
        WebElement removeFromFav = driver.findElement(By.xpath("/html/body/div[2]/div[2]/div/div[2]/div/div[1]/table/tbody/tr/td[2]/div[1]/a"));
        Assert.assertTrue(removeFromFav.isDisplayed());
    }

    @Then("The book will appear in the favourites list")
    public void favList() throws InterruptedException {
        Actions action = new Actions(driver);
        WebElement menu = driver.findElement(By.className("dropdown"));
        action.moveToElement(menu).moveToElement(driver.findElement(By.xpath("//a[contains(@href, '/wishlist/')]"))).click().build().perform();
        Thread.sleep(3000);
        WebElement book = driver.findElement(By.xpath("//a[contains(@href, '/book/?id=')]"));
        Assert.assertTrue(book.isDisplayed());
        driver.findElement(By.xpath("/html/body/div[2]/div[2]/div/div[2]/div/div[1]/table/tbody/tr/td[2]/div[1]/a")).click();
        Thread.sleep(2000);
        String text = driver.findElement(By.xpath("/html/body/div[2]/div[2]/div/div[2]/div/p/em")).getText();
        //System.out.println(text);
        Assert.assertEquals("Вашият списък с желани книги е празен!", text);
        driver.quit();
    }

    @Given("I am logged into the online bookshop")
    public void i_am_logged_into_the_online_bookshop() throws InterruptedException, IOException {
        System.setProperty("webdriver.firefox.driver", "C:\\Users\\estafet_2\\workspace\\geckodriver\\geckodriver.exe");
        driver = new FirefoxDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
        driver.get(OnlineShopConstants.URL);
        Thread.sleep(5000);
        driver.findElement(By.xpath("/html/body/div[2]/div/button")).click();
        ReadProperties creds = new ReadProperties();
        Actions action = new Actions(driver);
        WebElement menu = driver.findElement(By.className("dropdown"));
        action.moveToElement(menu).moveToElement(driver.findElement(By.xpath("//a[@href='/login/']"))).click().build().perform();
        driver.findElement(By.name("email")).sendKeys(creds.getEshopUsername());
        driver.findElement(By.name("password")).sendKeys(creds.getEshopPassword());
        driver.findElement(By.cssSelector("a.bardbutton:nth-child(6)")).click();
        Thread.sleep(2000);
        String loginSuccessful = driver.findElement(By.cssSelector(".name")).getText();
        Assert.assertEquals("Здравей, Пробен", loginSuccessful);
    }

    @When("I add a specific book to the basket")
    public void i_add_a_specific_book_to_the_basket() {
        driver.findElement(By.className("text")).sendKeys(OnlineShopConstants.discountBook);
        driver.findElement(By.className("submit")).click();
        driver.findElement(By.className("btn-order")).click();

    }

    @When("I change the quantity in the basket")
    public void i_change_the_quantity_in_the_basket() {

    }

    @Then("I will see percent discount (.*?) according to the amount of the total (.*?)")
    public void i_will_see_percent_discount_according_to_the_amount_of_the_total(Integer int1, Integer int2) {

    }
  }
