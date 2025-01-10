function calculateCompoundInterest(principal, rate, days, n) {
    const interest = principal * (1 + (rate / 100) / n) ** (n * days / 365)
    return `Số tiền sau ${days} ngày là: ${interest.toFixed(2)}`
}