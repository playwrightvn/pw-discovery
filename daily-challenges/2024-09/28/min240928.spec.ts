/*
# Javascript
## Đề bài:
Cho một mảng chứa các số nguyên, bạn cần viết một hàm để đếm xem có bao nhiêu số nguyên tố trong mảng đó. Một số nguyên tố là số lớn hơn 1 và chỉ chia hết cho 1 và chính nó.

### Yêu cầu:
- Viết một hàm JavaScript có tên countPrimes để đếm số lượng số nguyên tố trong một mảng số.
- Nếu mảng rỗng, trả về giá trị 0.

## Kiến thức
- Số nguyên tố là một số lớn hơn 1 và chỉ chia hết cho 1 và chính nó. Các số nguyên tố phổ biến bao gồm: 2, 3, 5, 7, 11, 13, 17, 19, 23,...
- Ví dụ: 2 là số nguyên tố vì nó chỉ chia hết cho 1 và 2. 4 không phải là số nguyên tố vì nó chia hết cho 1, 2 và 4.
*/

function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function countPrimes(arr) {
    if (arr.lenght === 0) {
        return 0
    }
    let count = 0
    for (let i of arr) {
        if (isPrime(i)){
            count++
        }
    }
    return count
}

let arr = [2, 3, 4, 5, 6, 7]
console.log(countPrimes(arr))