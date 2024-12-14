// Javascript

function replaceEmail(text) {
    if (typeof text !== 'string')
        throw new Error('Input must be a string');
    return text.replace(/([\w.]+)@([\w.]+\w+)/g, 'hidden@example.com');
}