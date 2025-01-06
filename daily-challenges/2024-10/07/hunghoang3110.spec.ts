// Javascript
function findDuplicateIDs(arrayID) {
    let arrayIDNotDup = [];
    for (let i = 0; i < arrayID.length; i++) {
        for (let j = i + 1; j < arrayID.length; j++) {
            if (arrayID[i] === arrayID[j]) {
                if (arrayIDNotDup.indexOf(arrayID[i]) === -1) {
                    arrayIDNotDup.push(arrayID[i]);
                }
            }
        }
    }
    return arrayIDNotDup;
}