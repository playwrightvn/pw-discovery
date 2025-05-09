// ## Yêu cầu
// - Viết hàm `doiTien(soTien)` nhận vào số tiền cần đổi (đơn vị: đồng)
// - Trả về một object chứa số lượng từng mệnh giá sao cho tổng số tờ tiền là ít nhất
// - Các mệnh giá có sẵn: 500000, 200000, 100000, 50000, 20000, 10000, 5000, 2000, 1000
// - Nếu không thể đổi được (số tiền < 1000), trả về `null`

let menhGia = [500000, 200000, 100000, 50000, 20000, 10000, 5000, 2000, 1000];
let result = {};

function moneyExchange(amount:any){
    if(amount < 1000){
        return null;
    }
    for(let i = 0; i < menhGia.length; i++){
        let soLuong = Math.floor(amount/menhGia[i]);
        if(soLuong > 0){
            result[menhGia[i]] = soLuong;
            amount -= soLuong*menhGia[i];
        }
    }
    return result;
}
console.log(moneyExchange(1700000));

