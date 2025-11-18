"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null,
    { id: 4, amount: 1500 }
];

const validTransactions = [];
const invalidTransactions = [];
let successfulCount = 0;
let failedCount = 0;

console.log("--- Q3: Transaction Validator Report ---");

for (let i = 0; i < transactions.length; i++) {
    const t = transactions[i];

    try {
        if (t === null) {
            throw new Error("Null entry detected");
        }
        
        if (t.id === undefined || t.amount === undefined) {
            throw new Error("Missing 'id' or 'amount'");
        }
        
        if (t.amount < 0) {
            throw new Error("Negative amount detected");
        }
        validTransactions.push(t);
        successfulCount++;
        console.log(`✅ ID ${t.id}: Valid transaction. Amount: ${t.amount}`);
        
    } catch (error) {
        invalidTransactions.push({ 
            transaction: t, 
            error: error.message 
        });
        failedCount++;
        console.error(`❌ ID ${t && t.id !== undefined ? t.id : 'N/A'}: Failed transaction. Reason: ${error.message}`);
    }
}

console.log("\n--- Final Report ---");
console.log(`Successful Transactions Count: ${successfulCount}`);
console.log(`Failed Transactions Count: ${failedCount}`);
console.log("Invalid Entries Details:");
console.log(invalidTransactions);
console.log("--------------------------------------");