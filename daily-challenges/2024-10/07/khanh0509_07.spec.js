// javaScript
function findDuplicateIDs(arrID) {
  let dupID = [];
  arrID.forEach((element) => {
    let firstIndex = arrID.indexOf(element);
    let lastIndex = arrID.lastIndexOf(element);
    if (firstIndex !== lastIndex) {
      if (!dupID.includes(element)) {
        dupID.push(element);
      }
    }
  });
  return dupID;
}

console.log(
  findDuplicateIDs([
    "123456789012",
    "098765432109",
    "123456789012",
    "111111111111",
    "098765432109",
    "222222222222",
  ])
);
