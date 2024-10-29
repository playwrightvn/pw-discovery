function countWords(mySentence: string) {
    let mySentenceSplit: string[] = mySentence.split(" ");
    if (mySentenceSplit[0] === '') {
        return 0;
    }
    return mySentenceSplit.length;
}

const mySentence = "Xin chào, tôi là lập trình viên.";
const counts = countWords(mySentence);
console.log(`Số từ: ${counts}`);

const mySentence2 = "JavaScript rất thú vị!";
const counts2 = countWords(mySentence2);
console.log(`Số từ: ${counts2}`);

const mySentence3 = "      ";
const counts3 = countWords(mySentence3);
console.log(`Số từ: ${counts3}`);