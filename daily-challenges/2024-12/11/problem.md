# Typescript challenge: MÁY ĐỔI XU
## Giới thiệu
Đổi tiền là một bài toán cổ điển trong khoa học máy tính. Ở Việt Nam, các máy bán hàng tự động cần đổi tiền thối thường gặp khó khăn vì phải tối ưu số lượng xu/tiền thối lại. Bạn hãy giúp lập trình một máy đổi tiền thông minh!

## Yêu cầu
- Viết hàm `doiTien(soTien)` nhận vào số tiền cần đổi (đơn vị: đồng)
- Trả về một object chứa số lượng từng mệnh giá sao cho tổng số tờ tiền là ít nhất
- Các mệnh giá có sẵn: 500000, 200000, 100000, 50000, 20000, 10000, 5000, 2000, 1000
- Nếu không thể đổi được (số tiền < 1000), trả về `null`

## Test cases
```javascript
console.log(doiTien(123000))
// Output: {
//   "100000": 1,
//   "20000": 1,
//   "2000": 1,
//   "1000": 1
// }

console.log(doiTien(500)) 
// Output: null

console.log(doiTien(1000000))
// Output: {
//   "500000": 2
// }
```