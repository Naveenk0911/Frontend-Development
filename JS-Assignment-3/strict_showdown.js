"use strict";

const operations = ["add", "divide", "power", "root", "subtract", "multiply"];
const num1 = 25, num2 = 0;

class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

console.log("--- Q7: Smart Calculator ---");

for (let i = 0; i < operations.length; i++) {
    const op = operations[i];
    let result = null;
    let success = true;

    try {
        switch (op) {
            case "add":
                result = num1 + num2;
                break;
            case "subtract":
                result = num1 - num2;
                break;
            case "divide":
                if (num2 === 0) {
                    throw new Error("Division by zero error");
                }
                result = num1 / num2;
                break;
            case "power":
                result = Math.pow(num1, num2);
                break;
            case "root":
                if (num1 < 0) {
                    throw new Error("Root of a negative number error");
                }
                result = Math.sqrt(num1);
                break;
            default:
                throw new InvalidOperationError(`Operation '${op}' not recognized`);
        }
    } catch (error) {
        result = error.message;
        success = false;
    } finally {
        console.log(`
Operation: ${op} (${num1}, ${num2})
Status: ${success ? 'SUCCESS' : 'FAILURE'}
Result/Error: ${result}
`);
    }
}

console.log("--------------------------------------");