# Bài tập TypeScript: Tính thời gian đạt mục tiêu tài chính (đơn giản)

## Đề bài

Bạn muốn đạt được một mục tiêu tài chính trong tương lai với các thông tin sau:
- **Số tiền mục tiêu (`target`)**: Số tiền bạn muốn đạt được.
- **Số tiền ban đầu (`initial`)**: Số tiền bạn đang có.
- **Số tiền đầu tư định kỳ (`investmentPerPeriod`)**: Số tiền bạn đầu tư hàng tháng hoặc hàng ngày.

Hãy viết một hàm tính toán:
1. **Thời gian cần thiết (số tháng hoặc số ngày) để đạt được số tiền mục tiêu**
2. **Số tiền tích lũy theo thời gian (lặp qua từng tháng hoặc từng ngày).**

---

## Yêu cầu
- **Tên hàm:** `calculateSavingTime`
- **Đầu vào:**
  - `target` (number): Số tiền mục tiêu cần đạt được.
  - `initial` (number): Số tiền ban đầu.
  - `investmentPerPeriod` (number): Số tiền đầu tư định kỳ mỗi tháng (hoặc mỗi ngày).
  - `period` ("month" | "day"): Chu kỳ đầu tư (theo tháng hoặc theo ngày).

- **Đầu ra:**
Hàm trả về một đối tượng chứa:
1. **`timeToReachTarget`:** Số tháng hoặc số ngày cần thiết để đạt được số tiền mục tiêu.
2. **`accumulationOverTime`:** Danh sách số tiền tích lũy sau mỗi chu kỳ, gồm:
   - `time`: Thời gian (tháng hoặc ngày).
   - `total`: Tổng số tiền tích lũy tại thời điểm đó.

---

## Mẫu TypeScript

```typescript
function calculateSavingTime({
  target,
  initial,
  investmentPerPeriod,
  period,
}: {
  target: number;
  initial: number;
  investmentPerPeriod: number;
  period: "month" | "day";
}): {
  timeToReachTarget: number;
  accumulationOverTime: { time: number; total: number }[];
} {
  // Code sẽ được viết tại đây
}
```
### TEST CASE
```typescript

const result = calculateSavingTime({
  target: 1000000, // Mục tiêu 1 triệu
  initial: 50000,  // Số tiền ban đầu
  investmentPerPeriod: 10000, // Đầu tư 10.000 mỗi tháng
  period: "month",
});
console.log(result);
// Kết quả mong đợi:
// {
//   timeToReachTarget: 95, // Mất 95 tháng (~8 năm) để đạt mục tiêu
//   accumulationOverTime: [
//     { time: 1, total: 60000 },
//     { time: 2, total: 70000 },
//     { time: 3, total: 80000 },
//     ...
//     { time: 95, total: 1000000 }
//   ]
// }
