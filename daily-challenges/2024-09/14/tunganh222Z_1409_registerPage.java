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
import java.util.List;
import java.util.Random;

public class tunganh222Z_1409_registerPage {
    WebDriver driver;
    WebDriverWait explicitWait;

    String userName = "TungAnh";
    String email = getEmailRand();
    @BeforeClass
    public void beforeClass(){
        driver = new FirefoxDriver();
        explicitWait = new WebDriverWait(driver,Duration.ofSeconds(15));
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(15));
        driver.manage().window().maximize();
    }


    @Test
    public void TC_01_registerPage(){
        driver.get("https://material.playwrightvn.com/");
        driver.findElement(By.xpath("//a[contains(text(),'Register Page')]")).click();

        By userName = By.xpath("//input[@id='username']");
        By email = By.xpath("//input[@id='email']");
        explicitWait.until(ExpectedConditions.visibilityOfElementLocated(userName));
        driver.findElement(userName).sendKeys(this.userName);
        driver.findElement(email).sendKeys(this.email);

        driver.findElement(By.xpath("//button[@type='submit']")).click();

        By informationTable = By.xpath("//tbody");
        explicitWait.until(ExpectedConditions.visibilityOfElementLocated(informationTable));

        List<WebElement> infor = driver.findElements(By.xpath("//tbody/tr/td"));

        Assert.assertEquals(infor.get(1).getText(), this.userName);
        Assert.assertEquals(infor.get(2).getText(), this.email);

    }



    public String getEmailRand (){
        Random emailRand = new Random();

        return "tunganh" + emailRand.nextInt(0,99999) + "@gmail.com";

    }

    @AfterClass
    public void afterClass(){
        driver.quit();
    }
}
