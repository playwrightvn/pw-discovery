/*
Javascript
Đề bài:
Email là một thông tin nhạy cảm và đôi khi chúng ta cần thay thế email trong một chuỗi bằng một chuỗi cố định như "hidden@example.com". Trong bài tập này, bạn sẽ viết một hàm để tìm và thay thế tất cả các địa chỉ email trong một chuỗi văn bản.

Yêu cầu:
Viết một hàm JavaScript có tên replaceEmail để thay thế tất cả các địa chỉ email trong chuỗi văn bản đầu vào bằng chuỗi "hidden@example.com".
Địa chỉ email trong chuỗi có định dạng chung là something@domain.com, trong đó:
something là tên người dùng (có thể chứa chữ cái, số, dấu chấm hoặc dấu gạch dưới).
domain.com là tên miền (có thể chứa chữ cái, dấu chấm).
*/

function replaceEmail(email) {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g
    return email.replace(emailRegex, 'hidden@example.com')
}

replaceEmail('test@gmail.com')