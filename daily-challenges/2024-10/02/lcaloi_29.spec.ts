import {test} from '@playwright/test';

//JavaScript

function findSecondLargest(arr: number[]): number | string {
    const uniqueArr: number[] = Array.from(new Set(arr));

    if (uniqueArr.length < 2) {
        return "Không có số lớn thứ hai";
    }
    
    const sorted: number[] = uniqueArr.sort(function (a, b): number {
        return b - a
    });
    return sorted[1];
}


test('ssss', async () => {
    console.log(`${findSecondLargest([50,10,15,1,1])}`);

});