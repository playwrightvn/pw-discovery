function calculateTotalDrinks2(initialBottles: number): number {
    const TRADE_BOTTLE = 3;
    let drankBottles = initialBottles;
    let remainBottles = initialBottles;

    while (remainBottles >= TRADE_BOTTLE) {
        drankBottles += Math.floor(remainBottles / TRADE_BOTTLE);
        remainBottles = remainBottles % TRADE_BOTTLE + Math.floor(remainBottles / TRADE_BOTTLE);
    }
    return drankBottles;
}

console.log(calculateTotalDrinks2(12));