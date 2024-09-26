//Javascript
function findLargestNumber(arr) {
    if (arr.length === 0) {
        return `Mảng rỗng`;
    }
    let largest  = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (largest  < arr[i]) {
            largest  = arr[i];
        }
    }
    return largest ;
}

let arr  = [3, 7, 2, 5, 9];
let largest  = findLargestNumber(arr);

console.log(largest);