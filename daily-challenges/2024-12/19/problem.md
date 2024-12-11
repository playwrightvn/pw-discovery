# Typescript challenge: TETRIS MINI

## Giới thiệu
Tetris là một trong những trò chơi kinh điển nhất mọi thời đại. Trong bài này, bạn sẽ xây dựng một phiên bản đơn giản của Tetris, tập trung vào logic cốt lõi của trò chơi: xoay khối và kiểm tra va chạm.

## Yêu cầu
- Tạo interface cho các thành phần:
```typescript
interface ToaDo {
  x: number;
  y: number;
}

interface Khoi {
  dang: 'I' | 'L' | 'J' | 'O' | 'T';  // Các loại khối cơ bản
  viTri: ToaDo;      // Vị trí góc trên bên trái của khối
  huong: 0 | 90 | 180 | 270;  // Góc xoay
  mau: string;       // Mã màu
}

interface TrangThaiGame {
  bangDiem: number;
  capDo: number;
  bangChoi: number[][];  // 0: ô trống, 1-5: các màu khối
}
```

- Class `TetrisGame` với các phương thức:
  + `diChuyenKhoi(huong: 'trai' | 'phai' | 'xuong')`: Di chuyển khối
  + `xoayKhoi()`: Xoay khối 90 độ
  + `kiemTraVaCham()`: Kiểm tra va chạm
  + `kiemTraHangDay()`: Kiểm tra và xóa hàng đã đầy
  + `taoKhoiMoi()`: Tạo khối mới ngẫu nhiên
  + `layTrangThai()`: Lấy trạng thái hiện tại của game

## Test cases
```typescript
const game = new TetrisGame({
  chieuRong: 10,
  chieuCao: 20
});

// Tạo khối mới
game.taoKhoiMoi();
console.log(game.layTrangThai());
// Output: {
//   bangDiem: 0,
//   capDo: 1,
//   bangChoi: [...], // Mảng 2 chiều 20x10
//   khoiHienTai: {
//     dang: 'L',
//     viTri: { x: 4, y: 0 },
//     huong: 0,
//     mau: '#FF0000'
//   }
// }

// Di chuyển khối
game.diChuyenKhoi('phai');
game.xoayKhoi();
console.log(game.kiemTraVaCham()); // false

// Sau khi khối chạm đáy
game.kiemTraHangDay();
console.log(game.layTrangThai());
// Output: Trạng thái mới với khối đã cố định
```