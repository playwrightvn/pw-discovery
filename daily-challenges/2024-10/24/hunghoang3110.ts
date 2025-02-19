const Notes = ["C", "D", "E", "F", "G", "A", "B"];
const vietnameseNotes = ["đô", "rê", "mi", "fa", "sol", "la", "si"];

function convertNotes(notes: string[]): string[] {
    return notes.map(note => {
        return Notes[vietnameseNotes.indexOf(note)];
    });
}