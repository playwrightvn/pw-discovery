//Javascript
function replaceEmail(input: string): string { // Regular expression
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    return input.replace(emailRegex, 'hidden@example.com');
}

const input = "Liên hệ với tôi qua email john.doe@example.com hoặc support@mydomain.com";
const output = replaceEmail(input);
console.log(output);