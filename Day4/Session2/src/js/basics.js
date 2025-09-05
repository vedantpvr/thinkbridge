//  Declaration & Initializing of a Variable //
let myName = "Vedanth";
let myAge = 21;
console.log(myName);
console.log(myAge);

// Variables types in JavaScript //
// 1. Primitive Data Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt
let myCity = "Pune"; // String
let myHeight = 5.9; // Number
let isStudent = true; // Boolean
let myNullValue = null; // Null

// 2. Non-Primitive Data Types: Object, Array, Function

// 2.1 Array
let myNameArray = ["Vedanth", "Rohan", "Aarav"]; // Array
let myEmployeeNumber =["T50081", "T50082", "T50083"]; // Array
myNameArray[0]; // Accessing first element of the array
console.log(myNameArray[0]);
myEmployeeNumber[1]; // Accessing second element of the array
console.log(myEmployeeNumber[1]);

// 2.2 Object
let myDetails = {name: "Vedanth", age: 21, city: "Pune"}; // Object
console.log(myDetails.name, myDetails.age); // Accessing object properties

// 3. Strings in JavaScript
let firstName = "Vedanth";
let lastName = "Suresh";
let fullName = firstName + " " + lastName;  // Concatenation
console.log(fullName);

//3.1 String Methods
console.log(fullName.length); // Length of the string
console.log(fullName.toUpperCase()); // Convert to uppercase
console.log(fullName.toLowerCase()); // Convert to lowercase
console.log(fullName.includes("Ved")); // Check if substring is present
console.log(fullName.slice(0, 7)); // Extract substring 

// 4. Loops in JavaScript //

// 4.1 For Loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}   
// 4.2 While Loop
let j = 0;  
while (j < 5) {
    console.log("Iteration number: " + j);
    j++;
}   
// 4.3 Do-While Loop
let k = 0;  
do {
    console.log("Iteration number: " + k);
    k++;
}
while (k < 5);
// 4.4 For-Of Loop
let fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
    console.log(fruit);
}
// 4.5 For-In Loop
let person = {name: "Vedanth", age: 21, city: "Pune"};
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// 5. Conditionals in Javascript //

// 5.1 If-Else
let age = 18;
if (age < 18) {
    console.log("Minor");
} else if (age === 18) {
    console.log("Just became an adult");
}
else {
    console.log("Adult");
}

// 5.2 Switch Case
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;  
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// 5.3 Nested If-Else
let marks = 85;
if (marks >= 90) {
    console.log("A+ Grade");
}
else if (marks >= 80) {
    console.log("A Grade");
}
else if (marks >= 70) {
    console.log("B Grade");
}
else {
    console.log("C Grade");
}

// 5.4 Logical Operators
let isAdult = true;
let hasID = false;
if (isAdult && hasID) {
    console.log("Allowed to enter");
}
else {
    console.log("Not allowed to enter");
}
if (isAdult || hasID) {
    console.log("Allowed to enter");
}
else {
    console.log("Not allowed to enter");
}
if (!hasID) {
    console.log("ID is required");
}

// 5.5 Ternary Operator //
let canVote = (age >= 18) ? "Yes" : "No";
console.log("Can vote: " + canVote);    


