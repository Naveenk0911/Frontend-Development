"use strict";

console.log("--- Q4: Debugging Mystery ---");

// Original code throws ReferenceError: greeting is not defined because 'use strict' 
// prevents implicit global variable creation.

function showMessage() {
    // 2. Fix: Declare 'greeting' with 'let' or 'const' to define it in the function's scope.
    let greeting = "Welcome"; 
    console.log(greeting);
}

showMessage();

console.log("--------------------------------------");