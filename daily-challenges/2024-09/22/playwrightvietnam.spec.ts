function countWords(word: string) {
    // Trim
    word = word.trim();

    // Slit words
    const words = word.split(' ');

    if (words[0] === '') {
        return 'Số từ: 0';
    }

    return `Số từ: ${words.length}`;
}