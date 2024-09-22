# Javascript
## Đề bài:
Tuổi của một người được tính dựa trên năm sinh của họ và năm hiện tại. Trong bài tập này, bạn sẽ viết một hàm để tính tuổi dựa trên năm sinh được nhập vào. Biết công thức tính tuổi:
```
Tuổi = Năm hiện tại - Năm sinh
```

### Yêu cầu:
- Viết một hàm JavaScript có tên `calculateAge` để tính số tuổi của một người dựa trên năm sinh của họ.
- In ra số tuổi tương ứng với năm hiện tại.
- Nếu năm sinh lớn hơn năm hiện tại, in ra một thông báo lỗi "Năm sinh không hợp lệ."

## Ví dụ:
**Input**:
- Năm sinh: `1990`

**Output**: 
- Kết quả: `Tuổi của bạn là: 34`

**Giải thích**: 
Năm hiện tại là 2024, tuổi của người sinh năm 1990 sẽ là 2024 - 1990 = 34 tuổi.

## Ví dụ khác:
- Năm sinh: `2025`

**Output**:
- Kết quả: `Năm sinh không hợp lệ`

**Giải thích**:
Vì năm sinh không thể lớn hơn năm hiện tại (2024), nên cần trả về thông báo lỗi.

### Gợi ý:
Bạn có thể lấy năm hiện tại bằng cách sử dụng đối tượng `Date` trong JavaScript.

# Playwright
## Đề bài
Viết code automation cho test case sau:
- Đi tới trang: https://material.playwrightvn.com/
- Click vào: Bài học 3: Todo page
- Thêm vào todo có nội dung: Xin chào, đây là bài thực hành ngày 18 tháng 9
- Verify chỉ có 1 Todo duy nhất được add vào.
- Sửa nội dung Todo: Xin chào, đây là bài thực hành ngày 18 tháng 9 - phiên bản đã chỉnh sửa
- Verify nội dung đã được chỉnh sửa
- Xoá Todo
- Verify Todo đã được xoá.
