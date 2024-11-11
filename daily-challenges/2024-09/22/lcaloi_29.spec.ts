function countWords(input: string): string {
    const words: string[] = input.trim().split(/\s+/).filter(word => word.length > 0);
    const count: number = words.length;
    return `Số từ: ${count}`
}
const text: string = 'JavaScript rất thú vị!'
console.log(countWords(text));
