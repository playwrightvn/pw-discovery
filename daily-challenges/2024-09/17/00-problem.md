# Javascript
## Đề bài:
Số nguyên tố là một số tự nhiên lớn hơn 1 và chỉ chia hết cho 1 và chính nó. Trong bài tập này, bạn sẽ viết một hàm để kiểm tra xem một số có phải là số nguyên tố hay không.

Một số nguyên tố là số chỉ có đúng hai ước là 1 và chính nó. Để kiểm tra một số n có phải số nguyên tố hay không, bạn cần kiểm tra xem n có chia hết cho bất kỳ số nào từ 2 đến căn bậc hai của n không. Nếu có, nó không phải số nguyên tố

### Yêu cầu:
- Viết một hàm JavaScript có tên `isPrime` để kiểm tra xem một số có phải là số nguyên tố không.
- Nếu số là số nguyên tố, in ra "Số này là số nguyên tố". Nếu không phải, in ra "Số này không phải là số nguyên tố".

## Ví dụ:

**Input**: 
- Số: `7`

**Output**: 
- Kết quả: `"Số này là số nguyên tố"`

**Giải thích**: 
Số `7` chỉ chia hết cho `1` và `7`, do đó nó là số nguyên tố.

## Ví dụ khác:

**Input**: 
- Số: `10`

**Output**: 
- Kết quả: `"Số này không phải là số nguyên tố"`

**Giải thích**: 
Số `10` chia hết cho `1`, `2`, `5`, và `10`, do đó nó không phải là số nguyên tố.

### Gợi ý:
Bạn có thể sử dụng vòng lặp để kiểm tra số đó có chia hết cho bất kỳ số nào từ 2 đến căn bậc hai của số đó hay không. Nếu có, thì đó không phải là số nguyên tố.

# Playwright
## Đề bài
Viết code automation cho test case sau:
- Đi tới trang: https://material.playwrightvn.com/
- Click vào: Bài học 2: Product page
- Thêm vào giỏ hàng 2 sản phẩm 1.
- Thêm vào giỏ hàng 2 sản phẩm 2.
- Thêm vào giỏ hàng 3 sản phẩm 3.

- Kiểm số lượng sản phẩm đúng.
- (Nâng cao) Kiểm tra tổng tiền sản phẩm đúng (tổng tiền = tổng (số lượng * đơn giá))

