// Given any array of numbers write a function that returns
// the largest number in that array 

function getLargestNumber (list) {
    let largestNum = 0

    for (let i = 0; i < list.length; i++){
        if(list[i] > largestNum) {
            largestNum = list [i]
        }
    }
    return largestNum
}

const myNums = [10, 25, 8, 3, 47]

const largest = getLargestNumber(myNums)

console.log(largest)

// // Given any array of numbers (all will be > 0),
// write a function that returns the number of odd
// numbers in the array.

//function countOddNumbers(list) {

function countOddNumbers(list) {
    let oddNumbers = 0

    for (i = 0; i <= list.length; i++) {
        if (list[i] % 2 === 0) {
            oddNumbers++
        }
    } 
    return oddNumbers
}

list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(countOddNumbers(list))