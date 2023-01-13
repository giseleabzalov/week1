// const person = {
//      firstName: "Gisele",
//      lastNamr: "Abzalov",
//      age: 39
// }

const personarray = [
    "Gisele", //0
    "Abzalov", //1
    39 //2
];

// Mutate a value
personarray[0] = "Tony";
personarray[4] = "Antoinette";

const fullName = personarray[0] + " " + personarray[1];

const totalLength = personarray.length;

console.log(personarray);
console.log("fullName: ", fullName);
console.log("total:", totalLength);
