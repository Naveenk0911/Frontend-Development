function makeMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
const quadruple = makeMultiplier(4);

console.log(`Triple 5: ${triple(5)}`);     
console.log(`Quadruple 10: ${quadruple(10)}`); 

console.log("Explanation of Closure: The returned function retains access to the 'multiplier' variable (3 or 4) from makeMultiplier's execution environment even after makeMultiplier has finished.");