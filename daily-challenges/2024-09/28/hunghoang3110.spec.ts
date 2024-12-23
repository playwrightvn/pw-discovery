// Javascript

function countPrimes(array) {
    let countPrime = 0;
    if (array.length === 0) {
        return 0;
    }
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'number' || array[i] <= 0) {
            throw new Error(`Input at index ${i} must be a positive number`);
        }
        if (isPrime(array[i])) {
            countPrime++;
        }
    }
    return `Number of primes is ${countPrime}`
}

function isPrime (input) {
    if (input === 1) {
        return false;
    }

    if (input === 2) {
        return true;
    }

    if (input % 2 === 0) {
        return false;
    }
    const sqrtInput = Math.sqrt(input);
    for (let index = 3; index <= sqrtInput; index += 2) {
        if (input % index === 0) {
            return false;
        }
    }
    return true;
}