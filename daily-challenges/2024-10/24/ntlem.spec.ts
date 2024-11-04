function convertNotes(notes: string[]): string[] {
    if (!Array.isArray(notes)) {
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

    return notes.map(note => noteMap[note.toLowerCase()] || note);
}

const vietnameseNotes = ["Đô", "rê", "mi", "fa", "sol", "la", "si"];
const englishNotes = convertNotes(vietnameseNotes);
console.log(englishNotes); 
