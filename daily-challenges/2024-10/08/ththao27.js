function tinhNgayDenTet() {
    const tet2025 = new Date('2025-01-29T00:00:00');

    const interval = setInterval(() => {
        const now = new Date();
        const timeDifference = tet2025 - now;

        if (timeDifference <= 0) {
            clearInterval(interval);
            console.log("Happy new year!");
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        console.log(`Chỉ còn ${days} ngày, ${hours} giờ, ${minutes} phút, ${seconds} giây nữa là đến Tết Nguyên Đán 2025`);
    }, 1000);
}

tinhNgayDenTet();