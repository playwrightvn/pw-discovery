# Typescript challenge: QUẢN LÝ THƯ VIỆN

## Giới thiệu
Thư viện trường học cần một hệ thống quản lý sách đơn giản nhưng hiệu quả. Hệ thống cần theo dõi việc mượn/trả sách, tình trạng sách và gửi thông báo khi sách quá hạn.

## Yêu cầu
- Tạo các interface:
```typescript
interface Sach {
  maSach: string;
  tenSach: string;
  tacGia: string;
  theLoai: string[];
  trangThai: 'có sẵn' | 'đang mượn' | 'đang sửa chữa';
  viTri: string;  // Vị trí trên kệ
}

interface DocGia {
  maDocGia: string;
  hoTen: string;
  email: string;
  sachDangMuon: PhieuMuon[];
  lichSuMuon: PhieuMuon[];
}

interface PhieuMuon {
  maSach: string;
  maDocGia: string;
  ngayMuon: Date;
  hanTra: Date;
  ngayTraThucTe?: Date;
  tinhTrang: 'đang mượn' | 'đã trả' | 'quá hạn';
}
```

- Class `ThuVien` với các phương thức:
  + `muonSach(maDocGia: string, maSach: string)`: Tạo phiếu mượn mới
  + `traSach(maPhieuMuon: string, tinhTrangSach: string)`: Ghi nhận trả sách
  + `kiemTraQuaHan()`: Kiểm tra và cập nhật sách quá hạn
  + `timSach(tuKhoa: string)`: Tìm kiếm sách theo từ khóa
  + `thongKeDocGia(maDocGia: string)`: Xem thống kê mượn/trả của độc giả
  + `guiThongBaoQuaHan()`: Gửi email thông báo cho sách quá hạn

## Test cases
```typescript
const thuVien = new ThuVien();

// Thêm sách
thuVien.themSach({
  maSach: "BOOK001",
  tenSach: "Clean Code",
  tacGia: "Robert C. Martin",
  theLoai: ["Công nghệ", "Lập trình"],
  trangThai: "có sẵn",
  viTri: "A1-02"
});

// Mượn sách
const phieuMuon = thuVien.muonSach("USER001", "BOOK001");
console.log(phieuMuon);
// Output: {
//   maSach: "BOOK001",
//   maDocGia: "USER001",
//   ngayMuon: "2024-12-12T00:00:00.000Z",
//   hanTra: "2024-12-26T00:00:00.000Z",
//   tinhTrang: "đang mượn"
// }

// Kiểm tra sách quá hạn
const sachQuaHan = thuVien.kiemTraQuaHan();
console.log(sachQuaHan);
// Output: [
//   {
//     maSach: "BOOK002",
//     maDocGia: "USER002",
//     ngayMuon: "2024-11-01T00:00:00.000Z",
//     hanTra: "2024-11-15T00:00:00.000Z",
//     tinhTrang: "quá hạn"
//   }
// ]
```