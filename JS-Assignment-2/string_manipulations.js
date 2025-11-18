let productName = " wireless headphones PRO ";
let cleaned = productName.trim();
cleaned = cleaned.toLowerCase();
cleaned = cleaned.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
cleaned = cleaned.replace("Pro", "Pro Edition");
console.log("Cleaned Title:", cleaned);
console.log("Title Length:", cleaned.length);
