const primeNumber = [
    2,
    3, 
    5, 
    7, 
    11, 
    13
]

const evenNumber = [
    2,
    4,
    6,
    8,
]
const car = {
    manuf: "honda",
    model: "acura",
    year: "1994"
}

const clog = (label, log) => console.log(label,":",log)

const newArray = primeNumber

// clog("original array",primeNumber)
// clog("new array",newArray)
// primeNumber.push(17)
// clog("original array",primeNumber)
// clog("new array",newArray)




// const newArray1 = [...primeNumber]
// clog("original array", primeNumber)
// clog("new array",newArray1)
// primeNumber.pop()
// clog("original array - pop", primeNumber)
// clog("new array - pop",newArray1)



// const newCar = {...car}

// clog("orig obj", car)
// clog("copy obj", newCar)



// const newNumberList = [...primeNumber, ...evenNumber]

// clog("array combined", newNumberList)

// const mathMax = Math.max(...primeNumber)
// clog("Math Max", mathMax)

const number1 = [1,3,5,7]
const number2 = [2,4,6,8]

//create one array with all the values from both array
const combineNumber = [number1,number2]
const check = combineNumber[0]
const combineNumber1 = [...number1,...number2]
const check1 = combineNumber1[0]

clog("combined array",combineNumber)
clog("check", check)
clog("combine number 1",combineNumber1)
clog("check1",check1)