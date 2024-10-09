function replaceEmail(myEmail: string) {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    const hiddenEmail = myEmail.replace(emailRegex, 'hidden@example.com');
    console.log(hiddenEmail);
}
const input = "Liên hệ với tôi qua email john.doe@example.com hoặc support@mydomain.com";
replaceEmail(input);
