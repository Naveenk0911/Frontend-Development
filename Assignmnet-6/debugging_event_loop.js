console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

console.log("Predicted Output Order:");
console.log("1. Script start (Synchronous)");
console.log("2. Script end (Synchronous)");
console.log("3. Promise callback (Microtask)");
console.log("4. Timeout callback (Macrotask)");

console.log("Explanation: Synchronous code runs first. Then, the Microtask Queue (Promises) is emptied completely before the Event Loop moves to the Macrotask Queue (setTimeout/setInterval).");