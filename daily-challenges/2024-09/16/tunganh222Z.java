import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import java.time.Duration;
import java.util.List;
import java.util.Random;

public class tunganh222Z {
    WebDriver driver;
    WebDriverWait explicitWait;

    // data Test
    String userName = "TungAnh";
    String email = getEmailRand();
    String expectedInterest = "Art";
    String expectedCountry = "Canada";
    String bio = "Tung anh \n tunganh222Z \n dailycoding";
    String hex = "#5b8584";

    @BeforeClass
    public void beforeClass(){
        driver = new FirefoxDriver();
        explicitWait = new WebDriverWait(driver, Duration.ofSeconds(15));
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(15));
        driver.manage().window().maximize();
    }

    @Test
    public void TC_01_reverseString(){
        String stringReverse = "hello";
        System.out.println(reverseString(stringReverse));
    }

    public String reverseString(String input ){
        String[] stringArray = input.split("");
        String result = "";
        for (int i = (stringArray.length -1) ; i >= 0; i-- ){
        result = String.join("",result,stringArray[i]);
        }
        return result;
    }

    @Test
    public void TC_02_registerPage(){

        JavascriptExecutor js = (JavascriptExecutor) driver;

        driver.get("https://material.playwrightvn.com/");
        driver.findElement(By.xpath("//a[contains(text(),'Register Page')]")).click();

        // locator
        By userName = By.xpath("//input[@id='username']");
        By email = By.xpath("//input[@id='email']");

        //input information
        explicitWait.until(ExpectedConditions.visibilityOfElementLocated(userName));
        driver.findElement(userName).sendKeys(this.userName);
        driver.findElement(email).sendKeys(this.email);

        //Gender
        driver.findElement(By.xpath("//input[@id='male']")).click();
        String genderSelected = driver.findElement(By.xpath("//input[@id='male']/following-sibling::label")).getText();

        //hobbies
        List<WebElement> hobbies = driver.findElements(By.xpath("//label[@for='hobbies']/parent::div//input"));
        List<WebElement> labels = driver.findElements(By.xpath("//label[@for='hobbies']/parent::div//input/following-sibling::label"));
        String[] hobbiesSet = new String[hobbies.size()];
        for (int i = 0 ; i < hobbies.size() ; i++){
            hobbies.get(i).click();
            if (hobbies.get(i).isSelected()){
                hobbiesSet[i] = labels.get(i).getText();
            }
        }
        String hobbiesSelected = String.join(", ", hobbiesSet);

        // default dropdown
        Select interest = new Select(driver.findElement(By.cssSelector("select#interests")));
        interest.selectByVisibleText(expectedInterest);

        // default dropdown
        Select country = new Select(driver.findElement(By.cssSelector("select#country")));
        country.selectByVisibleText(expectedCountry);
        String countrySelected = country.getFirstSelectedOption().getText();

        //upload file
        //driver.findElement(By.xpath("//input[@type='file']")).sendKeys();
        //input text area
        driver.findElement(By.xpath("//textarea[@id='bio']")).sendKeys(bio);

        //dob
        js.executeScript("arguments[0].value='2023-09-15';",
                driver.findElement(By.cssSelector("input#dob")));
        String dobSelected = driver.findElement(By.cssSelector("input#dob")).getAttribute("value");

        //rating
        Random rand = new Random();
        int randomValue = rand.nextInt(1,10);
        js.executeScript("arguments[0].value='"+ randomValue + "';",
                driver.findElement(By.cssSelector("input#rating")));
        String rated = driver.findElement(By.cssSelector("input#rating")).getAttribute("value");

        //color
        driver.findElement(By.xpath("//input[@type='color']"));
        js.executeScript("arguments[0].value='"+hex+"';",
                driver.findElement(By.xpath("//input[@type='color']")));

        //getText hover over me
        Actions action = new Actions(driver);
        action.moveToElement(driver.findElement(By.cssSelector("div.tooltip"))).perform();
        By toolTip = By.xpath("//span[@class='tooltiptext']");
        Assert.assertEquals(driver.findElement(toolTip).getText(), "Subscribe to our newsletter for updates");
        driver.findElement(By.cssSelector("input#newsletter")).click();

        // Enable feature
        driver.findElement(By.xpath("//span[@class='slider round']")).click();

        driver.findElement(By.xpath("//button[@type='submit']")).click();

        // Wait informationTale visible
        By informationTable = By.xpath("//tbody");
        explicitWait.until(ExpectedConditions.visibilityOfElementLocated(informationTable));
        List<WebElement> infor = driver.findElements(By.xpath("//tbody/tr/td"));

        // Assert userName & email
        Assert.assertEquals(infor.get(1).getText(), this.userName);
        Assert.assertEquals(infor.get(2).getText(), this.email);

        // Assert information
        String[] information = driver.findElement(By.xpath("//td[4]")).getText().split("\n");
        for (int i = 0 ; i < information.length ; i++){
            if (information[i].contains("Gender")){
                String[] assertGender = information[i].split(": ");
                Assert.assertEquals(assertGender[1],genderSelected.toLowerCase());
            } else if(information[i].contains("Hobbies")){
                String[] assertGender = information[i].split(": ");
                Assert.assertEquals(assertGender[1],hobbiesSelected.toLowerCase());
            } else if (information[i].contains("Country")){
                String[] assertGender = information[i].split(": ");
                Assert.assertEquals(assertGender[1],countrySelected.toLowerCase());
            } else if (information[i].contains("Date of Birth")){
                String[] assertGender = information[i].split(": ");
                Assert.assertEquals(assertGender[1],dobSelected);
            } else if (information[i].contains("Rating")){
                String[] assertGender = information[i].split(": ");
                Assert.assertEquals(assertGender[1],rated);
            }
        }
    }

    public String getEmailRand() {
        Random emailRand = new Random();
        return "tunganh" + emailRand.nextInt(0, 99999) + "@gmail.com";
    }

    @AfterClass
    public void afterClass(){
        //driver.quit();
    }
}
