"use strict";
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumbers = [];
const invalidNumbers = [];

for (let val of apiData) {
    let num = Number(val);
    let bool = Boolean(val);
    let str = String(val);
    if (!isNaN(num) && val !== " " && !isNaN(parseFloat(val))) {
        validNumbers.push(num);
    } else {
        invalidNumbers.push(val);
    }
    console.log(`Original: ${val}, Number: ${num}, Boolean: ${bool}, String: "${str}"`);
}

console.log("Valid Numbers:", validNumbers);
console.log("Invalid Numbers:", invalidNumbers);
