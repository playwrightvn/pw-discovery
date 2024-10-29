function calculateCompoundInterest(principal, rate, days, n) {
    const t = days / 365;  
    const r = rate / 100; 
    const amount = principal * Math.pow((1 + r / n), n * t);
    return amount.toFixed(2);
}

console.log(calculateCompoundInterest(1000, 5, 30, 365));  
console.log(calculateCompoundInterest(1000, 5, 30, 12));  
console.log(calculateCompoundInterest(1000, 5, 30, 4)); 


