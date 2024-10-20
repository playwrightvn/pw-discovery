# Typescript
Nhân ngày 20-10, một trang web tổ chức cuộc thi viết bài tôn vinh phụ nữ. Mỗi bài viết sẽ được chấm điểm dựa trên số lượt tương tác như lượt thích (like), bình luận (comment), và chia sẻ (share). Điểm số của mỗi bài viết được tính như sau:
- **1 like = 1 điểm**.
- **1 comment = 3 điểm**.
- **1 share = 10 điểm**.

## Đề bài:
Hãy viết một hàm TypeScript để trả về top 3 bài viết có điểm cao nhất.

### Yêu cầu:
- **Tên hàm:** `getTop3Post`
- **Tham số:** 
  - Hàm nhận vào một tham số là một mảng các đối tượng bài viết (objects), mỗi đối tượng chứa các thông tin sau:
    - `title` (string): Tiêu đề bài viết.
    - `likeCount` (number): Số lượt thích (like).
    - `commentCount` (number): Số lượt bình luận (comment).
    - `shareCount` (number): Số lượt chia sẻ (share).
- **Cách tính điểm:** 
  - Tổng điểm = số like * 1 + số comment * 3 + số share * 10.
- **Kết quả:** 
  - Hàm trả về một mảng gồm 3 bài viết có điểm cao nhất (hoặc ít hơn nếu không đủ 3 bài viết), được sắp xếp theo thứ tự từ cao đến thấp dựa trên điểm số. Mỗi bài viết trong mảng kết quả bao gồm thông tin `title` và `score` (tổng điểm).

---

### Ví dụ:
```typescript
type Post = {
  title: string;
  likeCount: number;
  commentCount: number;
  shareCount: number;
};

function getTop3Post(posts: Post[]): { title: string, score: number }[] {
  // Code sẽ được viết tại đây
}
```

### Test cases:

```typescript
const posts: Post[] = [
  { title: "Phụ nữ hiện đại", likeCount: 10, commentCount: 5, shareCount: 2 },
  { title: "Người mẹ Việt Nam", likeCount: 20, commentCount: 10, shareCount: 5 },
  { title: "Những người phụ nữ tiên phong", likeCount: 5, commentCount: 2, shareCount: 1 },
  { title: "Phụ nữ trong công nghệ", likeCount: 18, commentCount: 12, shareCount: 7 },
  { title: "Sức mạnh của phụ nữ", likeCount: 8, commentCount: 7, shareCount: 4 }
];

const top3 = getTop3Post(posts);
console.log(top3);
// Kết quả mong đợi:
// [
//   { title: 'Phụ nữ trong công nghệ', score: 124 },
//   { title: 'Người mẹ Việt Nam', score: 100 },
//   { title: 'Sức mạnh của phụ nữ', score: 69 }
// ]
```

### Test cases:

1. **Test case 1:**
```typescript
const posts: Post[] = [
  { title: "Phụ nữ hiện đại", likeCount: 10, commentCount: 5, shareCount: 2 },
  { title: "Người mẹ Việt Nam", likeCount: 20, commentCount: 10, shareCount: 5 },
  { title: "Những người phụ nữ tiên phong", likeCount: 5, commentCount: 2, shareCount: 1 },
  { title: "Phụ nữ trong công nghệ", likeCount: 18, commentCount: 12, shareCount: 7 },
  { title: "Sức mạnh của phụ nữ", likeCount: 8, commentCount: 7, shareCount: 4 }
];
```
   **Kết quả mong đợi:**
```typescript
[
    { title: "Phụ nữ trong công nghệ", score: 124 },
    { title: "Người mẹ Việt Nam", score: 100 },
    { title: "Sức mạnh của phụ nữ", score: 69 }
]
```

2. **Test case 2:**
```typescript
const posts: Post[] = [
    { title: "Sự kiên cường của phụ nữ", likeCount: 15, commentCount: 8, shareCount: 3 },
    { title: "Chị tôi", likeCount: 25, commentCount: 15, shareCount: 6 },
    { title: "Người bà yêu thương", likeCount: 5, commentCount: 4, shareCount: 1 }
];
```
**Kết quả mong đợi:**
```typescript
[
  { title: 'Chị tôi', score: 130 },
  { title: 'Sự kiên cường của phụ nữ', score: 69 },
  { title: 'Người bà yêu thương', score: 27 }
]
```

3. **Test case 3:**
```typescript
const posts: Post[] = [
    { title: "Hành trình của mẹ", likeCount: 8, commentCount: 7, shareCount: 4 },
    { title: "Phụ nữ trong công nghệ", likeCount: 18, commentCount: 12, shareCount: 7 }
];
```
**Kết quả mong đợi:**
```typescript
[
  { title: 'Phụ nữ trong công nghệ', score: 124 },
  { title: 'Hành trình của mẹ', score: 69 }
]
```