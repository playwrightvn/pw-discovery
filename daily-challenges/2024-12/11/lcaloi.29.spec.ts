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
}

function doiTien(soTien: number) {
    if (soTien < 1000) {
        console.log(`Số tiền quá nhỏ để đổi`);
        return null;
    }

    const results = {};

    for (const key in MenhGia) {
        const quantity: number = Math.floor(soTien / MenhGia[key]);

        if (quantity > 0) {
            results[key] = quantity;
            soTien -= (quantity * MenhGia[key]);
        }

        if (soTien === 0) {
            break;
        }
    }
    return results;
}

console.log(doiTien(123000));
console.log(doiTien(500));
console.log(doiTien(1000000));