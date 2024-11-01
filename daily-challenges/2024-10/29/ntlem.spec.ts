function calculateTotalDrinks(initialBottles: number): number {
    // Code sẽ được viết tại đây
    const TRADE_BOTTLE = 3;
    let totalDrinks = initialBottles;
    let emptyBottles = initialBottles;

    while (emptyBottles >= TRADE_BOTTLE) {
        let newDrinks = Math.floor(emptyBottles / TRADE_BOTTLE);
        totalDrinks += newDrinks;

        emptyBottles = emptyBottles % TRADE_BOTTLE + newDrinks;
    }
    return totalDrinks;
}

console.log(calculateTotalDrinks(12)); 