## TypeScript Challenge: Mã Hóa Caesar 📜

### Câu chuyện
Julius Caesar đã sử dụng một phương pháp mã hóa đơn giản để gửi các thông điệp bí mật. Phương pháp này dịch chuyển mỗi chữ cái trong bảng chữ cái một số vị trí nhất định. Ví dụ, với độ dịch là 3:
- 'A' -> 'D'
- 'B' -> 'E'
- 'Z' -> 'C'

### Yêu cầu:
- **Tên hàm:** `caesarCipher`
- **Tham số:** 
  - `messages: string[]` - Mảng các thông điệp cần mã hóa
  - `shift: number` - Số vị trí cần dịch chuyển (1-25)
- **Kết quả:** 
  - Trả về mảng các thông điệp đã được mã hóa

### Quy tắc:
1. Chỉ mã hóa chữ cái (a-z, A-Z)
2. Giữ nguyên chữ hoa/thường
3. Các ký tự khác (số, dấu câu, khoảng trắng) giữ nguyên
4. Nếu shift là số âm, dịch chuyển về bên trái
5. Nếu shift > 25, lấy phần dư khi chia cho 26

### Ví dụ:
```typescript
console.log(caesarCipher(["Hello World!", "CAESAR"], 3));
// ["Khoor Zruog!", "FDHVDU"]

console.log(caesarCipher(["abc", "xyz"], 1));
// ["bcd", "yza"]
```

### Test Cases Phổ biến:

1. **Shift bình thường:**
```typescript
console.log(caesarCipher(["Happy coding!"], 3));
// ["Kdssb frglqj!"]
```

2. **Shift âm:**
```typescript
console.log(caesarCipher(["HELLO"], -1));
// ["GDKKN"]
```

3. **Shift lớn hơn 26:**
```typescript
console.log(caesarCipher(["test"], 27));
// Tương đương shift = 1
// ["uftu"]
```

4. **Các ký tự đặc biệt:**
```typescript
console.log(caesarCipher(["Hello, World 123!"], 1));
// ["Ifmmp, Xpsme 123!"]
```

### Mở rộng:
1. **Thêm chức năng giải mã:**
   ```typescript
   function caesarDecipher(messages: string[], shift: number): string[] {
     return caesarCipher(messages, -shift);
   }
   ```

2. **Thêm tính năng tự động đoán shift:**
   ```typescript
   function breakCaesar(encodedMessage: string): number {
     // Phân tích tần suất chữ cái để đoán shift
   }
   ```

3. **Thêm các phương pháp mã hóa khác:**
   - Vigenère cipher
   - ROT13
   - Substitution cipher
