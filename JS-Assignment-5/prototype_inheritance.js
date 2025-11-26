function Person(name) {
    this.name = name;
}

Person.prototype.printName = function() {
    console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
    Person.call(this, name); 
    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student; 

Student.prototype.printDetails = function() {
    this.printName(); 
    console.log(`Branch: ${this.branch}`);
};

const student1 = new Student("Alex Johnson", "Computer Science");

student1.printDetails(); 

console.log("Prototype Chain Check:");
console.log(`Student inherits from Person: ${student1 instanceof Person}`);s