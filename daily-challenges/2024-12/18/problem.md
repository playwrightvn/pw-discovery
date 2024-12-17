# 🧩 **TypeScript Challenge: Chuyển đổi số tiền sang chữ**

---

## **Giới thiệu:**

Khi bạn thực hiện chuyển khoản trên các ứng dụng ngân hàng số, chắc hẳn bạn đã thấy một tính năng thú vị: khi nhập số tiền cần chuyển, phía dưới ô nhập liệu sẽ xuất hiện một dòng chữ thể hiện số tiền đó bằng chữ. Ví dụ, khi bạn nhập **1,234,000**, ứng dụng sẽ hiển thị **"một triệu hai trăm ba mươi tư nghìn đồng"**. Tính năng này giúp người dùng dễ dàng xác nhận lại số tiền và tránh những sai sót không đáng có.

Trong thử thách ngày hôm nay, chúng ta sẽ cùng nhau xây dựng một hàm TypeScript để chuyển đổi số tiền thành dạng chữ tương tự như tính năng trên các ứng dụng ngân hàng.

Bạn đã sẵn sàng chưa? Hãy cùng bắt đầu! 🚀

---

## **Yêu cầu:**

- **Tên hàm:** `convertNumberToWords`
- **Tham số:**
  - Nhận vào một số nguyên dương (number) trong khoảng từ **0 đến 999,999,999**.
- **Kết quả:**
  - Trả về một chuỗi là cách đọc bằng chữ của số tiền và kết thúc bằng từ **"đồng"**.
- **Quy tắc đọc số:**
  - Số tiền được đọc theo cách truyền thống của tiếng Việt:
    - `1234` → **"một nghìn hai trăm ba mươi bốn đồng"**
    - `1001` → **"một nghìn không trăm lẻ một đồng"**
    - `500000` → **"năm trăm nghìn đồng"**
    - `145000` → **"một trăm bốn mươi lăm nghìn đồng"**
  - Sử dụng dấu cách để ngăn cách các từ.
  - Không thêm từ thừa như **"không"** ở đầu nếu không cần thiết.

---

## **Ví dụ:**

```typescript
function convertNumberToWords(number: number): string {
  // Viết code của bạn ở đây
}

console.log(convertNumberToWords(1234)); 
// Kết quả: "một nghìn hai trăm ba mươi bốn đồng"

console.log(convertNumberToWords(1001)); 
// Kết quả: "một nghìn không trăm lẻ một đồng"

console.log(convertNumberToWords(500000)); 
// Kết quả: "năm trăm nghìn đồng"

console.log(convertNumberToWords(0));
// Kết quả: "không đồng"
