import { count } from "console";

function findDuplicateIDs(cccds: string[]) {
    // object{ key: cccd, value: count}
    const countMap: Record<string, number> = {};

    cccds.forEach(item => {
        // if(countMap[item]) {
        //     countMap[item]++;
        // } else {
        //     countMap[item] = 1;
        // }

        if (!countMap[item]) {
            countMap[item] = 1;
            return;
        }

        countMap[item]++;
    });

    const result: string[] = [];
    for (const key in countMap) {
        if(countMap[key] > 1) {
            result.push(key);
        }
    }

    return result;
}

const result = findDuplicateIDs(["123456789012", "098765432109", "123456789012", "111111111111", "098765432109", "222222222222"]);
console.log(result);