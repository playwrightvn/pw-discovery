## Typescript challenge: Theo dõi số bước chân

WHO khuyến nghị mỗi người nên đi bộ ít nhất 10,000 bước mỗi ngày. Hãy viết một chương trình để phân tích số bước chân đi được trong tuần.

### Yêu cầu:
- **Tên hàm:** `analyzeSteps` 
- **Tham số:** 
  - `dailySteps: number[]` - Mảng chứa số bước chân của 7 ngày trong tuần
  - `target: number` - Mục tiêu số bước chân mỗi ngày (mặc định 10000)
- **Kết quả:** 
```typescript
interface StepsAnalysis {
    totalSteps: number;        // Tổng số bước trong tuần
    averageSteps: number;      // Trung bình mỗi ngày
    bestDay: number;           // Số bước cao nhất
    worstDay: number;          // Số bước thấp nhất
    daysAboveTarget: number;   // Số ngày đạt mục tiêu
    streak: number;            // Số ngày liên tiếp đạt mục tiêu
}
```

### Ví dụ:
```typescript
function analyzeSteps(dailySteps: number[], target: number = 10000): StepsAnalysis {
    // Code sẽ được viết tại đây
}

// Test case
const steps = [12000, 11000, 9000, 8000, 10500, 7000, 11500];
console.log(analyzeSteps(steps));
```

### Kết quả mong đợi:
```typescript
{
    totalSteps: 69000,
    averageSteps: 9857,
    bestDay: 12000,
    worstDay: 7000,
    daysAboveTarget: 4,  // có 4 ngày trên 10000 bước
    streak: 2            // 2 ngày liên tiếp đạt mục tiêu (ngày 1 và 2)
}
```

### Test cases bổ sung:

1. **Test case 1 - Tuần không đi bộ nhiều:**
```typescript
console.log(analyzeSteps([5000, 6000, 7000, 5500, 4000, 3000, 2000]));
```

2. **Test case 2 - Tuần hoàn hảo:**
```typescript
console.log(analyzeSteps([10000, 10000, 10000, 10000, 10000, 10000, 10000]));
```

### Gợi ý:
1. Dùng reduce để tính tổng
2. Dùng Math.max/min để tìm giá trị cao nhất/thấp nhất
3. Dùng filter để đếm số ngày đạt mục tiêu
4. Dùng vòng lặp để tìm streak