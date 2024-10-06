function formatDate(inputDate: string) {
    const parts = inputDate.split('/')
    const day = parts[0]
    const month = parts[1]
    const year = parts[2]

    return `${year}-${month}-${day}`
}

function calculateDateDiff(fromDate: string, toDate: string) {
    const start = new Date(formatDate(fromDate))
    const end = new Date(formatDate(toDate))
    const difference = end.getTime() - start.getTime();
    const days = Math.abs(difference / (1000 * 60 * 60 * 24))
    return days
}

const fromDate = '20/01/2023'
const toDate = '20/05/2023'
console.log(calculateDateDiff(fromDate, toDate))