# Typescript challenge: XẾP ĐỒ VÀO TỦ

## Giới thiệu
Việc sắp xếp đồ đạc vào tủ luôn là một thách thức! Bạn cần tối ưu không gian để có thể chứa được nhiều đồ nhất có thể. Hãy viết chương trình giúp sắp xếp đồ vào tủ một cách thông minh.

## Yêu cầu
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
