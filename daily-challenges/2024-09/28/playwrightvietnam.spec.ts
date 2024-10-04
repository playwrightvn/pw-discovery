function isPrime(num: number) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function countPrimes(arr: number[]) {
    if (arr.length === 0) {
        return 0;
    }

    let primeCount = 0;
    for (let num of arr) {
        if (isPrime(num)) {
            primeCount++;
        }
    }

    return `Số lượng số nguyên tố: ${primeCount}`;
}

// Ví dụ sử dụng:
console.log(countPrimes([2, 3, 4, 5, 6, 7]));  // Output: "Số lượng số nguyên tố: 4"
console.log(countPrimes([10, 15, 20, 25, 30])); // Output: "Số lượng số nguyên tố: 0"
console.log(countPrimes([]));                   // Output: "Số lượng số nguyên tố: 0"
