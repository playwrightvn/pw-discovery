function caesarCipher (massages: string[], shift: number): string[] {
    shift = shift % 26;
    const result: string[] = [];
    for (const item of massages) {
        result.push(encryptionCaesar(item, shift));
    }
    return result;
}

function encryptionCaesar (massage: string, shift: number): string {
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

//1. **Thêm chức năng giải mã:**

function caesarDecipher (massages: string[], shift: number): string[] {
    shift = shift % 26;
    const result: string[] = [];
    for (const item of massages) {
        result.push(decryptionCaesar(item, shift));
    }
    return result;
}

function decryptionCaesar (massage: string, shift: number): string {
    let result = '';
    for (let char of massage) {
        if (char >= 'A' && char <= 'Z') {
            let newChar = String.fromCharCode((char.charCodeAt(0) - 65 - shift) % 26 + 65);
            result += newChar;
        }
        else if (char >= 'a' && char <= 'z') {
            let newChar = String.fromCharCode((char.charCodeAt(0) - 97 - shift) % 26 + 97);
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

// //2. **Thêm tính năng tự động đoán shift:**
// function breakCaesar(encodedMessage: string): number {
//     let shift: number = 0;
//     for (let char of encodedMessage) {
//         if (char >= 'A' && char <= 'Z') {

//         }
//     }
// }