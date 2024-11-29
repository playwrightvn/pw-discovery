function decodeVault2(numbers: number[]): number[] {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error('Invalid input');
    }
    return numbers.map((num) => reversedNumber(num));
}

function reversedNumber(num: number): number {
    if (typeof num !== 'number' || num <= 0 || !Number.isInteger(num)) {
        throw new Error('Invalid input');
    }
    
    const reverseNum = parseInt(num.toString().split('').reverse().join(''));
    return reverseNum + num;
}

console.log(decodeVault2([123, 456, 789])); 
console.log(decodeVault2([100, 200, 1000])); 

