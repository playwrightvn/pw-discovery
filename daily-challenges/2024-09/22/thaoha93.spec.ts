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

const mySentence_2 = "JavaScript rất thú vị!";
const counts_2 = countWords(mySentence_2);
console.log(`Số từ: ${counts_2}`);

const mySentence_3 = "      ";
const counts_3 = countWords(mySentence_3);
console.log(`Số từ: ${counts_3}`);