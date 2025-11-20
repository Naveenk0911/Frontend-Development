function showEndMessage() {
  console.log("Welcome to the course!");
  console.log("--- Callback execution complete. ---");
}

function greetUser(name, callback) {
  console.log(`Hello ${name}`);
  
  console.log("-> Greeting complete, now executing callback...");
  
  if (typeof callback === 'function') {
    callback();
  } else {
    console.error("Error: The provided argument is not a valid function.");
  }
}

console.log("--- Starting function execution... ---");
greetUser("Alice", showEndMessage);
console.log("--- Main function call finished. ---");