// Javascript
function tinhNgayDenTet() {
    const giay = 1000;
    const phut = giay * 60;
    const gio = phut * 60;
    const ngay = gio * 24;
    const ngayTet = new Date("01/29/2025");
    const interval = setInterval(() => {
        let thoiGianConLai;
        const ngayHienTai = new Date();
        thoiGianConLai = ngayTet.getTime() - ngayHienTai.getTime();
        if (thoiGianConLai <= 0) {
            clearInterval(interval);
            console.log('Tết Nguyên Đán 2025');
        } else {
            console.log(`Chỉ còn ${Math.floor(thoiGianConLai / ngay)} ngày,`
                + ` ${Math.floor(thoiGianConLai % ngay / gio)} giờ, ${Math.floor(thoiGianConLai % gio / phut)} phút,`
                + ` ${Math.floor(thoiGianConLai % phut / giay)} giây nữa là đến Tết Nguyên Đán 2025`
            )
        }
    }, 1000);
}