import { test } from '@playwright/test';
//JavaScript
function isPrime(number: number) {
    if (number > 2 && number % 2 === 0 || number <= 1) {
        return false;
    } else {
        let squareRoot: number = Math.round(Math.sqrt(number));
        for (let i = 2; i < squareRoot; i++) {
            if (number % i === 0) {
                return false;
            }
        }
    }
    return true;
};

function countPrimes(arr: number[]): number {
    if (arr.length == 0) {
        return 0;
    }
    let count: number = 0;

    for (let element of arr) {
        if (isPrime(element)) {
            count++;
        }
    }
    return count;
}

const arr: number[] = [2, 3, 4, 5, 6, 7]
console.log(`Số lượng số nguyên tố: ${countPrimes(arr)}`);