function convertNotes(notes: string[]): string[] {
    const Notes:object= {
            "đô": "C",
            "rê": "D",
            "mi": "E",
            "fa": "F",
            "sol": "G",
            "la": "A",
            "si": "B"
        }
    return notes.map(note =>{
        return Notes[note];
    });
}
const vietnameseNotes = ["si", "la", "đô"];
const englishNotes = convertNotes(vietnameseNotes);
console.log(englishNotes);
