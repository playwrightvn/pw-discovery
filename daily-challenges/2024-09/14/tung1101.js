
function caculatorBMI() {
    do {
        var weight = parseInt(prompt("Nhập cân nặng"));
        var heigh = parseInt(prompt("Nhập cân chiều cao"));
        var BMI = weight / (heigh * heigh);

        if (isNaN(BMI) == true) {
            alert("Nhập lại");
        }
    } while (isNaN(BMI))
 var type;
    if (BMI < 18.5) {
        type = "Gầy";
    } else if (18.5 <= BMI && BMI < 24.9) {
        type = "Bình thường"
    } else if (BMI >= 30) {
        type = "Béo phì";

    } else {
        type = "Thừa cân";
    }
    console.log("Kết quả BMI: " + BMI + "\nPhân loại: " + type);

}

  
