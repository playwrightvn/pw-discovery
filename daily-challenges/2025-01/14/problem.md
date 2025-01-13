# Bài tập TypeScript: Quản lý bán hàng đa nền tảng

## Đề bài

Một công ty thương mại điện tử bán hàng trên nhiều nền tảng khác nhau (Shopee, Lazada, Tiki,...) cần theo dõi doanh thu của các sản phẩm trên từng nền tảng. Họ muốn biết sản phẩm nào có **tổng doanh thu cao nhất** và sản phẩm nào **bán chạy nhất** (dựa trên số lượng bán ra).

Hãy viết một hàm TypeScript để:
1. Trả về **top 3 sản phẩm có doanh thu cao nhất**.
2. Trả về **sản phẩm bán chạy nhất trên mỗi nền tảng**.

---

## Yêu cầu

- **Tên hàm:** `analyzeSales`
- **Tham số:** 
  - Một mảng các đối tượng sản phẩm, mỗi đối tượng có cấu trúc:
    - `productId` (string): Mã sản phẩm.
    - `productName` (string): Tên sản phẩm.
    - `platform` (string): Tên nền tảng (ví dụ: "Shopee", "Lazada",...).
    - `quantitySold` (number): Số lượng bán ra.
    - `price` (number): Giá của sản phẩm.
- **Kết quả:** 
  - Hàm trả về một đối tượng chứa:
    - `topRevenueProducts`: Danh sách 3 sản phẩm có doanh thu cao nhất. Mỗi sản phẩm gồm:
      - `productName`: Tên sản phẩm.
      - `revenue`: Tổng doanh thu (quantitySold * price).
    - `topSellingProductsPerPlatform`: Danh sách sản phẩm bán chạy nhất trên mỗi nền tảng. Mỗi mục trong danh sách gồm:
      - `platform`: Tên nền tảng.
      - `productName`: Tên sản phẩm.
      - `quantitySold`: Số lượng bán ra.

---

## Gợi ý

1. **Tính doanh thu:**
   - Doanh thu của sản phẩm = `quantitySold * price`.
2. **Tìm top 3 sản phẩm doanh thu cao nhất:**
   - Sắp xếp danh sách sản phẩm theo doanh thu giảm dần và chọn 3 sản phẩm đầu tiên.
3. **Tìm sản phẩm bán chạy nhất trên mỗi nền tảng:**
   - Phân nhóm sản phẩm theo `platform` và tìm sản phẩm có `quantitySold` cao nhất trong từng nhóm.

---

## Mẫu TypeScript

```typescript
type Product = {
  productId: string;
  productName: string;
  platform: string;
  quantitySold: number;
  price: number;
};

function analyzeSales(products: Product[]): {
  topRevenueProducts: { productName: string; revenue: number }[];
  topSellingProductsPerPlatform: { platform: string; productName: string; quantitySold: number }[];
} {
  // Code sẽ được viết tại đây
}

```

### Test case: 
```typescript
const products: Product[] = [
  { productId: "P001", productName: "Điện thoại A", platform: "Shopee", quantitySold: 100, price: 500 },
  { productId: "P002", productName: "Laptop B", platform: "Lazada", quantitySold: 50, price: 1500 },
  { productId: "P003", productName: "Tai nghe C", platform: "Shopee", quantitySold: 300, price: 30 },
  { productId: "P004", productName: "Điện thoại D", platform: "Tiki", quantitySold: 20, price: 600 },
  { productId: "P005", productName: "Laptop E", platform: "Shopee", quantitySold: 10, price: 2000 },
  { productId: "P006", productName: "Chuột F", platform: "Lazada", quantitySold: 150, price: 20 },
];

const analysis = analyzeSales(products);
console.log(analysis);
// Kết quả mong đợi:
// {
//   topRevenueProducts: [
//     { productName: "Laptop B", revenue: 75000 },
//     { productName: "Điện thoại A", revenue: 50000 },
//     { productName: "Tai nghe C", revenue: 9000 }
//   ],
//   topSellingProductsPerPlatform: [
//     { platform: "Shopee", productName: "Tai nghe C", quantitySold: 300 },
//     { platform: "Lazada", productName: "Chuột F", quantitySold: 150 },
//     { platform: "Tiki", productName: "Điện thoại D", quantitySold: 20 }
//   ]
// }
```
