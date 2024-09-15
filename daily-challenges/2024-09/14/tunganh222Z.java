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
import java.util.Scanner;

public class tunganh222Z {
    WebDriver driver;
    WebDriverWait explicitWait;
    // userName and email
    String userName = "TungAnh";
    String email = getEmailRand();

    @BeforeClass
    public void beforeClass() {
        driver = new FirefoxDriver();
        explicitWait = new WebDriverWait(driver, Duration.ofSeconds(15));
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(15));
        driver.manage().window().maximize();
    }

    @Test
    public void TC_01_registerPage() {
        driver.get("https://material.playwrightvn.com/");
        driver.findElement(By.xpath("//a[contains(text(),'Register Page')]")).click();
        // locator
        By userName = By.xpath("//input[@id='username']");
        By email = By.xpath("//input[@id='email']");
        //input information
        explicitWait.until(ExpectedConditions.visibilityOfElementLocated(userName));
        driver.findElement(userName).sendKeys(this.userName);
        driver.findElement(email).sendKeys(this.email);
        driver.findElement(By.xpath("//button[@type='submit']")).click();
        // Wait informationTale visible
        By informationTable = By.xpath("//tbody");
        explicitWait.until(ExpectedConditions.visibilityOfElementLocated(informationTable));
        List<WebElement> infor = driver.findElements(By.xpath("//tbody/tr/td"));
        // Assert userName & email
        Assert.assertEquals(infor.get(1).getText(), this.userName);
        Assert.assertEquals(infor.get(2).getText(), this.email);
    }

    @Test
    public void TC_02_BMI() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Vui lòng nhập số chiều cao m của bạn");
        double height = sc.nextDouble();
        System.out.println("Vui lòng nhập số cân nặng kg của bạn");
        double weight = sc.nextDouble();
        double bmi = valueBMI(weight, height);
        System.out.println("Phân loại :" + caculateBMI(bmi));
        System.out.println("Kết quả BMI: " + bmi);
    }

    public double valueBMI(double weight, double height) {
        return weight / (height * height);
    }

    public String caculateBMI(double BMI) {
        if (BMI < 18.5 && BMI > 0) {
            return "Gầy";
        } else if (BMI >= 18.5 && BMI < 24.9) {
            return "Bình thường";
        } else if (BMI >= 25 && BMI < 29.9) {
            return "Thừa cân";
        } else {
            return "Béo phì";
        }
    }

    public String getEmailRand() {
        Random emailRand = new Random();
        return "tunganh" + emailRand.nextInt(0, 99999) + "@gmail.com";
    }

    @AfterClass
    public void afterClass() {
        driver.quit();
    }
}