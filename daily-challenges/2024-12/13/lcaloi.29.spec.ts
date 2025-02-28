type TrangThai = 'đang trồng' | 'sẵn sàng thu hoạch' | 'đã thu hoạch' | '';

class CayTrong {
    name: string;
    thoiGianTrong: number;
    sanLuong: number;
    trangThai: TrangThai;
    thoiGianBatDau: Date | null;
    thoiGianThuHoach: Date;

    constructor(name: string, thoiGianTrong: number, sanLuong: number) {
        this.name = name;
        this.thoiGianTrong = thoiGianTrong;
        this.sanLuong = sanLuong;
        this.trangThai = '';
        this.thoiGianBatDau = null;
    }

    trong() {
        if (!this.trangThai || !this.thoiGianBatDau) {
            this.thoiGianBatDau = new Date();
            this.trangThai = 'đang trồng';
            this.thoiGianThuHoach = new Date(this.thoiGianBatDau.getTime() + this.thoiGianTrong * 3_600_000);
            console.log(`Đã bắt đầu trồng cây. Bạn có thể thu hoạch vào lúc ${convertTime(this.thoiGianThuHoach)}`);
            return;
        }
        console.log(`Cây đã được trồng vào lúc ${convertTime(this.thoiGianBatDau)}`);
    }

    kiemTraTrangThai() {
        if (!this.trangThai || !this.thoiGianBatDau) {
            return 'Cây chưa được trồng';
        }

        const now = new Date();

        this.thoiGianBatDau = this.thoiGianBatDau.getTime() > now.getTime() ? this.thoiGianBatDau : now;

        if (this.thoiGianBatDau.getTime() >= this.thoiGianThuHoach.getTime()) {
            this.trangThai = 'sẵn sàng thu hoạch';
            return this.trangThai;
        }
        if (this.trangThai === 'đã thu hoạch') {
            return this.trangThai;
        }

        this.trangThai = 'đang trồng';
        return this.trangThai;
    }

    thuHoach() {
        if (this.trangThai === 'sẵn sàng thu hoạch') {
            this.trangThai = 'đã thu hoạch';
            return this.sanLuong;
        }

        if (this.trangThai === 'đã thu hoạch') {
            return 'Cây đã được thu hoạch rồi';
        }
        return `Cây đang ở trạng thái ${this.trangThai} nên chưa thể thu hoạch được`;
    }

    setSkipTime(hours: number) {
        this.thoiGianBatDau?.setTime(this.thoiGianBatDau.getTime() + hours * 3_600_000);
    }
}

function convertTime(date: Date) {
    return date.toLocaleTimeString('vi-VN', { hourCycle: 'h24' });
}



const lua = new CayTrong("Lúa", 2, 10); // 2 giờ, 10kg
lua.trong();
console.log(lua.kiemTraTrangThai()); // "đang trồng"

// Sau 2 giờ
lua.setSkipTime(2);
console.log(lua.kiemTraTrangThai()); // "sẵn sàng thu hoạch"
console.log(lua.thuHoach()); // 10

const nongTrai = [
    new CayTrong("Lúa", 2, 10),
    new CayTrong("Cà chua", 1, 5),
    new CayTrong("Khoai tây", 3, 20)
];

for (const cayTrong of nongTrai) {
    console.log(`Cây ${cayTrong.name}`);
    cayTrong.trong();
    console.log(cayTrong.kiemTraTrangThai());

    cayTrong.setSkipTime(cayTrong.thoiGianTrong);

    console.log(cayTrong.kiemTraTrangThai());
    console.log(cayTrong.thuHoach());
}