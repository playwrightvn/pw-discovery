# Typescript  
Một ứng dụng sức khỏe yêu cầu người dùng nhập giờ mà họ muốn thức dậy và tính toán thời gian đi ngủ hợp lý để đảm bảo họ có đủ giấc ngủ (khoảng 7 đến 9 tiếng mỗi đêm).  

## Đề bài:  
Hãy viết một hàm TypeScript để trả về danh sách các giờ đề xuất đi ngủ để đảm bảo giấc ngủ từ 7 đến 9 tiếng.  

### Yêu cầu:  
- **Tên hàm:** `calculateSleepTimes`  
- **Tham số:**  
  - `wakeUpTime` (string): Thời gian thức dậy (định dạng `"HH:mm"`).  
- **Kết quả:**  
  - Hàm trả về một mảng các giờ đề xuất đi ngủ (mỗi giờ là một chuỗi `string` định dạng `"HH:mm"`), gồm:
    - Giờ đi ngủ nếu muốn ngủ **9 tiếng**.
    - Giờ đi ngủ nếu muốn ngủ **8 tiếng**.
    - Giờ đi ngủ nếu muốn ngủ **7 tiếng**.

### Lưu ý:  
- Hàm phải xử lý được định dạng thời gian `HH:mm` trong chu kỳ 24 giờ.
- Thời gian trả về phải được đảm bảo nằm trong cùng ngày hoặc ngày trước đó (nếu giờ đi ngủ nằm trước giờ thức dậy).  

---

### Ví dụ:  

```typescript
function calculateSleepTimes(wakeUpTime: string): string[] {
  // Code sẽ được viết tại đây
}
```

### Test case:  
```typescript
const wakeUpTime = "06:30";
const sleepTimes = calculateSleepTimes(wakeUpTime);
console.log(sleepTimes);
// Kết quả mong đợi:
// [
//   "21:30", // 9 tiếng trước
//   "22:30", // 8 tiếng trước
//   "23:30"  // 7 tiếng trước
// ]
```

```typescript
const wakeUpTime = "08:00";
const sleepTimes = calculateSleepTimes(wakeUpTime);
console.log(sleepTimes);
// Kết quả mong đợi:
// [
//   "23:00", // 9 tiếng trước
//   "00:00", // 8 tiếng trước
//   "01:00"  // 7 tiếng trước
// ]
```

