# Bài tập TypeScript: Tính toán thời gian đạt mục tiêu tài chính (nâng cao)

## Đề bài

Bạn đang lập kế hoạch để đạt được một mục tiêu tài chính cụ thể trong tương lai. Cho trước:
- **Số tiền mục tiêu (`target`)**: Số tiền bạn muốn đạt được.
- **Số tiền ban đầu (`initial`)**: Số tiền bạn đang có.
- **Số tiền đầu tư định kỳ (`investmentPerPeriod`)**: Số tiền bạn đầu tư hàng tháng hoặc hàng ngày.
- **Lãi suất hàng năm (`interestRate`)**: Tỷ lệ phần trăm lãi suất (dạng thập phân, ví dụ 5% = 0.05).

Hãy tính toán:
1. **Thời gian (số tháng hoặc số ngày) để đạt được số tiền mục tiêu.**
2. **Tỷ lệ lãi suất cần thiết nếu thời gian đầu tư cố định.**

---

## Yêu cầu
- **Tên hàm:** `calculateFinancialPlan`
- **Đầu vào:**
  - `target` (number): Số tiền mục tiêu cần đạt được.
  - `initial` (number): Số tiền ban đầu.
  - `investmentPerPeriod` (number): Số tiền đầu tư định kỳ mỗi tháng (hoặc mỗi ngày).
  - `fixedTime` (number | undefined): Nếu có, là thời gian cố định (số tháng hoặc số ngày) mà bạn muốn đạt được mục tiêu.
  - `fixedTime` (number | undefined): Nếu có, là thời gian cố định (số tháng hoặc số ngày) mà bạn muốn đạt được mục tiêu.
  - `period` ("month" | "day"): Chu kỳ đầu tư (theo tháng hoặc theo ngày).
  - `interestRate` (number): Tỷ lệ lãi suất hàng năm (ví dụ: 0.05 = 5%/năm).
  - `interestRate` (number): Tỷ lệ lãi suất hàng năm (ví dụ: 0.05 = 5%/năm).

- **Đầu ra:** Hàm trả về :
  - **`timeToReachTarget`:** Số tháng hoặc số ngày để đạt được mục tiêu (nếu không có `fixedTime`).
  - **`requiredInterestRate`:** Tỷ lệ lãi suất cần thiết (nếu có `fixedTime`).


## Mẫu TypeScript

```typescript
function calculateFinancialPlan({
  target,
  initial,
  investmentPerPeriod,
  fixedTime,
  period,
  interestRate,
}: {
  target: number;
  initial: number;
  investmentPerPeriod: number;
  fixedTime?: number;
  period: "month" | "day";
  interestRate: number;
}): {
  timeToReachTarget?: number;
  requiredInterestRate?: number;
} {
  // Code sẽ được viết tại đây
}
```

### TESTCASE 1: Tính thời gian để đạt được mục tiêu
```typescript
const result = calculateFinancialPlan({
  target: 1000000, // Mục tiêu 1 triệu
  initial: 50000,  // Số tiền ban đầu
  investmentPerPeriod: 10000, // Đầu tư 10.000 mỗi tháng
  period: "month",
  interestRate: 0.06, // 6% lãi suất/năm
});
console.log(result);
// Kết quả mong đợi:
// {
//   timeToReachTarget: 83 // Mất 83 tháng (~6.9 năm) để đạt mục tiêu
// }

```

### TESTCASE 2: Tính lãi suất cần thiết với thời gian cố định
```typescript
const result = calculateFinancialPlan({
  target: 1000000, // Mục tiêu 1 triệu
  initial: 50000,  // Số tiền ban đầu
  investmentPerPeriod: 10000, // Đầu tư 10.000 mỗi tháng
  fixedTime: 60, // Cố định 60 tháng (5 năm)
  period: "month",
  interestRate: 0, // Không cần, vì chúng ta tính lãi suất cần thiết
});
console.log(result);
// Kết quả mong đợi:
// {
//   requiredInterestRate: 0.125 // Cần lãi suất 12.5%/năm để đạt mục tiêu
// }
```