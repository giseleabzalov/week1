function sayHello() {
    console.log("Hello there.")
}

function sayGoodbye() {
    console.log("Goodbye.")
}

sayHello()
sayGoodbye()

// what if I want to guarantee that hello comes before goodbye

function sayHelloThen(next) {
    console.log("Hello there!")
    next()
}


sayHelloThen(() => console.log("Goodbye!"))