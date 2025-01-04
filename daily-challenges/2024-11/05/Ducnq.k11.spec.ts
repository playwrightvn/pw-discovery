// # TypeScript Challenge: Kho Báu Của Jack Sparrow 🏴‍☠️

// ### Câu chuyện
// Một nhóm cướp biển dũng cảm vừa tìm thấy tấm bản đồ kho báu cổ xưa của thuyền trưởng huyền thoại Jack Sparrow. Trên bản đồ có nhiều dãy số bí ẩn dạng "a...b", ví dụ "1...5", "2...6". Để mở được rương kho báu, họ cần tính tổng của tất cả các số trong mỗi dãy (ví dụ "1...5" nghĩa là 1+2+3+4+5).

// ### Yêu cầu:
// - **Tên hàm:** `calculateTreasure`
// - **Tham số:** 
//   - `sequences: string[]` – Một mảng các chuỗi dạng "a...b"
// - **Kết quả:** 
//   - Trả về một mảng các số nguyên, mỗi số là tổng của một dãy số từ a đến b

// ### Quy tắc:
// 1. a và b là các số nguyên dương
// 2. a luôn nhỏ hơn hoặc bằng b
// 3. Dãy số bao gồm cả a và b
// 4. Định dạng chuỗi đầu vào luôn là "a...b" (3 dấu chấm)

// ### Ví dụ:
// ```typescript
// function calculateTreasure(sequences: string[]): number[] {
//   // Code sẽ được viết tại đây
// }

// console.log(calculateTreasure(["1...5", "2...6", "10...12"])); 
// // Kết quả mong đợi: [15, 20, 33]
// ```

// function calculateTreasure(sequences: string[]): number[]{
//     let result: number[] =[];
//     for(let element of sequences){
//         const a: number = 10;
//         const b: number = 5;
//         const expression: string = `${a}...${b}`;
//         if(typeof element !== expression){
//             console.log("hay điền định dạng đúng a...b");
//         }
//         else if(typeof element === expression){
//             let sum :number = 0;
//             for (let i= Number(element[0]); i < Number(element[element.length-1]) ; i++){
//                 sum += Number(element[i]);  
//                 result.push(sum);
//             }

//         }
//     }
//     return result;
// }
// console.log(calculateTreasure(["1...5", "2...6", "10...12"])); 


function calculateTreasure(sequences: string[]): number[] {
    let result: number[] = [];
    
    for (let element of sequences) {
        // Kiểm tra định dạng của chuỗi "a...b"
        const regex = /^(\d+)\.\.\.(\d+)$/;  // Biểu thức chính quy kiểm tra định dạng "a...b"
        const match = element.match(regex);  // Tìm phần tử phù hợp với regex
        
        if (!match) {
            console.log(`Hãy điền định dạng đúng a...b,${element}`);
            return [];  // Nếu không đúng định dạng, bỏ qua chuỗi này
        }
        
        // Lấy giá trị a và b từ match
        const a: number = Number(match[1]);
        const b: number = Number(match[2]);
        if (a > b){
            console.log(`Hãy điền định dạng đúng a...b,${element}`);
            return [];
        }
        
        let sum: number = 0;
        // Duyệt qua dãy từ a đến b và tính tổng
        for (let i = a; i <= b; i++) {
            sum += i;
        }
        
        result.push(sum);  // Thêm tổng vào kết quả
    }
    
    return result;
}

console.log(calculateTreasure(["1...5", "2...6", "10...15"])); 