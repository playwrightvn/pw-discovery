## Typescript challenge

Một cửa hàng nước ngọt có chương trình **đổi vỏ chai**: cứ **3 vỏ chai** sẽ được đổi lấy **1 chai nước ngọt mới**. Bạn ban đầu có **12 chai nước ngọt**. Mỗi khi uống xong một chai, bạn sẽ giữ lại vỏ chai để tiếp tục đổi thêm chai mới.

Hãy viết một hàm TypeScript để tính **tổng số chai nước ngọt** bạn có thể uống được.

### Yêu cầu:
- **Tên hàm:** `calculateTotalDrinks`
- **Tham số:** 
  - `initialBottles: number` – Số chai nước ban đầu (ví dụ: 12 chai).
- **Kết quả:** 
  - Trả về tổng số chai nước ngọt bạn có thể uống được.

### Gợi ý:
- Mỗi lần đổi 3 vỏ chai sẽ được 1 chai mới, tiếp tục uống và lại có thêm vỏ để đổi.
- Cần tính xem có thể uống tối đa bao nhiêu chai nước dựa trên cơ chế đổi này.

---

### Ví dụ:
```typescript
function calculateTotalDrinks(initialBottles: number): number {
  // Code sẽ được viết tại đây
}

console.log(calculateTotalDrinks(12)); // Kết quả mong đợi: 17
```

---

### Giải thích:
1. Uống 12 chai đầu tiên, còn lại 12 vỏ chai.
2. Đổi 12 vỏ chai => Được 4 chai mới. (Tổng đã uống: 12 + 4 = 16 chai)
3. Uống 4 chai này => Còn 4 vỏ chai.
4. Đổi 3 vỏ chai => Được 1 chai mới. (Tổng đã uống: 16 + 1 = 17 chai)
5. Uống 1 chai này => Còn 2 vỏ chai (không đủ để đổi thêm).

Vậy tổng cộng bạn đã uống được **17 chai**.

---

### Test cases:

1. **Test case 1:**
```typescript
console.log(calculateTotalDrinks(12)); // Kết quả mong đợi: 17
```

2. **Test case 2:**
```typescript
console.log(calculateTotalDrinks(5)); // Kết quả mong đợi: 7
```

3. **Test case 3:**
```typescript
console.log(calculateTotalDrinks(2)); // Kết quả mong đợi: 2
```