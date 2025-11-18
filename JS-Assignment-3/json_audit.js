"use strict";
const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
for (let i = 0; i < rawData.length; i++) {
    try {
        let obj = JSON.parse(rawData[i]);
        if (!obj.user || !obj.age) throw new Error("Missing keys");
        obj.age = Number(obj.age);
        if (obj.age >= 18) cleanData.push(obj);
    } catch(err) {
        console.log(`Line ${i}: ${err.message}`);
    }
}
console.log("Clean Data:", cleanData);
