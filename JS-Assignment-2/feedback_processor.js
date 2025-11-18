const feedback = "Great product! Fast delivery and amazing sound quality!";
const wordCount = feedback.split(" ").length;
const hasNegative = feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor");

console.log("Word Count:", wordCount);
console.log(hasNegative ? "Needs Improvement" : "Positive Feedback");
