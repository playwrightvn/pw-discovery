# Playwright
- Concert "Anh trai vượt ngàn chông gai" là một concert cực hot.
- Vé của concert thường được sold out trong 2 phút.
- Bạn là một fan của chương trình, muốn sử dụng Playwright để viết code automation và mua vé.
- Biết trang web đặt vé là:
  - https://material.playwrightvn.com/01-concert-ticket/
  - Tài khoản và mật khẩu đăng nhập: vn84 / StrongPassword@123

## Đề bài:
Viết code cho test case sau:
- beforeEach: login vào hệ thống
- afterEach: logout
- test case:
  - Đặt vé: Hỏa lực 1,2,3,4
  - Verify giỏ hàng có 1 sản phẩm
  - Đi tới trang giỏ hàng
  - Verify tổng tiền đúng với giá đã thêm ngoài trang chủ