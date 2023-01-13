// function declaration

function nameFunctionHere (a,b,c,d,e) {
    const sum1 = a + b
    const sum2 = d + e
    const final = `${sum1} ${c} ${sum2}`
    return final
}

const sumFunction = nameFunctionHere(20,10,"Nike",30,50)

console.log(sumFunction)

//another example

function clog (label,log) {
    console.log(`${label}${log}`)
}

const mathSum = 10 + 20

clog("this is sum ",mathSum)

const arrayName = [
    "string 1", //0
    "string2",  //1
    1,          //2
    2           //3
]

const objectName = {
    key1: "value1", //key1
    key2: "value2", //key2
    key3: 1,        //key3
    key4: 2         //key4
}

// loops

const forLoopEnd = 10
for (let i = 0; i < forLoopEnd; i++) {

    const sentence = "I will never give up"
    const loopSentence = `[${i+true}] ***** ${sentence} ***** [${i+true}]`
    console.log(loopSentence)
}

function forLoop(forLoopEnd, sentence) {

    for (let i = 0; i < forLoopEnd; i++) {

        const loopSentence = `[${i+true}] ***** ${sentence } ***** [${i+true}]`
        console.log(loopSentence)
    }
}

forLoop(10, "I love it")

function forLoop(forLoopEnd, sentence) {

    for (let i = 0; i < forLoopEnd; i++) {

        const loopSentence = `[${i+true}] ***** ${sentence } ***** [${i+true}]`
        console.log(loopSentence)
    }
}

forLoop(20, "I will never give up")
forLoop(20, "I love it")
forLoop(20, "Here we go")