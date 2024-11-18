import { test } from '@playwright/test';

//JavaScript

function calculateDateDiff(fromDate: Date, toDate: Date) {
    const result: number = (toDate.valueOf() - fromDate.valueOf()) / (1000 * 3600 * 24);
    console.log(`fromeDate: ${fromDate.valueOf()}  -  toDate ${toDate.valueOf()}`)
    console.log(`result: ${result}`);
}

function parseDate(dateString: string): Date {
    const [day, month, year] = dateString.split('/');
    return new Date(`${year}-${month}-${day}`);
}

const fromDate: Date = parseDate('20/01/2023')
const toDate: Date = parseDate('20/05/2023')

calculateDateDiff(fromDate, toDate);
