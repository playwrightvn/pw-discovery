// Javascript

function calculateDateDiff (fromDate, toDate) {
    const arrFromDate = fromDate.split('/');
    const fDate = new Date(arrFromDate[2], arrFromDate[1] - 1, arrFromDate[0]);
    const arrToDate = toDate.split('/');
    const tDate = new Date(arrToDate[2], arrToDate[1] - 1, arrToDate[0]);
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24; 
    return ((tDate.getTime() - fDate.getTime()) / day);
}
