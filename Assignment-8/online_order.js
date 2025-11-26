const menu = [
    { name: "Burger", price: 8.50 },
    { name: "Fries", price: 3.00 },
    { name: "Soda", price: 2.50 },
    { name: "Salad", price: 7.00 }
];

function calculateBill(orderItems) {
    if (!Array.isArray(orderItems) || orderItems.length === 0) {
        throw new Error("Order list cannot be empty.");
    }

    // 1. Get the list of prices using map() and simultaneously check for invalid items
    const prices = orderItems.map(itemName => {
        const item = menu.find(i => i.name === itemName);
        if (!item) {
            // Throw error for invalid item
            throw new Error(`Invalid item ordered: ${itemName}`);
        }
        return item.price;
    });

    // 2. Calculate the total using reduce()
    const total = prices.reduce((sum, price) => sum + price, 0);

    return total;
}

// Test cases with try-catch
console.log("\n--- Q2. Online Food Ordering ---");

// Case 1: Valid Order
const validOrder = ["Burger", "Fries", "Soda"];
try {
    const total = calculateBill(validOrder);
    console.log(`Order: [${validOrder.join(', ')}] | Total Bill: $${total.toFixed(2)}`);
} catch (error) {
    console.error(`Error calculating bill: ${error.message}`);
}

// Case 2: Invalid Item Order (handled by try-catch)
const invalidOrder = ["Burger", "Pizza", "Soda"];
try {
    const total = calculateBill(invalidOrder);
    console.log(`Order: [${invalidOrder.join(', ')}] | Total Bill: $${total.toFixed(2)}`);
} catch (error) {
    console.error(`Error calculating bill (Invalid Item): ${error.message}`);
}