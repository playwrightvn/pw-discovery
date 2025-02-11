type Candy = {
    type: string;
    quantity: number;
};

type TrickOrTreater = {
    name: string;
    candies: Candy[];
};

function findTopTrickOrTreater(trickOrTreaters: TrickOrTreater[]): string {
    let name: string = '';
    let maxCandies = 0;
    trickOrTreaters.forEach(item => {
        const total: number = item.candies.reduce((total, candy) => total + candy.quantity, 0);

        if (total > maxCandies) {
            name = item.name;
            maxCandies = total;
        }

    })
    return name;
}

const trickOrTreaters: TrickOrTreater[] = [
    {
        name: "John",
        candies: [
            { type: "Chocolate", quantity: 10 },
            { type: "Gummy Bears", quantity: 15 }
        ]
    },
    {
        name: "Emma",
        candies: [
            { type: "Lollipop", quantity: 12 },
            { type: "Chocolate", quantity: 8 }
        ]
    },
    {
        name: "Sophia",
        candies: [
            { type: "Gummy Bears", quantity: 20 },
            { type: "Chocolate", quantity: 5 }
        ]
    }
];

const topTrickOrTreater = findTopTrickOrTreater(trickOrTreaters);
console.log(topTrickOrTreater);

const trickOrTreaters1: TrickOrTreater[] = [
    { name: "Alice", candies: [{ type: "Chocolate", quantity: 20 }] },
    { name: "Bob", candies: [{ type: "Lollipop", quantity: 15 }, { type: "Chocolate", quantity: 10 }] }
];

console.log(findTopTrickOrTreater(trickOrTreaters1));

const trickOrTreaters2: TrickOrTreater[] = [
    { name: "Liam", candies: [{ type: "Gummy Bears", quantity: 10 }, { type: "Chocolate", quantity: 10 }] },
    { name: "Mia", candies: [{ type: "Chocolate", quantity: 15 }, { type: "Lollipop", quantity: 5 }] }
];

console.log(findTopTrickOrTreater(trickOrTreaters2));

const trickOrTreaters3: TrickOrTreater[] = [
    { name: "Tom", candies: [{ type: "Gummy Bears", quantity: 20 }] },
    { name: "Jerry", candies: [{ type: "Chocolate", quantity: 5 }, { type: "Lollipop", quantity: 3 }] },
    { name: "Anna", candies: [{ type: "Lollipop", quantity: 8 }] }
];
console.log(findTopTrickOrTreater(trickOrTreaters3));