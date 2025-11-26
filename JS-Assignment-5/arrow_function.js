const userProblem = {
    name: "John Doe",
    showName: () => {
        console.log(`Problematic Output (Arrow Function): ${this.name}`);
    }
};

userProblem.showName(); 
console.log("Explanation: The 'this' in the arrow function refers to the global scope, not the object 'userProblem', resulting in undefined.");

const userFixed = {
    name: "Jane Smith",
    showName: function() {
        console.log(`Fixed Output (Normal Function): ${this.name}`);
    }
};

userFixed.showName(); 
console.log("Explanation: The normal function binds 'this' to the object (userFixed) when called as a method.");