type Candy = {
    type: string;
    quantity: number;
};

type TrickOrTreater = {
    name: string;
    candies: Candy[];
};

function findTopTrickOrTreater (TrickOrTreaters: TrickOrTreater[]): string {
    let topTrickOrTreater = "";
    let maxCandies = 0;
    for (const TrickOrTreater of TrickOrTreaters) {
        const totalCandies = TrickOrTreater.candies.reduce((sum, candy) => sum + candy.quantity, 0);
        
        if(totalCandies > maxCandies) {
            maxCandies = totalCandies;
            topTrickOrTreater = TrickOrTreater.name;
        }
    }

    return topTrickOrTreater
}

// Test case
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

console.log(findTopTrickOrTreater(trickOrTreaters));