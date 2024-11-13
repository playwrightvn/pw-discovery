//Base
function calculateTreasure(sequences: string[]): number[] {
    return sequences.map((item) => sumTotal(item));
}

function sumTotal(input: string) {
    let result: number = 0;
    let begin: number = +input.slice(0, input.indexOf('.'));
    let end: number = +input.slice(input.lastIndexOf('.') + 1);
    console.log(end);

    for (begin; begin <= end; begin++) {
        result += begin;
    }
    return result;
}
function validateInput(input: string) {
    const regexValidFormat: RegExp = /\d+\.\.\.\d+/;
    const a: number = +input.slice(0, input.indexOf('.'));
    const b: number = +input.slice(input.lastIndexOf('.') + 1);
    if (!input.match(regexValidFormat)) {
        throw new Error(`input "${input}" không đúng format "a...b"}`);
    } else if (!isPositiveInteger(a) || !isPositiveInteger(b)) {
        throw new Error(`input "${input}" không thoả điều kiện "a và b là số nguyên dương"`);
    } else if (a > b) {
        throw new Error(`input "${input}" không thoả điều kiện "a <= b"`);
    }
}
function isPositiveInteger(input: number) {
    return Number.isInteger(input) && input > 0;
}

//Advance
//Bài1: thêm validation cho input
function calculateTreasureAdvance(sequences: string[]): number[] {
    sequences.map((item) => validateInput(item));
    return sequences.map((item) => sumTotal(item));
}

console.log(calculateTreasureAdvance(["1...5", "2...62", "10...12"]));
// console.log(calculateTreasureAdvance(["1...1", "3...1", "1...10"]));
// console.log(calculateTreasureAdvance(["5...10", "20...22", "1.5"]));