function convertNotes(notes: string[]): string[] {
    const a: { [key: string]: string } = {
        "đô": "C",
        "rê": "D",
        "mi": "E",
        "fa": "F",
        "sol": "G",
        "la": "A",
        "si": "B"
    };

    return notes.map(note => a[note] || note);
}

const vietnameseNotes = ["Đô", "rê", "mi", "fa", "sol", "la", "si"];
const englishNotes = convertNotes(vietnameseNotes);
console.log(englishNotes); 
