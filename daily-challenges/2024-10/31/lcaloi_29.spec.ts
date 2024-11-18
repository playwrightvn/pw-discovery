type Candy = {
    type: string;
    quantity: number;
};

type TrickOrTreater = {
    name: string;
    candies: Candy[];
};

function findTopTrickOrTreater(trickOrTreaters: TrickOrTreater[]): string {
    let topTrickOrTreaterName = '';
    let maxCandies = 0;

    for (const trickOrTreater of trickOrTreaters) {
        const totalCandies: number = trickOrTreater.candies.reduce((sum, candy) => sum + candy.quantity, 0);
        if (totalCandies > maxCandies) {
            maxCandies = totalCandies;
            topTrickOrTreaterName = trickOrTreater.name;
        }
    }
    return topTrickOrTreaterName;
}

const trickOrTreaters: TrickOrTreater[] = [
    {name: "Tom", candies: [{type: "Gummy Bears", quantity: 20}]},
    {name: "Jerry", candies: [{type: "Chocolate", quantity: 5}, {type: "Lollipop", quantity: 3}]},
    {name: "Anna", candies: [{type: "Lollipop", quantity: 8}]}
];

const topTrickOrTreater = findTopTrickOrTreater(trickOrTreaters);
console.log(topTrickOrTreater);


