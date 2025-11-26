class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; 
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        const annualSalary = this.getAnnualSalary();
        const bonusAmount = annualSalary * (percent / 100);
        return bonusAmount;
    }
}

const employees = [
    new Employee(1, "John Doe", "Sales", 5000),
    new Employee(2, "Jane Smith", "IT", 7500),
    new Employee(3, "Bob Johnson", "HR", 4500),
    new Employee(4, "Alice Brown", "IT", 8000),
    new Employee(5, "Charlie Davis", "Sales", 5200)
];

console.log("--- Employee Annual Salaries ---");
employees.forEach(emp => {
    const annual = emp.getAnnualSalary();
    console.log(`${emp.name}: $${annual.toLocaleString()}`);
});

const totalAnnualPayout = employees.reduce((total, employee) => {
    return total + employee.getAnnualSalary();
}, 0);

console.log("\n--- Company Payout Summary ---");
console.log(`Total Annual Payout (Base Salary): $${totalAnnualPayout.toLocaleString()}`);