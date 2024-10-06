//JavaScript
function findSecondLargest(arr) {

    if (arr.length < 2) {
        return "Không có số lớn thứ hai";
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] < largest) {
            secondLargest = arr[i];
        }
    }

    if (secondLargest !== -Infinity) {
        return `Số lớn thứ hai là: ${secondLargest}`;
    } else {
        return "Không có số lớn thứ hai";
    }
}

let a = [12, 35, 1, 10, 34, 1];
console.log(findSecondLargest(a));

