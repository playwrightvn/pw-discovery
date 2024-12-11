# Typescript challenge: THỢ PHA CHẾ

## Giới thiệu
Một quán cà phê cần phần mềm để quản lý công thức pha chế và kiểm tra khả năng pha chế dựa trên nguyên liệu hiện có. Bạn hãy giúp họ xây dựng hệ thống này!

## Yêu cầu
- Tạo interface cho nguyên liệu và công thức:
  ```typescript
  interface NguyenLieu {
    ten: string;
    donVi: "ml" | "g" | "muong";
    soLuong: number;
  }

  interface CongThuc {
    ten: string;
    nguyenLieu: NguyenLieu[];
    cachLam: string[];
    doKho: 1 | 2 | 3;  // độ khó pha chế
  }
  ```

- Viết class `QuanLyDoUong` với các phương thức:
  + `kiemTraKhaNangPhaChe(congThuc: CongThuc)`: Kiểm tra có thể pha được không
  + `thongKeNguyenLieuThieu(congThuc: CongThuc)`: Liệt kê nguyên liệu còn thiếu
  + `phaChe(congThuc: CongThuc)`: Thực hiện pha chế (trừ nguyên liệu)
  + `themNguyenLieu(nguyenLieu: NguyenLieu)`: Bổ sung nguyên liệu
  + `layDanhSachCoThePha()`: Lấy danh sách đồ uống có thể pha chế

## Test cases
```typescript
const kho = new QuanLyDoUong({
  nguyenLieu: [
    { ten: "Cà phê", donVi: "g", soLuong: 100 },
    { ten: "Sữa", donVi: "ml", soLuong: 500 },
    { ten: "Đường", donVi: "g", soLuong: 200 }
  ]
});

const latteCongThuc: CongThuc = {
  ten: "Latte",
  nguyenLieu: [
    { ten: "Cà phê", donVi: "g", soLuong: 18 },
    { ten: "Sữa", donVi: "ml", soLuong: 200 },
    { ten: "Đường", donVi: "g", soLuong: 10 }
  ],
  cachLam: [
    "Pha cà phê espresso",
    "Đánh sữa nóng",
    "Rót sữa từ từ vào cà phê"
  ],
  doKho: 2
};

console.log(kho.kiemTraKhaNangPhaChe(latteCongThuc));
// Output: true

kho.phaChe(latteCongThuc);
console.log(kho.layDanhSachNguyenLieu());
// Output: [
//   { ten: "Cà phê", donVi: "g", soLuong: 82 },
//   { ten: "Sữa", donVi: "ml", soLuong: 300 },
//   { ten: "Đường", donVi: "g", soLuong: 190 }
// ]
```