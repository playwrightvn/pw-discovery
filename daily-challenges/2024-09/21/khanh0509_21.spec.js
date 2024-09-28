const testString = "Liên hệ với tôi qua email john.doe@example.com hoặc support@mydomain.com"
function replaceEmail(str){
    let newArray = str.split(" ");
    newArray.forEach(function(value, index) {
        let containAt = value.includes("@")
        let containDot = value.includes(".com")
        if(containAt && containDot){
            newArray[index] = `hidden@example.com`
        }
    });
    return newArray.join(" ")
}
console.log(replaceEmail(testString))