class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    // Method to calculate average using reduce()
    calculateAverage() {
        if (this.marks.length === 0) {
            return 0;
        }
        const totalMarks = this.marks.reduce((sum, mark) => sum + mark, 0);
        return totalMarks / this.marks.length;
    }

    // Method to return grade based on average
    getGrade() {
        const average = this.calculateAverage();

        if (average >= 90) {
            return 'A';
        } else if (average >= 80) {
            return 'B';
        } else if (average >= 70) {
            return 'C';
        } else {
            return 'F';
        }
    }

    getSummary() {
        const avg = this.calculateAverage().toFixed(2);
        const grade = this.getGrade();
        return `${this.name} | Avg: ${avg} | Grade: ${grade}`;
    }
}

// Test the class for 3 students
const student1 = new Student("Alice", [95, 88, 92, 90]);
const student2 = new Student("Bob", [78, 65, 82, 70]);
const student3 = new Student("Charlie", [55, 60, 48, 75]);

console.log("--- Q1. Student Result Processing ---");
console.log(student1.getSummary()); // Alice | Avg: 91.25 | Grade: A
console.log(student2.getSummary()); // Bob | Avg: 73.75 | Grade: C
console.log(student3.getSummary()); // Charlie | Avg: 59.50 | Grade: F