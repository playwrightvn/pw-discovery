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
// soTao: 2,
// duongDi: [[0,0], [1,1], [2,2], [2,3], [3,3]]
// }

const vuon2 = [
[1, 2, 0],
[0, 1, 2],
[2, 0, 1]
];

console.log(timDuongHaiTao(vuon2, 2));
// Output: {
// soTao: 1,
// duongDi: [[0,0], [0,1]]
// }

```