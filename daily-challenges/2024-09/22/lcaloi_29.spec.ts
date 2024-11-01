function countWords(input: string): string {
    const words: string[] = input.split(' ');
    let count = 0;
    for (let element of words) {
        if (element) {
            count++;
        }
    }
    return `Số từ: ${count}`
}
const input: string = 'JavaScript rất thú vị!'
console.log(countWords(input));
