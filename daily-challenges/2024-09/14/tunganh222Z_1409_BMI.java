import java.util.Scanner;

public class tunganh222Z_1409_BMI {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Vui lòng nhập số cân nặng kg của bạn");
        double weight = sc.nextDouble();
        System.out.println("Vui lòng nhập số chiều cao m của bạn");
        double height = sc.nextDouble();


        System.out.println("Chỉ số BMI của bạn là :" + caculateBMI(weight, height));

    }

        public static String caculateBMI ( double inputWeight, double inputHeight){

            double BMI = (inputWeight / Math.pow(inputHeight, inputHeight));
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
}

