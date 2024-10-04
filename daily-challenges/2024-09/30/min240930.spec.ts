/*
# Javascript
## Đề bài:
Tính toán khoảng cách giữa hai ngày là một vấn đề thường gặp khi xử lý automation test.

### Yêu cầu:
- Viết hàm `calculateDateDiff` tính số ngày giữa hai ngày cho trước.
- Hàm có 2 tham số: fromDate và toDate lần lượt là từ ngày, đến ngày. Các date này có format: 'dd/mm/yyyy'
*/
function formatDate(inputDate) {
    const parts = inputDate.split('/')
    const day = parts[0]
    const month = parts[1]
    const year = parts[2]

    return `${year}-${month}-${day}`
}

function calculateDateDiff(fromDate, toDate) {
    const start = new Date(formatDate(fromDate))
    const end = new Date(formatDate(toDate))
    const timeDifference = end - start
    const days = Math.abs(timeDifference / (1000 * 3600 * 24))
    return days
}

const fromDate = '20/01/2023'
const toDate = '20/05/2023'
console.log(calculateDateDiff(fromDate, toDate))