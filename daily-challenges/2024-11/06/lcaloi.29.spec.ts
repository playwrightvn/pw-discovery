function decodeVault(numbers: number[]): number[] {
    return numbers.map((item) => {
        return item + reverseNumber(item);
    })
}

function reverseNumber(num: number): number {
    let str: string = '';
    while (true) {
        if (num < 10) {
            str += num;
            break;
        }
        let digit: number = num % 10;
        str += digit;
        num = ~~(num / 10);

    }
    return +str;
}

console.log(decodeVault([123, 456, 789]));
console.log(decodeVault([100, 200, 1000]));
console.log(decodeVault([5, 10, 99]));