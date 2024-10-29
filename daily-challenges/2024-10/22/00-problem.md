# Playwright
- Concert "Anh trai vượt ngàn chông gai" là một concert cực hot.
- Vé của concert thường được sold out trong 2 phút.
- Bạn là một fan của chương trình, muốn sử dụng Playwright để viết code automation và mua vé.
- Biết trang web đặt vé là:
  - https://material.playwrightvn.com/01-concert-ticket/
  - Tài khoản và mật khẩu đăng nhập: vn84 / StrongPassword@123

## Đề bài:
Viết code cho test case sau:
- Test group 1:
  - Name: authenticate
  - Test cases:
    - Test 1:
      - Name: Login
      - Step:
        - Step 1: Fill username, password
        - Step 2: Click button login
        - Step 3: Save authentication information to `const authFile = path.join(__dirname, '../../../playwright/.auth/user.json');`
- Test group 2:
  - Name: Book ticket
  - Test cases:
    - Test 1:
      - Name: Book ticket
      - Sử dụng lại authentication information từ test group 1
      - Step:
        - Step 1: Truy cập trang: https://material.playwrightvn.com/01-concert-ticket, verify heading xuất hiện mà không cần đăng nhập: "Chào mừng đến với trang đặt vé concert"
        - Step 1: Click button "Đặt vé", hạng vé: "Phát Tài và Tinh Tú". Verify popup xuất hiện
        - Step 2: Đặt 2 vé. Verify sau khi bấm xác nhận, alert hiển thị thông tin đặt vé thành công: 
        ```
        Đặt vé thành công!
        Hạng vé: Phát Tài và Tinh Tú
        Số lượng: 2
        ```
# Kiến thức bổ sung để làm bài: authentication
https://playwright.dev/docs/auth