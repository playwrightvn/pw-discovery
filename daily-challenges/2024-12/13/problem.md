# Typescript challenge: THU HOẠCH NÔNG TRẠI

## Giới thiệu
Game nông trại luôn là một thể loại game phổ biến. Một trong những tính năng quan trọng là tính toán thời gian thu hoạch và sản lượng. Bạn hãy xây dựng hệ thống quản lý thu hoạch cho nông trại!

## Yêu cầu
- Viết class `CayTrong` với các thuộc tính:
  + tên: tên cây
  + thoiGianTrong: số giờ từ lúc trồng đến thu hoạch
  + sanLuong: số kg thu được khi thu hoạch
  + trangThai: "đang trồng" | "sẵn sàng thu hoạch" | "đã thu hoạch"
  + thoiGianBatDau: thời điểm bắt đầu trồng

- Các phương thức:
  + trong(): bắt đầu trồng cây
  + kiemTraTrangThai(): kiểm tra có thể thu hoạch chưa
  + thuHoach(): thu hoạch và trả về sản lượng

## Test cases
```javascript
const lua = new CayTrong("Lúa", 2, 10); // 2 giờ, 10kg
lua.trong();
console.log(lua.kiemTraTrangThai()); // "đang trồng"

// Sau 2 giờ
console.log(lua.kiemTraTrangThai()); // "sẵn sàng thu hoạch"
console.log(lua.thuHoach()); // 10

const nongTrai = [
  new CayTrong("Lúa", 2, 10),
  new CayTrong("Cà chua", 1, 5),
  new CayTrong("Khoai tây", 3, 20)
];
```