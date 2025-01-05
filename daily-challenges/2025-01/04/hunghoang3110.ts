type Player = {
    name: string;
    rank: string;
    chips: number;
};

type Ranked = {
    name: string;
    score: number;
};

function calculatePokerScore(players: Player[]): { name: string, score: number }[] {
    let arrayRanked: Ranked[] = [];
    let totalScore: number;
    players.forEach(player => {
        switch (player.rank) {
            case 'Royal Flush':
                totalScore = 1000 + player.chips * 10;
                break;
            case 'Straight Flush':
                totalScore = 750 + player.chips * 10;
                break;
            case 'Four of a Kind':
                totalScore = 500 + player.chips * 10;
                break;
            case 'Full House':
                totalScore = 400 + player.chips * 10;
                break;
            case 'Flush':
                totalScore = 300 + player.chips * 10;
                break;
            case 'Straight':
                totalScore = 200 + player.chips * 10;
                break;
            case 'Three of a Kind':
                totalScore = 150 + player.chips * 10;
                break;
            case 'Two Pair':
                totalScore = 100 + player.chips * 10;
                break;
            case 'One Pair':
                totalScore = 50 + player.chips * 10;
                break;
            case 'High Card':
                totalScore = 10 + player.chips * 10;
                break;
            default:
                break;
        };
        arrayRanked.push({
            name: player.name,
            score: totalScore
        })
    });
    return arrayRanked.sort((a, b) => b.score - a.score);
}