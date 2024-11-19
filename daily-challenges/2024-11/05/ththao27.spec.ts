function calculateTreasure(sequences: string[]): number[] {
    return sequences.map((sequence) => {
        const match = sequence.match(/(-?\d+)\D+(-?\d+)/);
        let sum = 0;
        if (match) {
            const start = parseInt(match[1]);
            const end = parseInt(match[2]);
            if (start <= 0 || end <= 0) {
                console.warn(`Invalid input: Both start (${start}) and end (${end}) must be positive integers.`);
                return 0;
            }
            if (start > end) {
                console.warn(`Invalid input: Start (${start}) cannot be greater than end (${end}).`);
                return 0;  
            }
            sum = (end * (end + 1)) / 2 - ((start - 1) * start) / 2;
        }
        else {
            console.warn(`Invalid format: The sequence '${sequence}' does not match the required pattern 'a...b'.`);
            return 0;  
        }
        return sum;
    });
}
console.log(calculateTreasure(["1..5", "-2...6", "15...12"])); 
