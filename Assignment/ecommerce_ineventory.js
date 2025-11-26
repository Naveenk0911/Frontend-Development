const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, stock: 5 },
    { id: 2, name: "T-Shirt", category: "Apparel", price: 25, stock: 50 },
    { id: 3, name: "Mouse", category: "Electronics", price: 30, stock: 15 },
    { id: 4, name: "Jeans", category: "Apparel", price: 60, stock: 10 },
    { id: 5, name: "Coffee Maker", category: "Home & Kitchen", price: 80, stock: 8 },
    { id: 6, name: "Monitor", category: "Electronics", price: 300, stock: 2 }
];

// 1. getLowStockProducts() → using filter()
function getLowStockProducts(inventory, threshold = 10) {
    return inventory.filter(p => p.stock <= threshold);
}

// 2. sortProductsByPrice() → using sort()
function sortProductsByPrice(inventory, ascending = true) {
    // Create a copy to avoid mutating the original array
    return [...inventory].sort((a, b) => {
        return ascending ? a.price - b.price : b.price - a.price;
    });
}

// 3. calculateTotalInventoryValue() → using reduce()
function calculateTotalInventoryValue(inventory) {
    return inventory.reduce((totalValue, p) => {
        return totalValue + (p.price * p.stock);
    }, 0);
}

// 4. groupByCategory() → using reduce() + object grouping
function groupByCategory(inventory) {
    return inventory.reduce((acc, product) => {
        const category = product.category;
        // Check if the accumulator already has this category key
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(product);
        return acc;
    }, {}); // Start with an empty object {}
}

console.log("\n--- Q6. E-Commerce Inventory System ---");

console.log("1. Low Stock Products (Stock <= 10):");
console.log(getLowStockProducts(products));

console.log("\n2. Products Sorted by Price (Ascending):");
console.log(sortProductsByPrice(products));

const totalValue = calculateTotalInventoryValue(products);
console.log(`\n3. Total Inventory Value: $${totalValue}`); // 1200*5 + 25*50 + 30*15 + 60*10 + 80*8 + 300*2 = 8040

console.log("\n4. Products Grouped by Category:");
console.log(groupByCategory(products));