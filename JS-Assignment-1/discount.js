const purchaseTotal = 5600;
let discountPercentage = 0;

if (purchaseTotal >= 10000) {
    discountPercentage = 25;
} else if (purchaseTotal >= 5000) {
    discountPercentage = 15;
} else if (purchaseTotal >= 2000) {
    discountPercentage = 5;
}

const discountAmount = (purchaseTotal * discountPercentage) / 100;
const finalPrice = purchaseTotal - discountAmount;

console.log("Original Total:", purchaseTotal);
console.log("Discount %:", discountPercentage);
console.log("Final Price:", Math.round(finalPrice));
