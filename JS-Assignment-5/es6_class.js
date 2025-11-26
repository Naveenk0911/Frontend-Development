class PersonClass {
    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log(`Name (Class): ${this.name}`);
    }
}

class StudentClass extends PersonClass {
    constructor(name, branch) {
        super(name); 
        this.branch = branch;
    }

    printDetails() {
        this.printName(); 
        console.log(`Branch (Class): ${this.branch}`);
    }
}

const studentClass = new StudentClass("Bethany Clark", "Electrical Engineering");
studentClass.printDetails(); 

// Prototype Version (for comparison)
function PersonProto(name) {
    this.name = name;
}

PersonProto.prototype.printName = function() {
    console.log(`Name (Prototype): ${this.name}`);
};

function StudentProto(name, branch) {
    PersonProto.call(this, name); 
    this.branch = branch;
}

StudentProto.prototype = Object.create(PersonProto.prototype);
StudentProto.prototype.constructor = StudentProto; 

StudentProto.prototype.printDetails = function() {
    this.printName();
    console.log(`Branch (Prototype): ${this.branch}`);
};

const studentProto = new StudentProto("David Lee", "Mechanical Engineering");
studentProto.printDetails();

console.log("Class and Prototype Instance Check (Both should be true):");
console.log(`Class instance is a Person: ${studentClass instanceof PersonClass}`);
console.log(`Prototype instance is a Person: ${studentProto instanceof PersonProto}`);