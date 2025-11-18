const x = 16.75;
const rounded = Math.round(x);
const root = Math.sqrt(x);
const power = Math.pow(x, 3);
const random = Math.floor(Math.random() * 41) + 10;

console.log(`
--- Math Utility Dashboard ---
Rounded: ${rounded}
Square Root: ${root}
Power (x^3): ${power}
Random (10–50): ${random}
`);
