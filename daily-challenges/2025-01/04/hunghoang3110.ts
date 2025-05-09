type Player = {
    name: string;
    rank: string;
    chips: number;
};

type Ranked = {
    name: string;
    score: number;
};

const rankScores = new Map<string, number>([
    ['Royal Flush', 1000],
    ['Straight Flush', 750],
    ['Four of a Kind', 500],
    ['Full House', 400],
    ['Flush', 300],
    ['Straight', 200],
    ['Three of a Kind', 150],
    ['Two Pair', 100],
    ['One Pair', 50],
    ['High Card', 10]]
);

function calculatePokerScore(players: Player[]): Ranked[] { 
    return players.map(player => { 
        const baseScore = rankScores.get(player.rank) || 0; 
        const totalScore = baseScore + player.chips * 10; 
        return { 
            name: player.name,
            score: totalScore 
        };
    }).sort((a, b) => b.score - a.score);
}