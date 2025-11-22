class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        if (this.marks.length === 0) {
            return 0;
        }
        
        const sumOfMarks = this.marks.reduce((acc, current) => acc + current, 0);
        return sumOfMarks / this.marks.length;
    }

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
}

const student1 = new Student("Alice Johnson", [95, 92, 98, 90, 96]);
const student2 = new Student("Bob Smith", [80, 75, 88, 82, 79]);
const student3 = new Student("Charlie Brown", [65, 55, 68, 45, 60]);

console.log(`${student1.name}: Avg=${student1.calculateAverage().toFixed(2)}, Grade=${student1.getGrade()}`);
console.log(`${student2.name}: Avg=${student2.calculateAverage().toFixed(2)}, Grade=${student2.getGrade()}`);
console.log(`${student3.name}: Avg=${student3.calculateAverage().toFixed(2)}, Grade=${student3.getGrade()}`);