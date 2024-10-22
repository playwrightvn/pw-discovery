// javaScript

function formatDate(date) {
  let arrDate = date.split("/");
  return `${arrDate[2]}-${arrDate[1]}-${arrDate[0]}`;
}

function calculateDateDiff(fromDate, toDate) {
  fromDate = new Date(formatDate(fromDate));
  toDate = new Date(formatDate(toDate));
  let diffDate = Math.abs(toDate - fromDate) / (24 * 60 * 60 * 1000);
  return Math.floor(diffDate);
}

console.log(calculateDateDiff("20/01/2023", "20/05/2023"));
console.log(calculateDateDiff("20/01/2024", "20/05/2027"));
