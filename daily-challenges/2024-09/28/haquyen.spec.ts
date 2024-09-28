import isPrime from "../17/haquyen.spec";

function countPrimes(numArr: number[]): number {
  let count = 0;

  for (let i = 0; i <= numArr.length; i++) {
    if (isPrime(numArr[i])) {
      count++;
    }
  }
  return count;
}
