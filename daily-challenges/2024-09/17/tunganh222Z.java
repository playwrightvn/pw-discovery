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
        //
        driver.get("https://material.playwrightvn.com/");
        driver.findElement(By.xpath("//a[contains(text(),'Product page')]")).click();

        //dataTest_TC_02
        WebElement product1 = driver.findElement(
                By.xpath("//div[text()='Product 1']/following-sibling::button"));
        WebElement price1 = driver.findElement(
                By.xpath("//div[text()='Product 1']/following-sibling::div[@class='product-price']"));
        int expectedQuantity1 = 2;

        WebElement product2 = driver.findElement(
                By.xpath("//div[text()='Product 2']/following-sibling::button"));
        WebElement price2 = driver.findElement(
                By.xpath("//div[text()='Product 2']/following-sibling::div[@class='product-price']"));
        int expectedQuantity2 = 2;
        WebElement product3 = driver.findElement(
                By.xpath("//div[text()='Product 3']/following-sibling::button"));
        WebElement price3 = driver.findElement(
                By.xpath("//div[text()='Product 3']/following-sibling::div[@class='product-price']"));
        int expectedQuantity3 = 3;

        //Add to cart product1
        product1.click();
        By product1Table = By.xpath("//td[text()='Product 1']/parent::tr");
        addToCart(product1Table, product1, expectedQuantity1);

        //Add to cart product2
        product2.click();
        By product2Table = By.xpath("//td[text()='Product 2']/parent::tr");
        addToCart(product2Table, product2, expectedQuantity2);

        //Add to cart product3
        product3.click();
        By product3Table = By.xpath("//td[text()='Product 3']/parent::tr");
        addToCart(product3Table, product3, expectedQuantity3);

        //Check total price
        double totalPriceD = totalPrice(price1,expectedQuantity1) + totalPrice(price2,expectedQuantity2) +totalPrice(price3,expectedQuantity3);
        System.out.println("Total price is : $"+totalPriceD);
        //convert to Strring
        String totalPriceS = "$"+String.format("%.2f", totalPriceD);
        //Assert
        Assert.assertEquals(driver.findElement(By.xpath("//td[@class='total-price']")).getText(),totalPriceS);
    }

    public double totalPrice(WebElement price, int expectedQuantity){
        //
        double priceString = Double.parseDouble(price.getText().replace("$",""));
        double totalPrice = priceString * expectedQuantity;
        return totalPrice;
    }

    public void  addToCart(By productTable, WebElement product, int expectedQuantity){
        explicitWait.until(ExpectedConditions.visibilityOfElementLocated(productTable));
        if (driver.findElement(productTable).isDisplayed()){
            for (int i = 1; i < expectedQuantity ; i++){
                WebElement quantity = driver.findElement(
                        By.xpath("//td[text()='Product 1']/parent::tr/td[3]"));
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

