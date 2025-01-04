## Đề bài: **Tính điểm Poker**

Một giải đấu Poker được tổ chức, và mỗi ván bài sẽ được tính điểm dựa trên **rank** (hạng bài) của người chơi và số **chip** (tiền cược) họ có. Mỗi người chơi được cung cấp thông tin về số chip họ còn lại và hạng bài họ đạt được trong ván chơi.

### Luật tính điểm:
- Điểm được tính dựa trên công thức:
  - **Tổng điểm = điểm hạng bài + số chip * 10**
- Điểm hạng bài được tính như sau:
  - **"Royal Flush"**: 1000 điểm.
  - **"Straight Flush"**: 750 điểm.
  - **"Four of a Kind"**: 500 điểm.
  - **"Full House"**: 400 điểm.
  - **"Flush"**: 300 điểm.
  - **"Straight"**: 200 điểm.
  - **"Three of a Kind"**: 150 điểm.
  - **"Two Pair"**: 100 điểm.
  - **"One Pair"**: 50 điểm.
  - **"High Card"**: 10 điểm.

### Yêu cầu:
Hãy viết một hàm TypeScript để:
1. **Tính tổng điểm** cho từng người chơi.
2. Trả về danh sách người chơi được sắp xếp theo **thứ tự giảm dần điểm số**.

---

### Định nghĩa hàm:
- **Tên hàm:** `calculatePokerScore`
- **Tham số:** 
  - Một mảng các đối tượng người chơi (objects), mỗi đối tượng chứa các thông tin sau:
    - `name` (string): Tên người chơi.
    - `rank` (string): Hạng bài của người chơi.
    - `chips` (number): Số chip người chơi có.
- **Kết quả:** 
  - Hàm trả về một mảng các đối tượng gồm thông tin `name` và `score` của người chơi, được sắp xếp giảm dần theo `score`.

---

### Ví dụ:
```typescript
type Player = {
  name: string;
  rank: string;
  chips: number;
};

function calculatePokerScore(players: Player[]): { name: string, score: number }[] {
  // Code sẽ được viết tại đây
}
```

---

### Test cases:

1. **Test case 1:**
```typescript
const players: Player[] = [
  { name: "Alice", rank: "Full House", chips: 20 },
  { name: "Bob", rank: "Flush", chips: 30 },
  { name: "Charlie", rank: "High Card", chips: 100 }
];

const result = calculatePokerScore(players);
console.log(result);
// Kết quả mong đợi:
// [
//   { name: "Charlie", score: 1010 },
//   { name: "Bob", score: 600 },
//   { name: "Alice", score: 600 }
// ]
```

2. **Test case 2:**
```typescript
const players: Player[] = [
  { name: "David", rank: "Royal Flush", chips: 5 },
  { name: "Emma", rank: "Straight Flush", chips: 10 },
  { name: "Frank", rank: "One Pair", chips: 50 }
];

const result = calculatePokerScore(players);
console.log(result);
// Kết quả mong đợi:
// [
//   { name: "Emma", score: 850 },
//   { name: "David", score: 1050 },
//   { name: "Frank", score: 550 }
// ]
```

3. **Test case 3:**
```typescript
const players: Player[] = [
  { name: "George", rank: "Four of a Kind", chips: 15 },
  { name: "Hannah", rank: "Three of a Kind", chips: 25 },
  { name: "Ian", rank: "Straight", chips: 8 }
];

const result = calculatePokerScore(players);
console.log(result);
// Kết quả mong đợi:
// [
//   { name: "George", score: 650 },
//   { name: "Hannah", score: 400 },
//   { name: "Ian", score: 280 }
// ]
``` 
