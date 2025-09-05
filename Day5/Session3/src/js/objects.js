// Different ways to create and manipulate objects in JavaScript
// 1. Creating an object literal
const student = {
  name: "Vedant",
  age: 22,
  course: "Computer Science",
  isEnrolled: true,
  greet: function () {
    return `Hi, I am ${this.name} and I study ${this.course}`;
  },
};

console.log(student.greet());

// 2. Adding and updating properties
student.grade = "A";
student.age = 23;

console.log(student);

// 3. Iterating over object properties
console.log("Iterating with for...in:");
for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}

// 4. Object.keys(), Object.values(), Object.entries()
console.log("Keys:", Object.keys(student));
console.log("Values:", Object.values(student));
console.log("Entries:", Object.entries(student));

// 5. Nested objects
const classroom = {
  roomNo: 101,
  teacher: {
    name: "Mr. Sharma",
    subject: "JavaScript",
  },
  students: ["Vedant", "Aarav", "Meera"],
};

console.log(`Teacher: ${classroom.teacher.name}, Subject: ${classroom.teacher.subject}`);
console.log("Students:", classroom.students.join(", "));
