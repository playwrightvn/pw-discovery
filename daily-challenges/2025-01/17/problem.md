# Bài tập TypeScript: Lập kế hoạch đầu tư để đạt mục tiêu tài chính (Lãi kép hàng năm)

## Đề bài

Hãy viết một hàm TypeScript để tính toán kế hoạch đầu tư nhằm đạt được mục tiêu tài chính trong tương lai với lãi kép hàng năm. Thông tin đầu vào bao gồm:

- **Mục tiêu tài chính (`target`)**: Số tiền bạn muốn đạt được.
- **Số tiền ban đầu (`initial`)**: Số tiền bạn đã có.
- **Số tiền đầu tư định kỳ hàng năm (`investmentPerYear`)**: Số tiền bạn đầu tư mỗi năm.
- **Lãi suất hàng năm (`annualInterestRate`)**: Tỷ lệ lãi suất hàng năm (ví dụ: 5% = 0.05).
- **Thời gian đầu tư (`years`)**: Số năm bạn dự định đầu tư.

### Cách tính lãi kép:
- Lãi suất hàng năm sẽ áp dụng cho tổng số tiền đầu tư bao gồm cả số tiền đầu tư ban đầu và số tiền đầu tư mỗi năm.
- Công thức tính lãi kép hàng năm:
  \[ A = P \times (1 + r)^n + \left( I \times \sum_{i=1}^{n} (1 + r)^{n-i} \right) \]
  
### Yêu cầu:
1. **Tính toán số năm cần thiết để đạt được mục tiêu tài chính `target` (Số năm cần thiết để số tiền trong tài khoản đạt `target`).**
2. **Tính tổng số tiền trong tài khoản sau `n` năm (tính cả lãi và vốn).**
3. **Tính tổng lãi suất thu được trong suốt quá trình đầu tư.**

---

### Đầu vào:
- `target` (number): Mục tiêu tài chính bạn muốn đạt được.
- `initial` (number): Số tiền ban đầu bạn có.
- `investmentPerYear` (number): Số tiền bạn đầu tư mỗi năm.
- `annualInterestRate` (number): Lãi suất hàng năm.
- `years` (number): Số năm đầu tư.

### Đầu ra:
- `timeToReachTarget` (number): Số năm cần thiết để đạt được mục tiêu tài chính.
- `totalAmount` (number): Tổng số tiền sau `n` năm.
- `totalInterest` (number): Tổng số tiền lãi thu được.

---
### Mẫu TypeScript

```typescript
function calculateInvestmentPlanWithCompoundInterest({
  target,
  initial,
  investmentPerYear,
  annualInterestRate,
}: {
  target: number;
  initial: number;
  investmentPerYear: number;
  annualInterestRate: number;
}): {
  timeToReachTarget: number;
  totalAmount: number;
  totalInterest: number;
} {
    //Code ở đây
  return {
    timeToReachTarget: years,
    totalAmount: totalAmount,
    totalInterest: totalInterest,
  };
}
```

### TESTCASE 1:
```typescript
const result = calculateInvestmentPlanWithCompoundInterest({
  target: 500000,
  initial: 10000,
  investmentPerYear: 2000,
  annualInterestRate: 0.04,
});
console.log(result);
// Kết quả mong đợi:
// {
//   timeToReachTarget: 11, // Mất 11 năm để đạt mục tiêu 500000
//   totalAmount: 510000,   // Tổng số tiền trong tài khoản sau 11 năm
//   totalInterest: 100000, // Tổng số tiền lãi thu được
// }
```

### TESTCASE 2:
```typescript
const result = calculateInvestmentPlanWithCompoundInterest({
  target: 1000000,
  initial: 50000,
  investmentPerYear: 5000,
  annualInterestRate: 0.05,
});
console.log(result);
// Kết quả mong đợi:
// {
//   timeToReachTarget: 33,  // Mất 33 năm để đạt mục tiêu 1000000
//   totalAmount: 1020000,   // Tổng số tiền trong tài khoản sau 33 năm
//   totalInterest: 520000,  // Tổng số tiền lãi thu được
// }
```


