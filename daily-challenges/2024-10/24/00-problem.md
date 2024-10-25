# Typescript Challenge

Bạn đang làm việc trong một dự án soạn thảo âm nhạc, nơi mà các nốt nhạc được nhập vào bằng kí hiệu tiếng Việt và bạn cần chuyển chúng thành kí hiệu nốt nhạc theo chuẩn quốc tế (tiếng Anh).

## Đề bài:
Hãy viết một hàm TypeScript để chuyển đổi một mảng các kí hiệu nốt nhạc từ tiếng Việt sang tiếng Anh.

### Yêu cầu:
- **Tên hàm:** `convertNotes`
- **Tham số:** 
  - Hàm nhận vào một tham số là một mảng các chuỗi (string), mỗi chuỗi đại diện cho một nốt nhạc theo tiếng Việt (["đô", "rê", "mi", "fa", "sol", "la", "si"]).
- **Kết quả:** 
  - Hàm trả về một mảng mới gồm các chuỗi đại diện cho các nốt nhạc tương ứng theo kí hiệu tiếng Anh (["C", "D", "E", "F", "G", "A", "B"]).

---

### Ví dụ:
```typescript
function convertNotes(notes: string[]): string[] {
  // Code sẽ được viết tại đây
}
```

### Test cases:

```typescript
const vietnameseNotes = ["đô", "rê", "mi", "fa", "sol", "la", "si"];
const englishNotes = convertNotes(vietnameseNotes);
console.log(englishNotes);
// Kết quả mong đợi: ["C", "D", "E", "F", "G", "A", "B"]
```

### Test cases bổ sung:

1. **Test case 1:**
```typescript
const notes = ["đô", "fa", "la", "si"];
```
**Kết quả mong đợi:**
```typescript
["C", "F", "A", "B"]
```

2. **Test case 2:**
```typescript
const notes = ["rê", "sol", "mi"];
```
**Kết quả mong đợi:**
```typescript
["D", "G", "E"]
```

3. **Test case 3:**
```typescript
const notes = ["si", "la", "đô"];
```
**Kết quả mong đợi:**
```typescript
["B", "A", "C"]
```