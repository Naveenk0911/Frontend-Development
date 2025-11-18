"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

const processedEmployees = [];

console.log("--- Q2: Employee Bonus Calculator Report ---");

for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    
    try {
        const name = employee.name;
        const salary = Number(employee.salary);
        const years = Number(employee.years);

        if (isNaN(salary) || isNaN(years) || !name) {
            throw new Error(`Invalid or missing data for employee at index ${i}`);
        }

        const bonusRate = years > 3 ? 0.10 : 0.05;
        const bonus = salary * bonusRate;

        processedEmployees.push({ name, salary, years, bonus });

        console.log(`
Employee: ${name}
Salary: $${salary.toFixed(2)}
Years of Service: ${years}
Bonus Rate: ${(bonusRate * 100).toFixed(0)}%
Calculated Bonus: $${bonus.toFixed(2)}
`);
    } catch (error) {
        console.error(`Error processing employee ${employee ? employee.name : 'Unknown'}: ${error.message}`);
    }
}

console.log("--------------------------------------");