"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumericData = [];
const invalidData = [];

console.log("--- Q1: Dynamic Data Parser Report ---");

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];
    const item = {
        original: value,
        toNumber: Number(value),
        toBoolean: Boolean(value),
        toString: String(value)
    };

    const isInvalidNumber = item.toNumber !== item.toNumber || item.toNumber === 0 && (value === " " || value === null || value === undefined) || String(value).trim() === "" && value !== null && value !== undefined;
    
    if (isInvalidNumber) {
        invalidData.push(item);
    } else {
        validNumericData.push(item);
    }
    
    console.log(`\nOriginal: ${item.original} (Type: ${typeof item.original})`);
    console.log(`  -> Number: ${item.toNumber} (Valid: ${!isInvalidNumber})`);
    console.log(`  -> Boolean: ${item.toBoolean}`);
    console.log(`  -> String: ${item.toString}`);
}

console.log("\n--- Array Summary ---");
console.log("Valid Numeric Data Count:", validNumericData.length);
console.log(validNumericData.map(d => d.original));
console.log("Invalid Data Count:", invalidData.length);
console.log(invalidData.map(d => d.original));
console.log("--------------------------------------");