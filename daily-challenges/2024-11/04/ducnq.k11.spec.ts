// # TypeScript Challenge: Giải cứu Công chúa

// Hoàng tử đang trên đường đi giải cứu công chúa. Để đến được tòa tháp nơi công chúa đang bị nhốt, hoàng tử phải vượt qua một cánh cổng ma thuật. Cánh cổng này có một dãy các phép tính ma thuật, và hoàng tử cần tính đúng tất cả các kết quả để cánh cổng mở ra.

// ## Yêu cầu:
// - **Tên hàm:** `calculateMagicGate`
// - **Tham số:** 
//   - `calculations: string[]` – Một mảng các chuỗi phép tính (ví dụ: ["1 + 1", "200*2", "3 - 10"])
// - **Kết quả:** 
//   - Trả về một mảng các số nguyên là kết quả của các phép tính

// ## Quy tắc:
// - Mỗi phép tính trong mảng đầu vào sẽ chỉ chứa hai số và một phép toán
// - Các phép toán có thể là: +, -, *, /
// - Các số trong phép tính là số nguyên
// - Kết quả của phép chia sẽ được làm tròn xuống số nguyên gần nhất
// - Các số trong phép tính có thể có khoảng trắng hoặc không

// ## Ví dụ:
// ```typescript
// function calculateMagicGate(calculations: string[]): number[] {
//   // Code sẽ được viết tại đây
// }

function calculateMagicGate(array: string[]): number[]{
    let results: number[] = [];
    for(let i of array){
        i = i.replace(/\s/g, "");
        let calculate = new Function(`return (${i})`);
        let result = calculate().toFixed(2);
        results.push(result);
    }
    return results;
}
console.log(calculateMagicGate(["10/3", " 5*5 ", "100 / 4"])); 