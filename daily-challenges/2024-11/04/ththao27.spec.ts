function calculateMagicGate(calculations: string[]): number[]{
    return calculations.map((calc) => {
        const match = calc.match(/(-?\d+)\s*([\+\-\*\/])\s*(-?\d+)/);
        if (match) {
            const num1 = parseInt(match[1]);
            const operator = match[2];
            const num2 = parseInt(match[3]);
            switch (operator) {
                case '+':
                    return num1 + num2;
                case '-':
                    return num1 - num2;
                case '*':
                    return num1 * num2;
                case '/':
                    if (num2 === 0) {
                    throw new Error('Division by zero');
                    }
                    return Math.floor(num1 / num2);
                default:
                    throw new Error('Invalid operator');
            }
        }
        return 0;
    });
}

console.log(calculateMagicGate(["10/3", "5+5", "100 - 1"])); 