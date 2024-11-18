function findDuplicateIDs(input: string[]): string[] {
    if (input === null || input === undefined) {
        throw new Error('Input cannot be null or undefined');
    }
    let count: { [key: string]: number } = {};
    for (let id of input) {
        if (count[id]) {
            count[id]++;
        } else {
            count[id] = 1;
        }
    }
    let duplicate: string[] = [];
    for (let id in count) {
        if (count[id] > 1) {
            duplicate.push(id);
        }
    }
    return duplicate;
}
const input:string[] = ["123456789012", "098765432109", "123456789012", "111111111111", "098765432109", "222222222222"];
console.log(`Duplicate IDs: ${findDuplicateIDs(input)}`);
