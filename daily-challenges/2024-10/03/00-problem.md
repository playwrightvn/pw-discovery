# Playwright
## Đề bài:
Playwright cung cấp class WebSocket để lắng nghe và xử lý các sự kiện liên quan đến socket: https://playwright.dev/docs/api/class-websocket#methods

### Yêu cầu:
Viết test thực hiện các yêu cầu sau:
- Truy cập trang: https://echo.websocket.org/.ws
- Lắng nghe websocket: sự kiện framereceived
- Thực hiện send message: hello
- Assert nhận được message hello