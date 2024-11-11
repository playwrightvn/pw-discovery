//  n là số lần lãi được cộng gộp mỗi năm.
// t là số năm đầu tư.
function calculateCompoundInterest(principal, rate, n, days) {
  let t = days / 365;
  let r = rate / 100;
  let A = principal * Math.pow(1 + r / n, n * t);
  return A.toFixed(2);
}
console.log(calculateCompoundInterest(1000, 5, 365, 30));
console.log(calculateCompoundInterest(2000, 3.5, 365, 60));
console.log(calculateCompoundInterest(1500, 6, 12, 60))
console.log(calculateCompoundInterest(1500, 6, 4, 60))
