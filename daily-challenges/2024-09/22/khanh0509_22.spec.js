const input1 = "Xin chào, tôi là lập trình viên."
const input2 = "JavaScript rất thú vị!"
const input3 = "      "
const input4 = " 123 kjkjkd, kjkk!  knk  "
function countWords(str){
    let newArray = str.split(" ");
    newArray = newArray.filter(words => words !== '');
    console.log(newArray.length)
}
countWords(input1)
countWords(input2)
countWords(input3)
countWords(input4)

