/*
# Javascript
## Đề bài:
Số từ trong một câu là tổng số các từ cách nhau bởi khoảng trắng. Trong bài tập này, bạn sẽ viết một hàm để đếm số từ trong một chuỗi được người dùng nhập vào. Một từ được định nghĩa là bất kỳ chuỗi ký tự nào không có khoảng trắng.



### Yêu cầu:
- Viết một hàm JavaScript có tên `countWords` để đếm số từ trong một chuỗi văn bản.
- Hàm sẽ nhận vào một chuỗi và trả về số từ trong chuỗi đó.
- Chuỗi có thể chứa các dấu câu như dấu chấm, dấu phẩy, hoặc dấu chấm than, nhưng chỉ tính số từ dựa trên các khoảng trắng ngăn cách.
*/

function countWords(words) {
    words = words.trim().split(/\s+/)
    return words.length
}

let count = countWords(`Chuỗi có thể chứa các dấu câu như dấu chấm, dấu phẩy, hoặc dấu chấm than, nhưng chỉ tính số từ dựa trên các khoảng trắng ngăn cách`)
console.log(count)