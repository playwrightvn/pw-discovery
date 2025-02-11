function calculateCompoundInterest(principal: number, rate: number, days: number, n = 365) {
    const r = rate / 100;
    const t = days / 365;

    const A = principal * Math.pow((1 + (r / n)), (n * t));
    return A.toFixed(2);
}

console.log(calculateCompoundInterest(1000, 5, 30));
console.log(calculateCompoundInterest(2000, 3.5, 60));
console.log(calculateCompoundInterest(2000, 3.5, 60, 6));