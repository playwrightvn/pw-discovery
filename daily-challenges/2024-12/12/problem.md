# Typescript challenge: XẾP HÀNG MUA VÉ

## Giới thiệu
Tại các rạp chiếu phim, việc tính toán thời gian chờ đợi để mua vé là rất quan trọng. Điều này giúp khách hàng ước lượng được thời gian và nhà rạp có thể tối ưu số lượng quầy vé. Hãy giúp xây dựng hệ thống tính toán này!

## Yêu cầu
- Viết hàm `tinhThoiGianCho(danhSachKhach)` 
- Input là mảng các object khách hàng với format:
  ```javascript
  {
    ten: "Tên khách",
    thoiGianDen: "HH:mm",
    thoiGianXuLy: số_phút_để_mua_vé
  }
  ```
- Output là mảng các object với thông tin:
  ```javascript
  {
    ten: "Tên khách",
    thoiGianCho: số_phút_phải_chờ,
    thoiGianRoiDi: "HH:mm"
  }
  ```

## Test cases:
```javascript
const khach = [
  {ten: "An", thoiGianDen: "10:00", thoiGianXuLy: 5},
  {ten: "Bình", thoiGianDen: "10:02", thoiGianXuLy: 3},
  {ten: "Cường", thoiGianDen: "10:03", thoiGianXuLy: 4}
];

console.log(tinhThoiGianCho(khach));
// Output: [
//   {ten: "An", thoiGianCho: 0, thoiGianRoiDi: "10:05"},
//   {ten: "Bình", thoiGianCho: 3, thoiGianRoiDi: "10:08"},
//   {ten: "Cường", thoiGianCho: 5, thoiGianRoiDi: "10:12"}
// ]
```