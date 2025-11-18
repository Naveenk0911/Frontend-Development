const expenses = [250, 120, 800, 300, 150];

let total = expenses[0] + expenses[1] + expenses[2] + expenses[3] + expenses[4];
let average = total / expenses.length;

total += total * 0.10;

console.log("Total with Tax:", total.toFixed(2));
console.log("Average Expense:", average.toFixed(2));
console.log("Final Amount After Tax:", total.toFixed(2));
