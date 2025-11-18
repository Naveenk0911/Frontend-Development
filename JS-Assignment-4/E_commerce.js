class Product {
    constructor(id, name, price, category) {
        this.productId = id;
        this.productName = name;
        this.unitPrice = price;
        this.productCategory = category;
    }

    applyDiscount(discountPercentage) {
        const discountFactor = 1 - (discountPercentage / 100);
        this.unitPrice = parseFloat((this.unitPrice * discountFactor).toFixed(2));
        return this.unitPrice;
    }

    displayDetails() {
        return `
        --- Product Details ---
        ID: ${this.productId}
        Name: ${this.productName}
        Category: ${this.productCategory}
        Price: $${this.unitPrice.toFixed(2)}
        -----------------------`;
    }
}

const productList = [
    new Product(101, "4K Ultra HD TV", 1499.99, "Electronics"),
    new Product(205, "Cashmere Scarf", 150.00, "Apparel"),
    new Product(310, "The JavaScript Way", 35.50, "Books"),
    new Product(403, "High-End Gaming Laptop", 2199.00, "Electronics"),
    new Product(522, "Premium Blender", 250.99, "Home Goods"),
];

const tvProduct = productList[0];
tvProduct.applyDiscount(15);

const expensiveProducts = productList.filter(product => product.unitPrice > 1000);

console.log("--- Products with Price > $1000.00 ---");

if (expensiveProducts.length === 0) {
    console.log("No products found with a price greater than $1000.00.");
} else {
    expensiveProducts.forEach((product, index) => {
        console.log(`\nProduct ${index + 1}:`);
        console.log(product.displayDetails());
    });
}