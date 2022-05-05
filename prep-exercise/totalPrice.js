const cartForParty = {
  water: 1.3,
  drink: 1.4,
  chips: 2.4,
  apple: 1.75,
  orange: 0.99,
};

function calculateTotalPrice(myObject) {
    let totalPrice = 0;
    for (let item in myObject) {
        totalPrice += myObject[item];
    }
    return totalPrice;
}

console.log(calculateTotalPrice(cartForParty));