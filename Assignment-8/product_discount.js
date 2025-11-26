// Product Constructor Function
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Add a prototype method applyDiscount(percent)
Product.prototype.applyDiscount = function(percent) {
    if (typeof percent !== 'number' || percent < 0 || percent > 100) {
        console.error("Invalid discount percentage.");
        return this.price; // Return original price on error
    }
    const discountAmount = this.price * (percent / 100);
    const newPrice = this.price - discountAmount;
    return parseFloat(newPrice.toFixed(2));
};

// Create 3 products and apply different discounts
const laptop = new Product("Laptop Pro", 1200);
const mouse = new Product("Wireless Mouse", 50);
const keyboard = new Product("Mechanical Keyboard", 150);

console.log("\n--- Q3. Product Discount System ---");
console.log(`Original Price of ${laptop.name}: $${laptop.price}`);
console.log(`Price after 10% discount: $${laptop.applyDiscount(10)}`); // $1080.00

console.log(`Original Price of ${mouse.name}: $${mouse.price}`);
console.log(`Price after 25% discount: $${mouse.applyDiscount(25)}`); // $37.50

console.log(`Original Price of ${keyboard.name}: $${keyboard.price}`);
console.log(`Price after 5% discount: $${keyboard.applyDiscount(5)}`); // $142.50

// Abstraction Explanation
console.log("\n**Abstraction in Discount System:**");
console.log("Abstraction helps by hiding the complex **discount calculation formula** (price * (1 - percent/100)) inside the `applyDiscount` method.");
console.log("The user (developer) only needs to know the method signature (`product.applyDiscount(percent)`) and gets the result, **simplifying the operation** and reducing the chance of calculation errors outside the class.");