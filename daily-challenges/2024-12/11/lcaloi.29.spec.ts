const MenhGia = {
    '500k': 500000,
    '200k': 200000,
    '100k': 100000,
    '50k': 50000,
    '20k': 20000,
    '10k': 10000,
    '5k': 5000,
    '2k': 2000,
    '1k': 1000
};

function doiTien(soTien: number): {} | null {
    if (soTien < 1000) {
        return null;
    }
    let quantity: number = 0;
    let mod: number = 0;
    const results: {} = {};

    for (const key in MenhGia) {
        mod = soTien % MenhGia[key];
        quantity = ~~(soTien / MenhGia[key]);
        soTien -= (quantity * MenhGia[key]);

        if (quantity === 0) {
            continue;
        }

        results[MenhGia[key]] = quantity;
        if (mod === 0 && soTien % 1000 === 0) {
            break;
        }
    }

    return results;
}


console.log(doiTien(7580000));
console.log(doiTien(123000));
console.log(doiTien(1000000));
console.log(doiTien(500));