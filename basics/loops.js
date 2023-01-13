for (let i=0; i < 10; i++) {
    console.log(i, "this is fun!")
}

for (let i=10; i > 0; i = i - 1) { // - 1 could be written as i--
    console.log(i)
}

console.log("blast off!")

function calculateSum(arr) {
    let sum = arr[0];

for (let i = 1; i < arr.length; i++) {
    sum = sum + arr[i]
}
return sum
}

const givenListofNumbers = [100, 200, 85, 25, 15, 10, 2]

const answer = calculateSum(givenListofNumbers)

console.log(answer)