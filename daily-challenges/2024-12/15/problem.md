# Typescript challenge: NINJA HÁI TÁO

## Giới thiệu
Ninja của chúng ta cần thu thập táo từ một khu vườn đặc biệt. Khu vườn có nhiều nhánh cây ở các độ cao khác nhau. Ninja có thể nhảy từ nhánh này sang nhánh khác, nhưng mỗi lần nhảy sẽ tiêu tốn năng lượng. Hãy giúp Ninja thu thập được nhiều táo nhất có thể với lượng năng lượng giới hạn!

## Yêu cầu
- Viết hàm `timDuongHaiTao(vuon, nangLuong)`
- Input:
  + vuon: mảng 2 chiều với các giá trị:
    * 0: không có gì
    * 1: nhánh cây (có thể đứng)
    * 2: táo (trên nhánh cây)
  + nangLuong: số điểm năng lượng ninja có
  + Ninja bắt đầu từ vị trí (0,0)
  + Mỗi bước nhảy tốn năng lượng bằng chênh lệch độ cao (giá trị tuyệt đối của hiệu số hàng)

## Output
- Số táo tối đa có thể hái được
- Đường đi để hái được số táo đó (mảng các tọa độ)

Test cases:
```javascript
const vuon = [
    [1, 0, 0, 2],
    [0, 1, 0, 0],
    [0, 0, 1, 2],
    [0, 0, 0, 1]
];

console.log(timDuongHaiTao(vuon, 5));
// Output: {
//   soTao: 2,
//   duongDi: [[0,0], [1,1], [2,2], [2,3], [3,3]]
// }

const vuon2 = [
    [1, 2, 0],
    [0, 1, 2],
    [2, 0, 1]
];

console.log(timDuongHaiTao(vuon2, 2));
// Output: {
//   soTao: 1,
//   duongDi: [[0,0], [0,1]]
// }
```

2. XẾP ĐỒ VÀO TỦ

Giới thiệu:
```
Việc sắp xếp đồ đạc vào tủ luôn là một thách thức! Bạn cần tối ưu không gian để có thể chứa được nhiều đồ nhất có thể. Hãy viết chương trình giúp sắp xếp đồ vào tủ một cách thông minh.
```

Yêu cầu:
- Viết hàm `xepTu(doVat, kichThuocTu)`
- Input:
  + doVat: mảng các object chứa thông tin đồ vật:
    ```javascript
    {
      ten: "Tên đồ vật",
      chieuCao: số,
      chieuRong: số,
      chieuSau: số,
      coTheXoay: boolean // có thể xoay 90 độ không
    }
    ```
  + kichThuocTu: object chứa kích thước tủ:
    ```javascript
    {
      chieuCao: số,
      chieuRong: số,
      chieuSau: số
    }
    ```

Output:
- Mảng các object mô tả cách xếp:
  ```javascript
  {
    ten: "Tên đồ vật",
    viTri: {x, y, z}, // tọa độ góc trái-dưới-sau
    huong: "dung" | "ngang" // hướng xếp
  }
  ```
- Nếu không thể xếp hết đồ vào tủ, trả về null

Test cases:
```javascript
const tu = {
  chieuCao: 100,
  chieuRong: 80,
  chieuSau: 60
};

const doDac = [
  {ten: "Hộp A", chieuCao: 30, chieuRong: 40, chieuSau: 50, coTheXoay: true},
  {ten: "Hộp B", chieuCao: 20, chieuRong: 30, chieuSau: 40, coTheXoay: false},
  {ten: "Hộp C", chieuCao: 40, chieuRong: 20, chieuSau: 30, coTheXoay: true}
];

console.log(xepTu(doDac, tu));
// Output: [
//   {ten: "Hộp A", viTri: {x: 0, y: 0, z: 0}, huong: "dung"},
//   {ten: "Hộp B", viTri: {x: 40, y: 0, z: 0}, huong: "dung"},
//   {ten: "Hộp C", viTri: {x: 0, y: 30, z: 0}, huong: "ngang"}
// ]

const doDacKhongXepDuoc = [
  {ten: "Hộp D", chieuCao: 90, chieuRong: 70, chieuSau: 50, coTheXoay: false},
  {ten: "Hộp E", chieuCao: 40, chieuRong: 30, chieuSau: 20, coTheXoay: true}
];

console.log(xepTu(doDacKhongXepDuoc, tu)); // Output: null
```

Bạn có muốn tôi giải thích thêm về thuật toán hoặc logic giải quyết cho bài nào không?