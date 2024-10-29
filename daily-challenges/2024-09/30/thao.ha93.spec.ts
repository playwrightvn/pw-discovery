function convertToDate(dateString: string): Date {
    const [day, month, year] = dateString.split("/").map(Number);
    // Note: Months are 0-indexed in JavaScript's Date object, so subtract 1 from the month
    return new Date(year, month - 1, day);
}
function calculateDateDiff(fromDate: Date, toDate: Date) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const diffInTime = toDate.getTime() - fromDate.getTime();
    return Math.round(diffInTime / oneDay);
}

const fromDate = convertToDate('20/01/2023');
const toDate = convertToDate('20/05/2023');
console.log(calculateDateDiff(fromDate, toDate));