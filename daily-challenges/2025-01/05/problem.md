# Typescript - Gói Bánh Chưng

## Đề bài:

Một gia đình chuẩn bị gói bánh chưng để đón Tết. Công thức cho mỗi chiếc bánh chưng như sau:

- **200g gạo nếp**.
- **50g đỗ xanh**.
- **100g thịt lợn**.
- **5g hành lá**.

Hãy viết một hàm TypeScript để tính toán số lượng nguyên liệu cần thiết để gói một số lượng bánh chưng nhất định.

### Yêu cầu:
- **Tên hàm:** `calculateIngredients`
- **Tham số:**
  - Một số nguyên `numBanh` (số lượng bánh chưng cần gói).
- **Kết quả:**
  - Hàm trả về một đối tượng bao gồm số lượng nguyên liệu cần thiết với đơn vị gram, gồm các thuộc tính:
    - `gaoNep`: số gram gạo nếp.
    - `doXanh`: số gram đỗ xanh.
    - `thitLon`: số gram thịt lợn.
    - `hanhLa`: số gram hành lá.

---

### Ví dụ:

#### Input:
```typescript
const numBanh = 10;
const ingredients = calculateIngredients(numBanh);
console.log(ingredients);
```

#### Output:
```typescript
{
  gaoNep: 2000,    // 10 * 200g
  doXanh: 500,     // 10 * 50g
  thitLon: 1000,   // 10 * 100g
  hanhLa: 50       // 10 * 5g
}
```

---

### Test cases:

1. **Input:**
```typescript
const numBanh = 5;
```
**Output:**
```typescript
{
  gaoNep: 1000,
  doXanh: 250,
  thitLon: 500,
  hanhLa: 25
}
```

2. **Input:**
```typescript
const numBanh = 0;
```
**Output:**
```typescript
Error: Số lượng bánh phải là số nguyên dương.
```

3. **Input:**
```typescript
const numBanh = 50;
```
**Output:**
```typescript
{
  gaoNep: 10000,
  doXanh: 2500,
  thitLon: 5000,
  hanhLa: 250
}
```