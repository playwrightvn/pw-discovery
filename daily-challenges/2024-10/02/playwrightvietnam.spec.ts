/*
# Playwright
## Đề bài:
- Cho một mảng chứa các số nguyên dương hoặc âm, nhiệm vụ của bạn là tìm số lớn thứ hai trong mảng. Nếu mảng chứa ít hơn hai số khác nhau, trả về thông báo "Không có số lớn thứ hai".

### Yêu cầu:
- Viết một hàm JavaScript có tên `findSecondLargest` để tìm số lớn thứ hai trong một mảng.
- Nếu mảng chỉ chứa một phần tử hoặc không có số lớn thứ hai (tất cả các số đều giống nhau), hãy trả về chuỗi "Không có số lớn thứ hai".
- Hàm cần xử lý tốt cả mảng có chứa số âm hoặc dương.
*/

function findSecondLargest(arr: number[]) {
    const uniqueArr = Array.from(new Set(arr));
    const sorted = uniqueArr.sort(function (a, b) { return b - a });
    if (sorted.length < 2) {
        return 'Không có số lớn thứ hai';
    }

    return sorted[1];
}

console.log(findSecondLargest([10, 5, 10, 3]))
console.log(findSecondLargest([]))
console.log(findSecondLargest([1]))
console.log(findSecondLargest([1, 1]))