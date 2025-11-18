"use strict";

console.log("--- Q6: Pyramid Pattern Generator ---");

const defaultLimit = 5;
const rows = process.argv[2] ? Number(process.argv[2]) : defaultLimit;

console.log("\n--- Pyramid using 'let' ---");
for (let i = 1; i <= rows; i++) {
    let output = '';
    for (let j = 1; j <= i; j++) {
        output += '* ';
    }
    console.log(output);
}

console.log("\n--- Pyramid using 'var' ---");
for (var i = 1; i <= rows; i++) {
    var output = '';
    for (var j = 1; j <= i; j++) {
        output += '* ';
    }
    console.log(output);
}


console.log("--------------------------------------");