/*
# Javascript

## Đề bài:
Tết Nguyên Đán là một dịp Tết cổ truyền, quan trọng đối với người Việt. Ngày Tết Nguyên Đán của năm 2025 là ngày 29 tháng 1 năm 2025

### Yêu cầu:
- Viết một hàm Javascript có tên là `tinhNgayDenTet`, trả về số ngày, giờ, phút, giây đến Tết nguyên đán 2025.
- In ra thông tin ngày, giờ, phút, giây

## Ví dụ:
**Output**: 
- Kết quả: Chỉ còn 113 ngày, 20 giờ, 15 phút, 30 giây nữa là đến Tết Nguyên Đán 2025

## Nâng cao
- Viết code sao cho mỗi giây sẽ in ra kết quả một lần.
*/

function tinhNgayDenTet(){
    const tetND = new Date('2025-01-29T00:00:00')
    const currentDate = new Date()
    const timeDiff = tetND - currentDate
    if(timeDiff < 1){
        console.log('TET')
    }
    const day = Math.floor(timeDiff / (1000 * 3600 * 24))
    const hour = Math.floor((timeDiff - (day*1000*3600*24)) / (3600*1000))
    const minute = Math.floor((timeDiff - (day*1000*3600*24) - (hour*3600*1000))/60000)
    const second = Math.floor(timeDiff - (day*1000*3600*24) - hour*3600*1000 - minute*60000)
    console.log('Chỉ còn '+day+' ngày, '+hour+' giờ, '+minute+' phút, '+second+' giây nữa là đến Tết Nguyên Đán 2025')
}

tinhNgayDenTet()