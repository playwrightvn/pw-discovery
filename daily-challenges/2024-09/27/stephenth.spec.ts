import path from 'path';
import os from 'os';
import fs, { rmSync } from 'fs';

import { expect, test } from '@playwright/test';
import { parse } from 'csv-parse/sync';


/*
Sample csv file:

STT,Tên học sinh,Lớp,Điểm Toán,Điểm Lý,Điểm Hóa
1,Nguyễn Văn A,10A1,8,7,9
2,Trần Thị B,10A2,9,6,8
*/
const originHeader = "STT,Tên học sinh,Lớp,Điểm Toán,Điểm Lý,Điểm Hóa";
const headerMap = new Map<string, string>([
    ['STT', 'no'],
    ['Tên học sinh', 'fullname'],
    ['Lớp', 'class'],
    ['Điểm Toán', 'math_point'],
    ['Điểm Lý', 'physics_point'],
    ['Điểm Hóa', 'chemistry_point'],
]);
const newRecords = [
    { no: "", fullname: "Nguyễn Văn Nam", class: "10A6", math_point: "8", physics_point: "8", chemistry_point: "8" },
    { no: "", fullname: "Trần Thị Nga", class: "10A6", math_point: "9", physics_point: "9", chemistry_point: "9" },
];



test('2024-09-27 challenge', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/021-import-export.html");

    // export
    const tmpDir = os.tmpdir();
    const downloadPromise = page.waitForEvent('download');
    await page.locator("#exportButton").click();

    const downloadFile = await downloadPromise;
    const savedPath = path.join(tmpDir, downloadFile.suggestedFilename());
    await downloadFile.saveAs(savedPath);

    // read downloaded csv
    const fileContent = fs.readFileSync(savedPath, { encoding: 'utf-8' });
    const records = parse(fileContent, {
        delimiter: ',',
        trim: true,
        skip_empty_lines: true,
        columns: (headers) => {
            return headers.map(header => headerMap.get(header) || header);
        },
    });

    // transform
    // remove 10A3 class
    let updatedRecords = records.filter(record => record.class != "10A3");
    // add new records with new increment ID
    const currentIDs = records.map(record => Number(record.no));
    const maxCurrentID = Math.max(...currentIDs);
    newRecords.forEach((record, index) => {
        record.no = String(maxCurrentID + index + 1);
    });
    updatedRecords = [...updatedRecords, ...newRecords];

    // write to csv
    const exportedCsvPath = path.join(tmpDir, "student_exported.csv");
    rmSync(exportedCsvPath, { force: true });
    fs.appendFileSync(exportedCsvPath, originHeader);
    for (const record of updatedRecords) {
        const recordStr = Object.values(record).join(',');
        fs.appendFileSync(exportedCsvPath, '\n' + recordStr);
    }
    // console.log(exportedCsvPath);

    // import back
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.locator('#importButton').click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(exportedCsvPath);

    // assert
    // 1. check no class 10A3 is shown
    let rows = await page.locator('#studentTable tbody tr').all();
    for (const row of rows) {
        if (await row.isVisible()) {
            const classCell = row.locator('td').nth(2);
            const classCellValue = await classCell.innerText();
            expect(classCellValue).not.toBe('10A3');
        }
    }

    // 2. check new records is added
    const recordsSet: Set<String> = new Set();
    for (const row of rows) {
        if (await row.isVisible()) {
            recordsSet.add(`${await row.locator('td').nth(1).innerText()} - ${await row.locator('td').nth(2).innerText()}`);
        }
    }

    for (const record of newRecords) {
        expect(recordsSet.has(`${record.fullname} - ${record.class}`)).toBe(true);
    }

    // cleanup
    await downloadFile.delete();
    fs.rmSync(exportedCsvPath);
    fs.rmSync(savedPath);
})