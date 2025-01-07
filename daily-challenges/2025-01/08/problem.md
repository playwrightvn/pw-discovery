## Đề bài: Chợ Tết online

Nhân dịp Tết nguyên đán, một trang web thương mại điện tử tổ chức chương trình **Chợ Tết online**, nơi mọi người có thể đặt mua các mặt hàng truyền thống như bánh chưng, hoa đào, mứt tết, hay quà biếu. Mỗi sản phẩm sẽ có giá tiền, số lượng đặt mua, và danh mục (loại sản phẩm).

### Đề bài:
Hãy viết một hàm TypeScript để tính tổng doanh thu theo từng danh mục sản phẩm.

---

### Yêu cầu:
- **Tên hàm:** `calculateRevenueByCategory`
- **Tham số:**
  - Hàm nhận vào một tham số là một mảng các đối tượng sản phẩm, mỗi đối tượng chứa các thông tin sau:
    - `name` (string): Tên sản phẩm.
    - `price` (number): Giá tiền của một sản phẩm.
    - `quantity` (number): Số lượng sản phẩm đã đặt.
    - `category` (string): Danh mục sản phẩm (ví dụ: "Bánh kẹo", "Hoa", "Quà biếu").
- **Kết quả:**
  - Hàm trả về một đối tượng, trong đó mỗi **key** là một danh mục sản phẩm, và **value** là tổng doanh thu (tính bằng giá tiền * số lượng) của danh mục đó.

---

### Ví dụ:
```typescript
type Product = {
  name: string;
  price: number;
  quantity: number;
  category: string;
};

function calculateRevenueByCategory(products: Product[]): Record<string, number> {
  // Code sẽ được viết tại đây
}
```

---

### Test cases:

#### Test case 1:
```typescript
const products: Product[] = [
  { name: "Bánh chưng", price: 200000, quantity: 10, category: "Bánh kẹo" },
  { name: "Hoa đào", price: 500000, quantity: 5, category: "Hoa" },
  { name: "Mứt tết", price: 150000, quantity: 20, category: "Bánh kẹo" },
  { name: "Giỏ quà Tết", price: 1000000, quantity: 3, category: "Quà biếu" }
];

const revenue = calculateRevenueByCategory(products);
console.log(revenue);
// Kết quả mong đợi:
// {
//   "Bánh kẹo": 5000000,
//   "Hoa": 2500000,
//   "Quà biếu": 3000000
// }
```

#### Test case 2:
```typescript
const products: Product[] = [
  { name: "Cây quất", price: 1000000, quantity: 2, category: "Hoa" },
  { name: "Hạt dưa", price: 100000, quantity: 30, category: "Bánh kẹo" },
  { name: "Hộp quà biếu cao cấp", price: 2000000, quantity: 1, category: "Quà biếu" }
];

const revenue = calculateRevenueByCategory(products);
console.log(revenue);
// Kết quả mong đợi:
// {
//   "Hoa": 2000000,
//   "Bánh kẹo": 3000000,
//   "Quà biếu": 2000000
// }
```

#### Test case 3:
```typescript
const products: Product[] = [
  { name: "Lì xì đỏ", price: 10000, quantity: 100, category: "Phụ kiện" },
  { name: "Hoa mai", price: 700000, quantity: 4, category: "Hoa" }
];

const revenue = calculateRevenueByCategory(products);
console.log(revenue);
// Kết quả mong đợi:
// {
//   "Phụ kiện": 1000000,
//   "Hoa": 2800000
// }
```
