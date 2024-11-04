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

### Giải thích thuật toán:
1. Với mỗi chuỗi "a...b", ta cần:
   - Tách để lấy được số a và số b
   - Tính tổng các số từ a đến b
2. Để tính tổng từ a đến b, có thể:
   - Dùng vòng lặp cộng dồn
   - Hoặc dùng công thức toán học: sum = (n * (a + b)) / 2, với n là số lượng số trong dãy

```typescript
function calculateTreasure(sequences: string[]): number[] {
  return sequences.map(sequence => {
    // Tách chuỗi để lấy số đầu và số cuối
    const [start, end] = sequence.split('...').map(Number);
    
    // Tính số lượng số trong dãy
    const count = end - start + 1;
    
    // Sử dụng công thức tính tổng dãy số cấp số cộng
    // sum = n(a + b)/2 với n là số lượng số, a là số đầu, b là số cuối
    return (count * (start + end)) / 2;
  });
}

// Test cases
console.log(calculateTreasure(["1...5", "2...6", "10...12"])); // [15, 20, 33]
console.log(calculateTreasure(["1...1", "1...3", "1...10"])); // [1, 6, 55]
console.log(calculateTreasure(["5...10", "20...22", "1...5"])); // [45, 63, 15]

// Bonus test cases
console.log(calculateTreasure(["1...100"])); // [5050] - Famous Gauss problem
console.log(calculateTreasure(["5...5"])); // [5] - Single number
console.log(calculateTreasure(["1...10", "10...1"])); // [55, 55] - Different format, same result

```

### Giải thích code:
1. Hàm sử dụng `map` để xử lý từng chuỗi trong mảng đầu vào
2. Với mỗi chuỗi:
   - Dùng `split('...')` để tách thành mảng gồm số đầu và số cuối
   - Dùng `map(Number)` để chuyển các chuỗi số thành số
   - Destructuring assignment `[start, end]` để lấy số đầu và số cuối
3. Tính số lượng số trong dãy bằng `end - start + 1`
4. Áp dụng công thức tính tổng dãy số cấp số cộng
5. Trả về kết quả là một mảng các tổng

### Bài tập nâng cao:
1. Thêm validation cho input:
   - Kiểm tra format chuỗi đúng dạng "a...b"
   - Kiểm tra a và b là số nguyên dương
   - Kiểm tra a <= b
2. Tối ưu cho trường hợp dãy số lớn
3. Xử lý thêm các format khác như "a..b" (2 dấu chấm) hoặc "a-b"
4. Thêm xử lý cho trường hợp số âm

Bạn muốn thảo luận thêm về bài toán này không?