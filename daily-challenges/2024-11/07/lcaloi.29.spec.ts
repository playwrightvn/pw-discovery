import { test } from '@playwright/test'

const arrLowCase: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const arrUpCase: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function caesarCipher(messages: string[], shift: number) {
    const results: string[] = [];
    for (const item of messages) {
        results.push(Encryption(item, shift));
    };
    return results;
}

function Encryption(input: string, shift: number): string {
    const arr: string[] = input.split('');
    let result: string = '';
    let isUpperCase: boolean = false;

    for (const item of arr) {
        if (arrLowCase.indexOf(item) >= 0 || arrUpCase.indexOf(item) >= 0) {
            isUpperCase = arrUpCase.indexOf(item) >= 0 ? true : false;
            let index: number = isUpperCase ? arrUpCase.indexOf(item) : arrLowCase.indexOf(item);
            index += shift;
            if (index > 25) {
                index %= 26;
            }
            result += isUpperCase ? arrUpCase[index] : arrLowCase[index];
        }
        else {
            result += item;
        }
    };
    return result;
};

test('solution 07/11/24', () => {
    console.log(caesarCipher(["Happy coding!"], 3));
    console.log(caesarCipher(["HELLO"], -1));
    console.log(caesarCipher(["test"], 27));
    console.log(caesarCipher(["Hello, World 123!"], 1));
})


