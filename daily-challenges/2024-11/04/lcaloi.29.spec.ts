//Cách 1:
function calculateMagicGate(calculations: string[]) {
    const result = calculations.map(item => calculate(item));
    return result;
}
function calculate(input: string) {
    const calculations: string[] = ['+', '-', '*', '/'];
    let isHaveCalculation: boolean = false;
    let calculation: string = '';
    for (const e of calculations) {
        isHaveCalculation = input.includes(e);
        if (isHaveCalculation) {
            calculation = e;
            break;
        }
    }

    if (!isHaveCalculation) {
        throw new Error('input phải chứa phép tính');
    }

    const indexOfCalculation: number = input.indexOf(calculation);
    const before: number = +input.slice(0, indexOfCalculation).trim();
    const after: number = +input.slice(indexOfCalculation + 1, input.length).trim();

    switch (calculation) {
        case '+': {
            return before + after;
        }
        case '-': {
            return before - after;
        }
        case '*': {
            return before * after;
        }
        case '/': {
            return ~~(before / after);
        }
    }
}

console.log(calculateMagicGate(["1 + 1", "200*2", "3 - 10"])); // [2, 400, -7]
console.log(calculateMagicGate(["10/3", "5+5", "100 - 1"])); // [3, 10, 99]
console.log(calculateMagicGate(["20*5", "10/2", "15-5"])); // [100, 5, 10]
