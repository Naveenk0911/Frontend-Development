"use strict";

console.log("--- Q10: Nested Hoisting and Closures ---");


console.log("\n--- Original Function Hoisting ---");
function outer() {
    console.log(count);
    var count = 5;
    function inner() {
        console.log(count);
        var count = 10;
    }
    inner();
}
outer();

console.log("\n--- Arrow Function (Still Separate Scope) ---");
function outerArrow() {
    console.log(count);
    var count = 5;
    const inner = () => {

        console.log(count);
        var count = 10;
    };
    inner();
}
outerArrow();

console.log("\n--- Scoping Difference (No Shadowing) ---");
function outerScope() {
    var count = 5;
    function inner() {
        console.log(count);
    }
    inner();
}
outerScope();

console.log("--------------------------------------");