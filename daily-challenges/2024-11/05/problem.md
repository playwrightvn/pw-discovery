# TypeScript Challenge: Kho Báu Của Jack Sparrow 🏴‍☠️

### Câu chuyện
Một nhóm cướp biển dũng cảm vừa tìm thấy tấm bản đồ kho báu cổ xưa của thuyền trưởng huyền thoại Jack Sparrow. Trên bản đồ có nhiều dãy số bí ẩn dạng "a...b", ví dụ "1...5", "2...6". Để mở được rương kho báu, họ cần tính tổng của tất cả các số trong mỗi dãy (ví dụ "1...5" nghĩa là 1+2+3+4+5).

### Yêu cầu:
- **Tên hàm:** `calculateTreasure`
- **Tham số:** 
  - `sequences: string[]` – Một mảng các chuỗi dạng "a...b"
- **Kết quả:** 
  - Trả về một mảng các số nguyên, mỗi số là tổng của một dãy số từ a đến b

### Quy tắc:
1. a và b là các số nguyên dương
2. a luôn nhỏ hơn hoặc bằng b
3. Dãy số bao gồm cả a và b
4. Định dạng chuỗi đầu vào luôn là "a...b" (3 dấu chấm)

### Ví dụ:
```typescript
function calculateTreasure(sequences: string[]): number[] {
  // Code sẽ được viết tại đây
}

console.log(calculateTreasure(["1...5", "2...6", "10...12"])); 
// Kết quả mong đợi: [15, 20, 33]
```

### Test cases:

1. **Test case 1:**
```typescript
console.log(calculateTreasure(["1...5", "2...6", "10...12"])); 
// [15, 20, 33]
// Giải thích: 
// "1...5" = 1+2+3+4+5 = 15
// "2...6" = 2+3+4+5+6 = 20
// "10...12" = 10+11+12 = 33
```

2. **Test case 2:**
```typescript
console.log(calculateTreasure(["1...1", "1...3", "1...10"])); 
// [1, 6, 55]
```

3. **Test case 3:**
```typescript
console.log(calculateTreasure(["5...10", "20...22", "1...5"])); 
// [45, 63, 15]
```

### Bài tập nâng cao:
1. Thêm validation cho input:
   - Kiểm tra format chuỗi đúng dạng "a...b"
   - Kiểm tra a và b là số nguyên dương
   - Kiểm tra a <= b
2. Tối ưu cho trường hợp dãy số lớn
3. Xử lý thêm các format khác như "a..b" (2 dấu chấm) hoặc "a-b"
4. Thêm xử lý cho trường hợp số âm