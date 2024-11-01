# Đề bài: Halloween - Trò Chơi Đếm Kẹo

Một nhóm trẻ em tham gia trò chơi "trick or treat" vào đêm Halloween. Mỗi đứa trẻ nhận được một số loại kẹo khác nhau, mỗi loại có số lượng nhất định. Bây giờ bạn cần viết một chương trình để tính tổng số kẹo mà mỗi đứa trẻ nhận được và tìm ra đứa trẻ nhận được nhiều kẹo nhất.

## Đề bài:
Hãy viết một hàm TypeScript để trả về tên của đứa trẻ nhận được nhiều kẹo nhất.

### Yêu cầu:
- **Tên hàm:** `findTopTrickOrTreater`
- **Tham số:** 
  - Hàm nhận vào một tham số là một mảng các đối tượng `TrickOrTreater`, mỗi đối tượng chứa các thông tin sau:
    - `name` (string): Tên của đứa trẻ.
    - `candies` (mảng các đối tượng `Candy`): Mảng các loại kẹo mà đứa trẻ nhận được.
      - Mỗi đối tượng `Candy` bao gồm:
        - `type` (string): Tên loại kẹo.
        - `quantity` (number): Số lượng của loại kẹo đó.
- **Kết quả:** 
  - Hàm trả về tên của đứa trẻ nhận được nhiều kẹo nhất. Nếu có nhiều đứa trẻ có cùng tổng số kẹo cao nhất, trả về tên của đứa trẻ xuất hiện đầu tiên trong mảng.

### Ví dụ:
```typescript
type Candy = {
  type: string;
  quantity: number;
};

type TrickOrTreater = {
  name: string;
  candies: Candy[];
};

function findTopTrickOrTreater(trickOrTreaters: TrickOrTreater[]): string {
  // Code sẽ được viết tại đây
}
```

### Test cases:

```typescript
const trickOrTreaters: TrickOrTreater[] = [
  { 
    name: "John", 
    candies: [
      { type: "Chocolate", quantity: 10 },
      { type: "Gummy Bears", quantity: 15 }
    ] 
  },
  { 
    name: "Emma", 
    candies: [
      { type: "Lollipop", quantity: 12 },
      { type: "Chocolate", quantity: 8 }
    ] 
  },
  { 
    name: "Sophia", 
    candies: [
      { type: "Gummy Bears", quantity: 20 },
      { type: "Chocolate", quantity: 5 }
    ] 
  }
];

const topTrickOrTreater = findTopTrickOrTreater(trickOrTreaters);
console.log(topTrickOrTreater);
// Kết quả mong đợi: "John"
```

---

### Test cases:

1. **Test case 1:**
```typescript
const trickOrTreaters: TrickOrTreater[] = [
  { name: "Alice", candies: [{ type: "Chocolate", quantity: 20 }] },
  { name: "Bob", candies: [{ type: "Lollipop", quantity: 15 }, { type: "Chocolate", quantity: 10 }] }
];
```
   **Kết quả mong đợi:** `"Bob"`

2. **Test case 2:**
```typescript
const trickOrTreaters: TrickOrTreater[] = [
  { name: "Liam", candies: [{ type: "Gummy Bears", quantity: 10 }, { type: "Chocolate", quantity: 10 }] },
  { name: "Mia", candies: [{ type: "Chocolate", quantity: 15 }, { type: "Lollipop", quantity: 5 }] }
];
```
**Kết quả mong đợi:** `"Liam"`

3. **Test case 3:**
```typescript
const trickOrTreaters: TrickOrTreater[] = [
  { name: "Tom", candies: [{ type: "Gummy Bears", quantity: 20 }] },
  { name: "Jerry", candies: [{ type: "Chocolate", quantity: 5 }, { type: "Lollipop", quantity: 3 }] },
  { name: "Anna", candies: [{ type: "Lollipop", quantity: 8 }] }
];
```
**Kết quả mong đợi:** `"Tom"`