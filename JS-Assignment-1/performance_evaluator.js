const marks = [78, 82, 90, 65, 88];

let autoDetained = marks.some(mark => mark < 35);

const total = marks.reduce((sum, m) => sum + m, 0);
const percentage = (total / (marks.length * 100)) * 100;

if (autoDetained) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50) {
    console.log("Promoted");
} else {
    console.log("Detained");
}

console.log("Percentage:", percentage.toFixed(2) + "%");
