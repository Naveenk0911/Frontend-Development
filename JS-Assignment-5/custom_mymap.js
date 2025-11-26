Array.prototype.myMap = function(callback) {
    const newArray = [];
    
    for (let i = 0; i < this.length; i++) {
        const result = callback(this[i], i, this);
        newArray.push(result);
    }
    
    return newArray;
};

const numbers = [1, 2, 3];

const doubled = numbers.myMap(num => num * 2);
console.log(`Original: ${numbers}`);
console.log(`Doubled (myMap): ${doubled}`); 

const squared = numbers.myMap(num => num * num);
console.log(`Squared (myMap): ${squared}`);