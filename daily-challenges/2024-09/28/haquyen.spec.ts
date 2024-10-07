function isPrime(num: number): boolean {
  if (num <= 1) return false;
  if (num <= 3) return true;

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function countPrimes(numArr: number[]): number {
  let count = 0;

  for (let i = 0; i < numArr.length; i++) {
    if (isPrime(numArr[i])) {
      count++;
    }
  }
  console.log(`Số lượng số nguyên tố: ${count}`);
  return count;
}
