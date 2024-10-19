// javascript
function findSecondLargest(arr) {
  if (arr.length == 1) {
    return `Khong co so lon thu 2`;
  } else {
    arr.sort((a, b) => b - a);
    arr = arr.filter((max) => max != arr[0]);
    return arr[0];
  }
}
console.log(findSecondLargest([12, 35, 1, 10, 34, 1]))
console.log(findSecondLargest([10, 5, 10]))
console.log(findSecondLargest([5]))