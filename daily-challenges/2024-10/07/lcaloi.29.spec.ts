function findDuplicateIDs(ids: string[]) {
    //lặp qua ids để mình đếm các phần tử xuất hiện bao nhiêu lần, lưu vào 1 Map
    const countMap = new Map<string, number>();
    const result: string[] = [];

    for (const id of ids) {
        const count = (countMap.get(id) || 0) + 1;
        countMap.set(id, count);
    }

    //lọc ra các ids có count >1;
    for (const [id, count] of countMap.entries()) {
        if (count > 1) {
            result.push(id);
        }
    }
    return result;
}

const arr: string[] = ["123456789012", "098765432109", "123456789012", "111111111111", "098765432109", "222222222222"];

console.log(findDuplicateIDs(arr));