function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function() {
    console.log(`Car Details: ${this.brand} ${this.model}`);
};

const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "Accord");

car1.getDetails(); 
car2.getDetails(); 

console.log("Method Sharing Check (should be true):");
console.log(car1.getDetails === car2.getDetails);