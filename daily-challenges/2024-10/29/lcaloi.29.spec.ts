function calculateTotalDrinks(initialBottles: number): number {
    let totalDrinkBottles: number = initialBottles;
    let emptyBottles: number = initialBottles;

    while (emptyBottles >= 3) {
        const newDrinkBottles: number = ~~(emptyBottles / 3);
        totalDrinkBottles += newDrinkBottles;
        emptyBottles = newDrinkBottles + (emptyBottles % 3);
    }
    return totalDrinkBottles;
}

console.log(calculateTotalDrinks(12));
console.log(calculateTotalDrinks(5));
console.log(calculateTotalDrinks(2));