let price = 0;
let cartStorage = 0;
const addToCart = (para) => {
    cartStorage++;
    document.getElementById('totalProduct').innerText = cartStorage;
    price = price + para;
    const iniPrice = document.getElementById('price')
    iniPrice.innerText = price;

    const tax = parseFloat((price / 200).toFixed(2));
    document.getElementById('tax').innerText = tax;

    const grandTotal = price + tax + 30 + 10;


    document.getElementById('incTax').innerText = grandTotal;

}