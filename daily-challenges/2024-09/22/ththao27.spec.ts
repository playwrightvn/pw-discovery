
//Javascript
function countWords(text) {
    const words = text.split(/\s+/);
    const filteredWords = words.filter(word => word.length > 0);
    return filteredWords.length;
}

    //Input 1
const inputString = "Xin chào, tôi là lập trình viên.";
const wordCount = countWords(inputString);
console.log(`Số từ: ${wordCount}`);

    //Input 2
const inputString2 = "JavaScript rất thú vị!";
const wordCount2 = countWords(inputString2);
console.log(`Số từ: ${wordCount2}`);

    //Input 3
const inputString3 = "      ";
const wordCount3 = countWords(inputString3);
console.log(`Số từ: ${wordCount3}`);