// Javascript
const productList = [];

function addProduct(name, price) {
    if (price < 0) {
        return false;
    }

    let product = { name: name, price: price };
    productList.push(product);
}

function removeProduct(name) {
    let count = 0;
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].name === name) {
            count++;
            delete productList[i];
        }
    }

    if (count > 0) {
        productList.length = productList.length - count;
    } else {
        console.log(`*** Không tìm thấy sản phẩm ***`);
    }
}
function calculateTotal() {
    let total = 0;
    for (let i = 0; i < productList.length; i++) {
        total += productList[i].price;
    }
    console.log(`Tổng giá trị sản phẩm: ${total}`);
}

function showProductList() {
    if (productList.length === 0) {
        console.log("Không có bất kỳ sản phẩm nào trong danh sách")
    } else {
        console.log(`Sản phẩm trong danh sách: `);
        for (let i = 0; i < productList.length; i++) {
            console.log(` ${productList[i].name} : ${productList[i].price}`);
        }
    }
}


addProduct("Táo", 5000);
addProduct("Chuối", 3000);
addProduct("Chuối", 7000);

removeProduct("Cam");

showProductList();
calculateTotal();



