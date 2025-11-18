"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}',
    '{"user":"Tom","age":15}',
    '{"user":"Sue","age":30}'
];

const cleanData = [];
const errorLog = [];

console.log("--- Q9: JSON Audit ---");

for (let i = 0; i < rawData.length; i++) {
    const jsonString = rawData[i];
    let parsedObject = null;
    let entryValid = true;

    try {
        // 1. Parse using try...catch
        parsedObject = JSON.parse(jsonString);

        // 2. Detect missing keys
        if (!parsedObject.user || !parsedObject.age) {
            throw new Error("Missing 'user' or 'age' key");
        }

        // 5. Bonus: Convert age to Number and filter under-18 users
        parsedObject.age = Number(parsedObject.age);
        if (isNaN(parsedObject.age)) {
            throw new Error("Age could not be converted to a number");
        }

        if (parsedObject.age < 18) {
            throw new Error("User is under 18 and will be filtered");
        }
        
        // 3. Push valid entries
        cleanData.push(parsedObject);

    } catch (error) {
        entryValid = false;
        errorLog.push({
            lineNumber: i + 1,
            data: jsonString,
            reason: error.message
        });
    }
}

console.log("\n--- Audit Summary ---");
console.log(`Total Entries: ${rawData.length}`);
console.log(`Valid & Filtered Entries: ${cleanData.length}`);

console.log("\nClean Data Array:");
console.log(cleanData);

console.log("\nError Log:");
console.log(errorLog);

console.log("--------------------------------------");