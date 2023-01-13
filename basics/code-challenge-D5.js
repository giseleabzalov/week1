/*  1. Write a simple temp converter. 
        Given a temperature in C, ouput the equivalent temp in F
        25 C is 79 F

    2. Convert one currency to USD
        100 EUR is 95 USD

    3. Given a number of rows and columns, output a grid of *

    4. Create a multiplication grid for 1 * 1 to 10 * 10 using loops

    5. Given a random string, capitalize first letter, lowercase all others,
        and add a period. 
        "iamworthy" = "I am worthy."

    6. Given a string, check if it is a palindrome.
        "mom" = true
        "grandma" = false */

// ***** exercise 1 *****

// const tempC = 0;
// const tempF = tempC * 9 / 5 + 32;

function tempConv (tempC) {
    const tempF = tempC * 9 / 5 + 32
    return tempF
}

tempC = 15

console.log(`${tempC}C is ` + tempConv(15) + "F")

// function printEmoji(emoji, number) {
//     for (let i = 0; i < number + 1; i++){

//         let text = emoji;
//     console.log(text.repeat(i))}
// }

// printEmoji("*",10)

function grid(x,y) {
    for (let i = 0; i < x; i++) {
        let n = '';
        for (let j = 0; j < y; j++) {
            n = n + '*'
        }
        console.log(n)
    }
}
grid(5,4)

function multTable