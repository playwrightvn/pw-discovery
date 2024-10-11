# Javascript

## Đề bài:
Lãi kép là một trong những khái niệm quan trọng trong tài chính và đầu tư. Nó giúp số tiền của bạn tăng lên nhanh chóng bằng cách tính lãi không chỉ trên vốn gốc ban đầu mà còn trên cả lãi tích lũy từ các kỳ trước. Nhờ vậy, theo thời gian, số tiền đầu tư sẽ tăng lên một cách nhanh chóng.

Công thức tính lãi kép là:
```
A = P * (1 + r/n)^(n*t)
```
Trong đó:
- `A` là số tiền sau thời gian `t` (bao gồm cả vốn và lãi).
- `P` là số tiền đầu tư ban đầu (vốn gốc).
- `r` là lãi suất danh nghĩa hàng năm (tính theo thập phân, ví dụ: 0.05 cho 5%).
- `n` là số lần lãi được cộng gộp mỗi năm.
- `t` là số năm đầu tư.

### Yêu cầu:
- Hãy viết một hàm JavaScript có tên `calculateCompoundInterest` để tính số tiền sau `xx` ngày, với số lần lãi được cộng gộp mỗi ngày. 
- Hàm `calculateCompoundInterest` cần nhận vào các tham số:
  - `principal`: Số tiền đầu tư ban đầu (vốn gốc).
  - `rate`: Lãi suất danh nghĩa hàng năm (tính theo phần trăm).
  - `days`: Số ngày đầu tư.
- Giả sử lãi được cộng gộp hàng ngày (`n = 365`).
- Trả về số tiền sau `xx` ngày, được làm tròn đến hai chữ số thập phân.

## Ví dụ:
**Input 1**:
```javascript
calculateCompoundInterest(1000, 5, 30);
```

**Output 1**:
```javascript
"Số tiền sau 30 ngày là: 1004.16"
```

**Input 2**:
```javascript
calculateCompoundInterest(2000, 3.5, 60);
```

**Output 2**:
```javascript
"Số tiền sau 60 ngày là: 2005.77"
```


## Nâng cao
- Nhập vào số lần cộng gộp hàng năm (`n`) nếu muốn tính lãi theo kỳ khác (ví dụ: hàng tháng `n = 12`, hàng quý `n = 4`).