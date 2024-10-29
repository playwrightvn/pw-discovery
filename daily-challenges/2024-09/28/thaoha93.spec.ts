function isPrime(num: number) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            return false;
            break;
        }
    }
    return true;
}

function countPrimes(arr: number[]) {
    if (arr.length === 0) {
        return 0;
    }

    let primeCount = 0;
    for (const num of arr) {
        if (isPrime(num)) {
            primeCount++;
        }
    }

    return `Số lượng số nguyên tố: ${primeCount}`;
}
console.log(countPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(countPrimes([10, 13, 15, 19, 28, 31]));
console.log(countPrimes([])); 