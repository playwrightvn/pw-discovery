function convertNotes(notes: string[]): string[] {
    const englishNotes = notes.map((note) => {
        if(note === "đô") return "C";
        else if(note === "rê") return "D";
        else if(note === "mi") return "E";
        else if(note === "fa") return "F";
        else if(note === "sol") return "G";
        else if(note === "la") return "A";
        else if(note === "si") return "B";
        else return note;
    });
    return englishNotes;
}
const vietnameseNotes = ["rê", "sol", "mi"]
const englishNotes = convertNotes(vietnameseNotes);
console.log(englishNotes);