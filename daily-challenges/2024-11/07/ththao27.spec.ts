const ASCII_UPPERCASE_A = 65;
const ASCII_LOWERCASE_A = 97;
const ALPHABET_SIZE = 26;

function caesarCipher (message: string[], shift: number): string[] {
    shift = shift % ALPHABET_SIZE;
    const result: string[] = [];
    for (const item of message) {
        result.push(encryptionCaesar(item, shift));
    }
    return result;
}

function encryptionCaesar (message: string, shift: number): string {
    let result = '';
    for (let char of message) {
        if (char >= 'A' && char <= 'Z') {
            let newChar = String.fromCharCode((char.charCodeAt(0) - ASCII_UPPERCASE_A + shift) % ALPHABET_SIZE + ASCII_UPPERCASE_A);
            result += newChar;
        }
        else if (char >= 'a' && char <= 'z') {
            let newChar = String.fromCharCode((char.charCodeAt(0) - ASCII_LOWERCASE_A + shift) % ALPHABET_SIZE + ASCII_LOWERCASE_A);
            result += newChar;
        }
        else {
            result += char;
        }
    }
    return result;
}

//1. **Thêm chức năng giải mã:**

function caesarDecipher (message: string[], shift: number): string[] {
    shift = shift % ALPHABET_SIZE;
    const result: string[] = [];
    for (const item of message) {
        result.push(decryptionCaesar(item, shift));
    }
    return result;
}

function decryptionCaesar (message: string, shift: number): string {
    let result = '';
    for (let char of message) {
        if (char >= 'A' && char <= 'Z') {
            let newChar = String.fromCharCode((char.charCodeAt(0) - ASCII_UPPERCASE_A - shift) % ALPHABET_SIZE + ASCII_UPPERCASE_A);
            result += newChar;
        }
        else if (char >= 'a' && char <= 'z') {
            let newChar = String.fromCharCode((char.charCodeAt(0) - ASCII_LOWERCASE_A - shift) % ALPHABET_SIZE + ASCII_LOWERCASE_A);
            result += newChar;
        }
        else {
            result += char;
          }
    }
    return result;
}

console.log(caesarDecipher(["Khoor Zruog!", "FDHVDU"], 3));
console.log(caesarDecipher(["GDKKN"], -1));
console.log(caesarDecipher(["uftu"], 27));