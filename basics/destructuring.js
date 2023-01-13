
// const number = [
//     1,2,3,4,5,7,8,100,204,485675
// ]

const clog = (label,log) => {   
    console.log(`${label}: ${log}`)         //console.log(label,":",log)
}

// //const render = number[1]
// const [a,b,c,d,e,f,g] = number

// //clog("old way",render)

// clog("destructure",b)
// clog("destructure",c)
// clog("destructure",d)

const person = {
    firstname: "Gisele",
    lastname: "Abzalov",
    age: "39",
    hair: "brown",
    eye: "brown",
    height: "164",
    gender: "female"
    }

    // const firstname = person.firstname
    // const lastname = person.lastname
    // const age = person.age
    // const hair = person.hair




    const {firstname, lastname, age, hair, eye, height, gender} = person

    clog("hair", hair)
    clog("firstname", firstname)
    