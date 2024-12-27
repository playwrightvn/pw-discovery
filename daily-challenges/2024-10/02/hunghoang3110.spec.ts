// Javascript

function findSecondLargest(array) {
    const uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
        if (uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    let points = uniqueArray.toSorted(function (a, b) { return a - b });
    if (uniqueArray.length < 2) { return 'Cannot found the second largest' }
    else return points[uniqueArray.length - 2];
}