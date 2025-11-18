const userName = "Alice";           
const age = 25;                     
const isActive = true;             
const hobbies = ["music", "coding"]; 
const profile = { city: "Paris" };   
const emptyValue = null;           
let futureValue;                    


const dataReport = [
    { label: "Name", value: userName, type: typeof userName },
    { label: "Age", value: age, type: typeof age },
    { label: "Active", value: isActive, type: typeof isActive },
    { label: "Hobbies", value: hobbies, type: Array.isArray(hobbies) ? "array" : typeof hobbies },
    { label: "Profile", value: profile, type: typeof profile },
    { label: "Null Value", value: emptyValue, type: typeof emptyValue },
    { label: "Undefined Value", value: futureValue, type: typeof futureValue }
];

console.table(dataReport);
