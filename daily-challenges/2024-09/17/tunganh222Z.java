import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import java.time.Duration;

public class tunganh222Z {
    WebDriver driver;
    WebDriverWait explicitWait;

    //Locator
    By product1 = By.xpath("//div[text()='Product 1']/following-sibling::button");
    By product2 = By.xpath("//div[text()='Product 2']/following-sibling::button");
    By product3 = By.xpath("//div[text()='Product 3']/following-sibling::button");

    By price1 = By.xpath("//div[text()='Product 1']/following-sibling::div[@class='product-price']");
    By price2 = By.xpath("//div[text()='Product 2']/following-sibling::div[@class='product-price']");
    By price3 = By.xpath("//div[text()='Product 3']/following-sibling::div[@class='product-price']");

    By product1Table = By.xpath("//td[text()='Product 1']/parent::tr");
    By product2Table = By.xpath("//td[text()='Product 2']/parent::tr");
    By product3Table = By.xpath("//td[text()='Product 3']/parent::tr");

    By quantity1 = By.xpath("//td[text()='Product 1']/parent::tr/td[3]");
    By quantity2 = By.xpath("//td[text()='Product 2']/parent::tr/td[3]");
    By quantity3 = By.xpath("//td[text()='Product 3']/parent::tr/td[3]");

    @BeforeClass
    public void beforeClass(){
        driver = new FirefoxDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(15));
        explicitWait = new WebDriverWait(driver, Duration.ofSeconds(15));
        driver.manage().window().maximize();
    }

    @Test
    public void TC_01_prime(){
        //dataTest_TC_01
        int number = 23;
        //
        System.out.println(isPrime(number));
    }

    @Test
    public void TC_02_productPage(){
        //Open
        driver.get("https://material.playwrightvn.com/");
        driver.findElement(By.xpath("//a[contains(text(),'Product page')]")).click();

        //dataTest_TC_02
        int expectedQuantity1 = 2;
        int expectedQuantity2 = 2;
        int expectedQuantity3 = 3;

        //Add to cart product1
        webElement(product1).click();
        addToCart(product1Table, webElement(product1), webElement(quantity1), expectedQuantity1);

        //Add to cart product2
        webElement(product2).click();
        addToCart(product2Table, webElement(product2), webElement(quantity2), expectedQuantity2);

        //Add to cart product3
        webElement(product3).click();
        addToCart(product3Table, webElement(product3), webElement(quantity3), expectedQuantity3);

        //Check total price
        double totalPriceD = totalPrices(webElement(price1),expectedQuantity1) + totalPrices(webElement(price2),expectedQuantity2) + totalPrices(webElement(price3),expectedQuantity3);
        System.out.println("Total price is : $"+totalPriceD);
        //convert to Strring
        String totalPriceS = "$"+String.format("%.2f", totalPriceD);
        //Assert
        Assert.assertEquals(driver.findElement(By.xpath("//td[@class='total-price']")).getText(),totalPriceS);
    }

    public double totalPrices(WebElement price, int expectedQuantity){
        //
        double priceString = Double.parseDouble(price.getText().replace("$",""));
        double totalPrice = priceString * expectedQuantity;
        return totalPrice;
    }

    public WebElement webElement(By locator){
        explicitWait.until(ExpectedConditions.visibilityOfElementLocated(locator));
        return driver.findElement(locator);
    }

    public void  addToCart(By productTable, WebElement product, WebElement quantity, int expectedQuantity){
        explicitWait.until(ExpectedConditions.visibilityOfElementLocated(productTable));
        if (driver.findElement(productTable).isDisplayed()){
            for (int i = 1; i < expectedQuantity ; i++){
                if (!quantity.equals(expectedQuantity)){
                    product.click();
                }
            }
        }
    }

    public String isPrime(int number) {
        for (int i = 2; i < Math.sqrt(number); i++) {
            if (number <= 2){
                return "Số này không phải là số nguyên tố";
            }
            if (number % i ==0 ) {
                return "Số này không phải là số nguyên tố";
            }
        }
        return "Số này là số nguyên tố";
    }

    @AfterClass
    public void afterClass(){
        //driver.quit();
    }
}

