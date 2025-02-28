//1 -> chuyển thời gian đến sang số phút trong ngày để xử lý
//2 -> sắp xếp lại danh sách các KH để xử lý theo đúng thứ tự
//3 -> Xử lý tính toán thời gian chờ và thời gian rời đi của mỗi KH
//4 -> chuyển kết quả đã tính toán sang định dạng HH:mm


type KhachHang = {
    ten: string,
    thoiGianDen: string,
    thoiGianXuLy: number,
}

type KetQua = {
    ten: string,
    thoiGianCho: number,
    thoiGianRoiDi: string,
}

function chuyenDoiPhut(gioPhut: string) {
    const [gio, phut] = gioPhut.split(':').map(Number);
    return gio * 60 + phut;
}

function convertTimeFormat(input: number) {
    const gio = Math.floor(input / 60);
    const phut = input % 60;
    return `${String(gio).padStart(2, "0")}:${String(phut).padStart(2, "0")}`;
}


function tinhThoiGianCho(danhSachKhach: KhachHang[]) {
    danhSachKhach.sort((a, b) => chuyenDoiPhut(a.thoiGianDen) - chuyenDoiPhut(b.thoiGianDen));

    const result: KetQua[] = [];
    let thoiGianKetThucKhachHangTruoc = 0;

    for (const khachHang of danhSachKhach) {
        const thoiGianDen = chuyenDoiPhut(khachHang.thoiGianDen);
        const thoiGianCho = Math.max(0, thoiGianKetThucKhachHangTruoc - thoiGianDen);
        const thoiGianXuLy = thoiGianDen + thoiGianCho;
        const thoiGianRoiDi = thoiGianXuLy + khachHang.thoiGianXuLy;
        thoiGianKetThucKhachHangTruoc = thoiGianRoiDi;

        result.push({
            ten: khachHang.ten,
            thoiGianCho,
            thoiGianRoiDi: convertTimeFormat(thoiGianRoiDi)
        })
    }

    return result;
}


const khach = [
    { ten: "An", thoiGianDen: "10:00", thoiGianXuLy: 5 },
    { ten: "Bình", thoiGianDen: "10:02", thoiGianXuLy: 3 },
    { ten: "Cường", thoiGianDen: "10:03", thoiGianXuLy: 4 }
];

console.log(tinhThoiGianCho(khach));