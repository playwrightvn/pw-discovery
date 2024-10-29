/*
# Javascript

## Đề bài:
Căn cước công dân (CCCD) là số đại diện cho công dân một nước, và đôi khi trong quá trình xử lý dữ liệu, chúng ta cần phát hiện các số CCCD bị trùng lặp. Trong bài tập này, bạn sẽ viết một hàm để tìm tất cả các số CCCD bị trùng trong một mảng.

### Yêu cầu:
- Viết một hàm JavaScript có tên `findDuplicateIDs` để tìm và liệt kê tất cả các số CCCD bị trùng lặp trong một mảng.
- Mỗi số CCCD trong mảng là một chuỗi gồm 12 ký tự số.
- Kết quả trả về là một mảng chứa các số CCCD bị trùng (mỗi số chỉ xuất hiện một lần trong kết quả).

## Ví dụ:
**Input**: 
- Mảng: `["123456789012", "098765432109", "123456789012", "111111111111", "098765432109", "222222222222"]`

**Output**: 
- Kết quả: `["123456789012", "098765432109"]`

**Giải thích**:
Trong mảng đầu vào, các số `"123456789012"` và `"098765432109"` xuất hiện nhiều hơn một lần, do đó chúng là các số CCCD bị trùng và được liệt kê trong kết quả.
*/

function findDuplicateIDs(arr) {
    const uniqueArray = [...new Set(arr)]
    return uniqueArray
}

console.log(findDuplicateIDs(["123456789012", "098765432109", "123456789012", "111111111111", "098765432109", "222222222222"]))