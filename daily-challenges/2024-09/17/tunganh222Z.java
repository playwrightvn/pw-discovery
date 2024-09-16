import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class tunganh222Z {



    //dataTest
    int number = 23;
    @BeforeClass
    public void beforeClass(){

    }
    @Test
    public void TC_01_prime(){
        System.out.println(isPrime(number));
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
}

