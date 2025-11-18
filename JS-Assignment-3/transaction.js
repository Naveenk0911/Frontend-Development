"use strict";
const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

for (let tx of transactions) {
    try {
        if (!tx) throw new Error("Null transaction");
        if (tx.id === undefined || tx.amount === undefined) throw new Error("Missing data");
        if (tx.amount < 0) throw new Error("Negative amount");
        valid.push(tx);
    } catch (err) {
        invalid.push({ transaction: tx, reason: err.message });
    }
}

console.log("Valid Transactions:", valid);
console.log("Invalid Transactions:", invalid);
