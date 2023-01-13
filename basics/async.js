function doSomething() {
    console.log("SOMETHING")
}

console.log("START")

setTimeout(doSomething, 2000) //2 seconds, even if 0, still the same

setTimeout(function doSomethingELse() { //name of the function is not necessary - *** anonymous function ***
    console.log("OTHER THING")
}, 1000)

setTimeout(() => {                      // function () {...} the same, both ways used for anonymous functions
    console.log("Another thing")
},0)

console.log("END")