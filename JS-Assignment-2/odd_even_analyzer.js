const numbers = [];
for (let i = 1; i <= 30; i++) numbers.push(i);

const results = [];

for (let num of numbers) {
    if (num % 3 === 0 && num % 5 === 0) results.push("FizzBuzz");
    else if (num % 2 === 0) results.push("Even");
    else results.push("Odd");
}

console.log(results);
