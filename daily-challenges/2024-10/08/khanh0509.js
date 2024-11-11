function tinhNgayDenTet() {
  let now = new Date();
  let TET = new Date("2025-1-29");
  let diffDate = Math.abs(now - TET) / (24 * 60 * 60 * 1000);
  let day = Math.trunc(diffDate); // ngay

  let diffhours = (diffDate - day) * 24;
  let hours = Math.trunc(diffhours); // gio

  let diffminutes = (diffhours - hours) * 60;
  let minutes = Math.trunc(diffminutes); // phut

  let diffseconds = (diffminutes - minutes) * 60;
  let seconds = Math.trunc(diffseconds); // giay

  console.log(`Chỉ còn ${day} ngày, ${hours} giờ, ${minutes} phút, ${seconds} giây nữa là đến Tết Nguyên Đán 2025`)
}

tinhNgayDenTet();
