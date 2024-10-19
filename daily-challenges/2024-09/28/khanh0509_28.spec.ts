// javascript
function isPrime(input) {
  if (input == 1) return 0;
  let sqrtInput = Math.sqrt(input);
  for (let i = 2; i <= sqrtInput; i++) {
    if (input % i == 0) return 0;
  }
  return 1;
}

function countPrimes(value) {
  let count = 0;
  value.forEach((e) => {
    if (isPrime(e) == 1) count += 1;
  });
  return count;
}
console.log('So luong so nguyen to la: ' ,countPrimes([2, 3, 4, 5, 6, 7]));
console.log('So luong so nguyen to la: ', countPrimes([10, 15, 20, 25, 30]));