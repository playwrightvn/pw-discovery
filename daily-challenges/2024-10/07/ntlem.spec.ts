function findDuplicateIDs(arr) {
    let count = {};
    for (let id of arr) {
        if (count[id]) {
            count[id]++;
        } else {
            count[id] = 1;
        }
    }

    let duplicate = [];
    for (let id in count) {
        if (count[id] > 1) {
            duplicate.push(id);
        }
    }

    return duplicate;
}

let arr = ["123456789012", "098765432109", "123456789012", "111111111111", "098765432109", "222222222222"];
console.log(findDuplicateIDs(arr)); 