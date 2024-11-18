function calculateCompoundInterest(principal: number, rate: number, days: number): number {
    const r: number = rate / 100;
    const n: number = 365;
    const t: number = days / n;

    const result: number = principal * Math.pow(1 + (r / n), (n * t))
    return Number(result.toFixed(2));
}

console.log(`Số tiền sau 30 ngày đầu tư là: ${calculateCompoundInterest(1000, 5, 30)}`);
console.log(`Số tiền sau 60 ngày đầu tư là: ${calculateCompoundInterest(2000, 3.5, 60)}`);




