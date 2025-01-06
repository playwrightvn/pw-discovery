## Đề bài: Squid Game - Tính số người sống sót
Trong một vòng chơi Squid Game, có **n** người chơi và một số người bị loại ở mỗi lượt chơi. 

### Mô tả bài toán:
Hãy viết một hàm TypeScript để tính toán số người chơi sống sót sau khi hoàn thành tất cả các lượt chơi.

---

### Yêu cầu:
1. **Tên hàm:** `calculateSurvivors`
2. **Tham số:** 
   - `n` (number): Số người chơi ban đầu.
   - `eliminations` (number[]): Một mảng các số nguyên đại diện cho số người bị loại trong từng lượt chơi. 
3. **Kết quả:** 
   - Trả về số người chơi còn sống sót sau tất cả các lượt chơi.
   - Nếu số người bị loại vượt quá số người còn lại trong một lượt, số người còn lại sẽ bằng 0 và các lượt sau bị bỏ qua.

---

### Lưu ý:
- Hàm cần đảm bảo tính chính xác trong trường hợp số người bị loại trong một lượt lớn hơn số người còn lại.
- Nếu không có người chơi nào còn sống từ giữa chừng, các lượt chơi sau đó sẽ không được tính.

---

### Ví dụ:

```typescript
function calculateSurvivors(n: number, eliminations: number[]): number {
  // Code sẽ được viết tại đây
}
```

---

### Test cases:

1. **Test case 1:**
```typescript
const survivors = calculateSurvivors(100, [10, 20, 30, 40]);
console.log(survivors); 
// Kết quả mong đợi: 0 (100 - 10 - 20 - 30 - 40 = 0)
```

2. **Test case 2:**
```typescript
const survivors = calculateSurvivors(50, [10, 20, 15]);
console.log(survivors); 
// Kết quả mong đợi: 5 (50 - 10 - 20 - 15 = 5)
```

3. **Test case 3:**
```typescript
const survivors = calculateSurvivors(20, [5, 10, 15]);
console.log(survivors); 
// Kết quả mong đợi: 0 (20 - 5 - 10 = 5, 5 - 15 = 0)
```

4. **Test case 4:**
```typescript
const survivors = calculateSurvivors(10, [2, 3, 1, 4]);
console.log(survivors); 
// Kết quả mong đợi: 0 (10 - 2 - 3 - 1 - 4 = 0)
```
