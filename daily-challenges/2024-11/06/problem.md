## TypeScript Challenge: Mật Mã Ngân Hàng 🏦

### Câu chuyện
Ngân hàng Gringotts của thế giới phù thủy có một hệ thống bảo mật đặc biệt. Mỗi két sắt được bảo vệ bởi một dãy số ma thuật. Để mở được két, bạn cần giải mã từng số bằng cách: đảo ngược số đó và cộng với chính nó. Ví dụ, với số 123: đảo ngược thành 321, sau đó 123 + 321 = 444.

### Yêu cầu:
- **Tên hàm:** `decodeVault`
- **Tham số:** 
  - `numbers: number[]` – Một mảng các số nguyên dương
- **Kết quả:** 
  - Trả về một mảng các số đã được giải mã (số ban đầu + số đảo ngược của nó)

### Quy tắc:
1. Các số đầu vào là số nguyên dương
2. Với mỗi số, tính tổng của nó với số đảo ngược của nó
3. Số đảo ngược bỏ qua các số 0 ở đầu (ví dụ: 100 đảo ngược thành 1)
4. Các số đầu vào có thể có độ dài khác nhau

### Ví dụ:
```typescript
function decodeVault(numbers: number[]): number[] {
  // Code sẽ được viết tại đây
}

console.log(decodeVault([123, 456, 789])); 
// Kết quả mong đợi: [444, 1111, 1578]
```

### Test cases:

1. **Test case 1:**
```typescript
console.log(decodeVault([123, 456, 789])); 
// [444, 1111, 1578]
// Giải thích: 
// 123 -> 321: 123 + 321 = 444
// 456 -> 654: 456 + 654 = 1111
// 789 -> 987: 789 + 987 = 1578
```

2. **Test case 2:**
```typescript
console.log(decodeVault([100, 200, 1000])); 
// [101, 202, 1001]
// Giải thích: 
// 100 -> 1: 100 + 1 = 101
// 200 -> 2: 200 + 2 = 202
// 1000 -> 1: 1000 + 1 = 1001
```

3. **Test case 3:**
```typescript
console.log(decodeVault([5, 10, 99])); 
// [10, 11, 198]
```

### Phiên bản nâng cao:
1. Thêm validation:
   - Kiểm tra input có phải là mảng
   - Kiểm tra các phần tử có phải là số nguyên dương
2. Xử lý các trường hợp đặc biệt:
   - Số 0
   - Số có nhiều chữ số 0 ở cuối
3. Tối ưu hiệu năng cho số lớn
4. Xử lý lỗi gracefully

### Các trường hợp cần chú ý:
1. Số có các chữ số 0 ở cuối (100 -> 1)
2. Số đơn chữ số (5 -> 5)
3. Số đối xứng (99 -> 99)
4. Số lớn (cần xử lý tràn số)
5. Input không hợp lệ (số âm, số thập phân)