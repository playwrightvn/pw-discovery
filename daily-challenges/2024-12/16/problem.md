# Typescript challenge: TRÒ CHƠI ĐUA XE

## Giới thiệu
Đua xe là một trò chơi kinh điển! Trong bài này, bạn sẽ tạo một mô phỏng đua xe đơn giản với các yếu tố thực tế như nhiên liệu, vận tốc và chướng ngại vật. Người chơi cần điều khiển xe sao cho đi được xa nhất với lượng nhiên liệu có hạn.

## Yêu cầu
- Viết class `XeDua` với các thuộc tính:
  ```typescript
  {
    tocDo: number;          // km/h
    nhienLieu: number;      // lít
    tieuHao: number;        // lít/100km
    viTri: number;          // km (tính từ vị trí xuất phát)
    thoiGianChay: number;   // giây
    trangThai: "dung" | "chay" | "hetXang" | "vaCham";
  }
  ```

- Các phương thức:
  + `tangToc(delta: number)`: Tăng tốc độ thêm delta km/h
  + `giamToc(delta: number)`: Giảm tốc độ delta km/h
  + `chay(thoiGian: number)`: Di chuyển trong khoảng thời gian (giây)
  + `layThongTin()`: Trả về trạng thái hiện tại của xe

- Class `DuongDua`:
  ```typescript
  {
    doDai: number;          // km
    vatCan: Array<{
      viTri: number;        // km
      doKho: number;        // 1-5, ảnh hưởng đến tốc độ tối đa
    }>;
  }
  ```

## Test cases
```typescript
const duongDua = new DuongDua({
  doDai: 10,
  vatCan: [
    { viTri: 2, doKho: 3 },
    { viTri: 5, doKho: 4 },
    { viTri: 8, doKho: 2 }
  ]
});

const xe = new XeDua({
  tocDo: 0,
  nhienLieu: 5,
  tieuHao: 6,  // 6L/100km
});

xe.tangToc(60);    // Tăng tốc lên 60km/h
xe.chay(120);      // Chạy trong 2 phút

console.log(xe.layThongTin());
// Output: {
//   tocDo: 60,
//   nhienLieu: 4.4,
//   viTri: 2,
//   thoiGianChay: 120,
//   trangThai: "chay"
// }

// Khi gặp vật cản
xe.chay(60);
console.log(xe.layThongTin());
// Output: {
//   tocDo: 30,    // Giảm tốc do vật cản
//   nhienLieu: 4.1,
//   viTri: 2.5,
//   thoiGianChay: 180,
//   trangThai: "chay"
// }
```