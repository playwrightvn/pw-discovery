export type TrangThaiTrong = 'dang trong' | 'san sang thu hoach' | 'da thu hoach' | '';

class CayTrong {
    readonly name: string;
    readonly thoiGianTrong: number;
    readonly sanLuong: number;
    private trangThai: TrangThaiTrong;
    private thoiGianBatDau: Date | null;
    private thoiGianThuHoach: Date | null;

    constructor(name: string, thoiGianTrong: number, sanLuong: number) {
        this.name = name;
        this.thoiGianTrong = thoiGianTrong;
        this.sanLuong = sanLuong;
        this.thoiGianBatDau = null;
        this.trangThai = '';
        this.thoiGianThuHoach = null;
    };

    trong() {
        if (!this.trangThai || !this.thoiGianBatDau) {
            const now = new Date();
            this.trangThai = 'dang trong';
            this.thoiGianBatDau = now;
            this.thoiGianThuHoach = new Date(now);
            this.thoiGianThuHoach.setHours(now.getHours() + this.thoiGianTrong);
            console.log(`Bat dau trong cay: ${convertTimeToString(this.thoiGianBatDau)}. Ban co the thu hoach sau ${this.thoiGianTrong}h nua`);
            return;
        }
        console.log(`Cay da duoc trong vao luc ${convertTimeToString(this.thoiGianBatDau)}`);
    }

    kiemTraTrangThai(): string {
        if (!this.thoiGianBatDau || !this.thoiGianThuHoach) {
            return 'Cây chưa được trồng'
        }

        if (this.trangThai === 'da thu hoach') {
            return this.trangThai;
        }

        if (this.thoiGianBatDau.getTime() >= this.thoiGianThuHoach.getTime()) {
            return this.trangThai = 'san sang thu hoach';
        }
        return this.trangThai = 'dang trong';
    }

    thuHoach() {
        if (this.trangThai === 'san sang thu hoach') {
            this.trangThai = 'da thu hoach';
            return this.sanLuong;
        }
        if (this.trangThai === 'da thu hoach') {
            return 'Cay da duoc thu hoach roi';
        }
        return `Chua the thu hoach. Cay dang trong thai thai: ${this.trangThai}`;
    }

    setSkipTime(hours: number) {
        if (!this.thoiGianBatDau) {
            throw new Error('Không lấy được time bắt đầu trồng cây');
        }
        this.thoiGianBatDau?.setHours(this.thoiGianBatDau.getHours() + hours);
    }

}

function convertTimeToString(date: Date) {
    return date.toLocaleString('vi-vn', {
        'hourCycle': 'h24'
    });
}


const nongTrai = [
    new CayTrong("Lúa", 2, 10),
    new CayTrong("Cà chua", 1, 5),
    new CayTrong("Khoai tây", 3, 20)
];

const lua = new CayTrong("Lúa", 2, 10); // 2 giờ, 10kg
lua.trong();
console.log(lua.kiemTraTrangThai());// "đang trồng"

// Sau 2 giờ
lua.setSkipTime(2);
console.log(lua.kiemTraTrangThai()); // "sẵn sàng thu hoạch"
console.log(lua.thuHoach()); // 10
console.log(lua.kiemTraTrangThai());

// lua.trong();
console.log(lua.thuHoach());
