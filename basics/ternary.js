const gender = 'female'

// ? - then
// : - else
const greeting = (gender === 'male') ? 'Hello sir.' : 'Hello ma\'am'

console.log(greeting)

// let's do another example...

const age = 39

const message = (age >= 21)
                    ? 'Drink up!'
                    : 'Have some water.'

console.log(message)

// YES, we can nest ternaries...

const message2 = (age >=21)
                ? 'Drink all you want.'
                : (age >=18)
                    ? 'Have some more water.'
                    : 'Please leave now.'

console.log(message2)
