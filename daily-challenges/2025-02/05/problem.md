# 🎯 Thử Thách TypeScript: Bốc Lì Xì Đầu Năm 🎯  

## Đề bài:  
Trong dịp Tết, bạn tham gia một trò chơi bốc lì xì may mắn. Bạn sẽ rút một số ngẫu nhiên trong khoảng từ **1 đến 100**.  

**Luật chơi:**  
- Nếu số rút được là **số chẵn**, bạn thắng ngay lập tức.  
- Nếu số rút được là **số lẻ**, bạn phải rút lại.  
- Bạn có **tối đa 10 lần** để rút. Nếu sau 10 lần vẫn chưa rút được số chẵn, trò chơi kết thúc và bạn không nhận được lì xì.  

## Yêu cầu:  
Hãy viết một hàm TypeScript để mô phỏng trò chơi này.  

- **Tên hàm:** `pickLuckyMoney`  
- **Tham số:** Không có tham số đầu vào.  
- **Kết quả trả về:**  
  - Nếu bốc được số chẵn, trả về số đó.  
  - Nếu hết 10 lượt mà vẫn không có số chẵn, trả về `null`.  

---

## Ví dụ:  
```typescript
const luckyNumber = pickLuckyMoney();
console.log(luckyNumber);
```

### Kết quả mong đợi:  
- Nếu bốc trúng số chẵn trong 10 lượt, ví dụ:  
  ```typescript
  42
  ```
- Nếu sau 10 lần vẫn chưa bốc được số chẵn:  
  ```typescript
  null
  ```

---

💰 Chúc bạn may mắn nhận được lì xì số đẹp ^^