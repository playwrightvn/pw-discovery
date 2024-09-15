function reverseString(str) {
    return str.split('').reverse().join('');
}

const inputString = "ThaoThanh";
const reversedString = reverseString(inputString);
console.log("Chuỗi đảo ngược:", reversedString);