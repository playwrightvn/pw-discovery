import { test } from '@playwright/test'
function caesarCipher (massages: string[], shift: number): string[] {
    shift = shift % 26;
    const result: string[] = [];
    for (const item of massages) {
        result.push(Encryption(item, shift));
    }
    return result;
}

function Encryption (massage: string, shift: number): string {
    let result = '';
    for (let char of massage) {
        if (char >= 'A' && char <= 'Z') {
            let newChar = String.fromCharCode((char.charCodeAt(0) - 65 + shift) % 26 + 65);
            result += newChar;
        }
        else if (char >= 'a' && char <= 'z') {
            let newChar = String.fromCharCode((char.charCodeAt(0) - 97 + shift) % 26 + 97);
            result += newChar;
        }
        else {
            result += char;
          }
    }
    return result;
}
console.log(caesarCipher(["Happy coding!"], 3));
console.log(caesarCipher(["HELLO"], -1));
console.log(caesarCipher(["test"], 27));
console.log(caesarCipher(["Hello, World 123!"], 1));
