// Employee Base Class
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    // Base work method
    work() {
        return `${this.name} in the ${this.department} department is performing general tasks.`;
    }
}

// Manager Subclass inheriting Employee
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department); // Call parent constructor
        this.teamSize = teamSize;
    }

    // Overriding the work() method (Polymorphism)
    work() {
        return `${this.name}, the Manager, is **leading a team of ${this.teamSize}** in ${this.department}.`;
    }
}

// Create objects
const generalEmployee = new Employee("Sarah Connor", "Finance");
const projectManager = new Manager("John Doe", "Engineering", 15);

console.log("\n--- Q4. Employee Inheritance ---");

// Demonstrate Runtime Polymorphism
// The specific work() method is called based on the object's actual type at runtime.
console.log("Employee Object Call:");
console.log(generalEmployee.work()); // Calls Employee's work()

console.log("\nManager Object Call (Overridden Method):");
console.log(projectManager.work()); // Calls Manager's (Overridden) work()