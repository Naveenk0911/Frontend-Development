function Person(name) {
    this.name = name;
}

Person.prototype.introduce = function() {
    console.log(`Person: Hello, my name is ${this.name}.`);
};

function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function() {
    console.log(`Faculty: I work in the ${this.department} department.`);
};

function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.teach = function() {
    console.log(`Professor: I teach ${this.subject}.`);
};

const prof = new Professor("Dr. Emily Carter", "Physics", "Quantum Mechanics");

console.log("--- Professor Accessing All Methods Up The Chain ---");
prof.teach(); 
prof.showDepartment(); 
prof.introduce();