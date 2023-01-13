/* ******* Do while ******* */
// console.log("Do while Loop\n******************");

// let i = 0;
// do {
//     console.log("This is #", i);
//     i++;
// } while(i < 10);

/* ******* While loop ******* */
// console.log("While Loop\n************");
// let i = 0;

// while (i < 10) {
//     console.log("This is #",i);
//     i++;
// }

/* ******* For Loop with break ******* */
// console.log("For Loop with break\n************");

// for (let i=0; i<10; i++) {
//     if (i===5) {
//         break
//     }
// console.log ("#", i);
// }
/* ******* For Loop an object ******* */
// console.log("For Loop an object\n************");
// const person = {
//     firstName: "Gisele",
//     lastName: "Abzalov",
//     age: 39
// }

// for (let i in person) {
//     if (person [i] === "Abzalov") {
//         break;
//     }
//     console.log ("key =>",i);
//     console.log ("value =>", person[i], "\n");
// }
/* ******* For Of array ******* */
// console.log("For Of array\n************");




const car = [
    "crosstrek",
    "subaru",
    true,
    true
]

for (let i of car) {
    console.log("value =>", i);
}
