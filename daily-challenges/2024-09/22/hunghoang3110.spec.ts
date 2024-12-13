// Javascript
function countWords(text) {
    if (text == null) {
        throw new Error('Input must be a non-null string');
    }
    if (typeof text !== 'string') {
        throw new Error('Input must be a string');
    }
    const count = text.trim().split(/\s+/);
    return `counted words: ${count.length}`;
}