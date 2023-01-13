// const firstName = "Gisele"
// const lastName = "Abzalov" 

const person = {
    firstName: "Gisele",
    lastName: "Abzalov",
    age: 39
}

// dot notation
person.firstName;

// bracket notation
person["lastName"];

// Mutate the value in an object
person.firstName = "Tony";

// Adding new property to an object
person.height = 164

// Deleting a property
delete person.height;

console.log("hello " + person.firstName + " " + person.lastName);
console.log("age:", person.age);
console.log("person object:", person)
console.log("height:", person["height"])