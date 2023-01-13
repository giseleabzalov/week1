
function sayHello (firstName="Stranger") {
    console.log("hey there, " + firstName);
}

sayHello();

function sumAdd (x=0, y=0) {
    let sum = x + y;
    return sum;
}

console.log (sumAdd(100,1) );