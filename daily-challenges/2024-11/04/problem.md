# TypeScript Challenge: Giải cứu Công chúa

Hoàng tử đang trên đường đi giải cứu công chúa. Để đến được tòa tháp nơi công chúa đang bị nhốt, hoàng tử phải vượt qua một cánh cổng ma thuật. Cánh cổng này có một dãy các phép tính ma thuật, và hoàng tử cần tính đúng tất cả các kết quả để cánh cổng mở ra.

## Yêu cầu:
- **Tên hàm:** `calculateMagicGate`
- **Tham số:** 
  - `calculations: string[]` – Một mảng các chuỗi phép tính (ví dụ: ["1 + 1", "200*2", "3 - 10"])
- **Kết quả:** 
  - Trả về một mảng các số nguyên là kết quả của các phép tính

## Quy tắc:
- Mỗi phép tính trong mảng đầu vào sẽ chỉ chứa hai số và một phép toán
- Các phép toán có thể là: +, -, *, /
- Các số trong phép tính là số nguyên
- Kết quả của phép chia sẽ được làm tròn xuống số nguyên gần nhất
- Các số trong phép tính có thể có khoảng trắng hoặc không

## Ví dụ:
```typescript
function calculateMagicGate(calculations: string[]): number[] {
  // Code sẽ được viết tại đây
}

console.log(calculateMagicGate(["1 + 1", "200*2", "3 - 10"])); 
// Kết quả mong đợi: [2, 400, -7]
```

## Test cases:

1. **Test case 1:**
```typescript
console.log(calculateMagicGate(["1 + 1", "200*2", "3 - 10"])); 
// Kết quả: [2, 400, -7]
```

2. **Test case 2:**
```typescript
console.log(calculateMagicGate(["10/3", "5+5", "100 - 1"])); 
// Kết quả: [3, 10, 99]
```

3. **Test case 3:**
```typescript
console.log(calculateMagicGate(["20*5", "10/2", "15-5"])); 
// Kết quả: [100, 5, 10]
```

### Giải thích:
1. Hàm nhận vào một mảng các chuỗi phép tính
2. Với mỗi phép tính, cần:
   - Tách chuỗi để lấy số và phép toán
   - Thực hiện phép tính tương ứng
   - Với phép chia, làm tròn xuống số nguyên gần nhất
3. Trả về mảng kết quả các phép tính

### Gợi ý:
1. Có thể sử dụng split() để tách chuỗi
2. Sử dụng regular expression để tìm số và phép toán
3. Có thể dùng Math.floor() để làm tròn xuống kết quả của phép chia
4. Cần xử lý cả trường hợp có và không có khoảng trắng trong phép tính

Chúc hoàng tử may mắn giải cứu được công chúa! 🏰👸🤴



```typescript
function calculateMagicGate(calculations: string[]): number[] {
  
}

// Test cases
console.log(calculateMagicGate(["1 + 1", "200*2", "3 - 10"])); // [2, 400, -7]
console.log(calculateMagicGate(["10/3", "5+5", "100 - 1"])); // [3, 10, 99]
console.log(calculateMagicGate(["20*5", "10/2", "15-5"])); // [100, 5, 10]

```
