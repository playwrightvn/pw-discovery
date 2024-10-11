function tinhNgayDenTet() {
  const targetDate = new Date("2025-01-29T00:00:00");
  const now = new Date();
  const timeDifference = targetDate - now;
  if (timeDifference <= 0) {
    console.log("Tết đến rồi");
    return;
  }
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  console.log(
    `Chỉ còn ${days} ngày, ${hours} giờ, ${minutes} phút, ${seconds} giây là tới Tết 2025`
  );
}

let check = setInterval(tinhNgayDenTet, 1000);
tinhNgayDenTet();
console.log(check);
