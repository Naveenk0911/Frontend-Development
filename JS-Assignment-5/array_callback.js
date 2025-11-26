function applyOperation(numbers, operation) {
    const results = [];
    for (let i = 0; i < numbers.length; i++) {
        results.push(operation(numbers[i]));
    }
    return results;
}

function double(number) {
    return number * 2;
}

function square(number) {
    return number * number;
}

const originalNumbers = [1, 2, 3, 4];

const doubledNumbers = applyOperation(originalNumbers, double);
console.log(`Original Numbers: ${originalNumbers}`);
console.log(`Doubled Numbers: ${doubledNumbers}`); 

const squaredNumbers = applyOperation(originalNumbers, square);
console.log(`Squared Numbers: ${squaredNumbers}`);