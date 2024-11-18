function tinhNgayTetDen(): void {
    const targetDate: Date = new Date('2025-01-29T00:00:00');
    const print = setInterval(() => {
        const now: Date = new Date();
        const timeDifference = targetDate.getTime()- now.getTime();
        console.log(`targetDate: ${targetDate.getTime()}  ---  now: ${now.getTime()}`)
        if (timeDifference <= 0) {
            clearInterval(print);
            console.log("Tết đến rồi");
        }
        const days: number = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours: number = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes: number = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds: number = Math.floor((timeDifference % (1000 * 60)) / 1000);
        console.log(`Chỉ còn ${days} ngày, ${hours} giờ, ${minutes} phút, ${seconds} giây là tới Tết 2025`);
    }, 1000)
}

tinhNgayTetDen();

