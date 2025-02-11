const Notes = {
    'đô': 'C',
    'rê': 'D',
    'mi': 'E',
    'fa': 'F',
    'sol': 'G',
    'la': 'A',
    'si': 'B'
}

function convertNotes(notes: string[]): string[] {
    return notes.map(note => Notes[note]);
}

const notes1 = ["đô", "fa", "la", "si"];
console.log(convertNotes(notes1));

const notes2 = ["rê", "sol", "mi"];
console.log(convertNotes(notes2));

const notes3 = ["si", "la", "đô"];
console.log(convertNotes(notes3));