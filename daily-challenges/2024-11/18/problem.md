# Playwright challenge
Trello là một ứng dụng nổi tiếng, cho phép bạn tạo và quản lý công việc theo các Kanban board.

# Đề bài:
Có trang trello clone sau: https://material.playwrightvn.com/026-trello.html. Hãy tổ chức code để đáp ứng các yêu cầu sau:
- Pre-condition: board có 3 cột:
    - Cần làm
    - Đang làm
    - Đã hoàn thành
- Sau khi test hoàn thành: xoá cả 3 cột đi
- Nội dung test:
    - Thêm công việc: "Viết bài Playwright Việt Nam" với độ ưu tiên là "cao". Verify thẻ này có class "priority-medium"
    - Di chuyển công việc này sang cột "Đang làm". Verify công việc này đã chuyển sang "Đang làm" thành công.