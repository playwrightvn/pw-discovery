function calculateTip (totalBill, tips){
    amounTips = totalBill  * tips /100
    return amounTips;
}
calculateTip(100,15);
console.log(`Tổng tiền tips của khách hàng là ${amounTips} VND`)