function convertNotes(notes: string[]): string[] {
    if(!notes.length) {
        throw new Error('Input must be an array');
    }
    const noteMap: { [key: string]: string } = {
        "đô": "C",
        "rê": "D",
        "mi": "E",
        "fa": "F",
        "sol": "G",
        "la": "A",
        "si": "B"
    };
    return notes.map(note => {
        const englishNote = noteMap[note];
        if (!englishNote) {
            throw new Error(`Invalid note: ${note}`);
        }
        return englishNote;
    });
}

const vietnameseNotes = ["đô", "rê", "mi", "fa", "sol", "la", "si"];
const englishNotes = convertNotes(vietnameseNotes);
console.log(englishNotes); 