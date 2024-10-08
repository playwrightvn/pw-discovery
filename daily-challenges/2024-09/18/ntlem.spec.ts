//Javascript
let today = new Date();
const currentYear = today.getFullYear();

function calculateAge(yearBirth) {
    if (yearBirth > currentYear || yearBirth < 0) {
        return `Năm sinh không hợp lệ`;
    }

    let age = currentYear - yearBirth;
    return age;
}

let age = calculateAge(2025);
console.log(age);

