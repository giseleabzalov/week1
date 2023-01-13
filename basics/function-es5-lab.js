/*
create your own person object with...
    first name
    last name
    fav color
    hobby

Create an array with your fav movie * 3

Create a function that generates the following...
    console.log f1 Hi my full name is $firstN $lastN. Fav color is $favC and love $hobby.
    console.log f2 I like these 3 movies, $movie0, $movie1
    console.log f3 create a math function that takes 3 parameters
*/

const person = {
    firstName: "Gisele",
    lastName: "Abzalov",
    favColor: "white",
    hobby: "fashion"
}

const movieArray = [
    "Followers", 
    "Pale Blue Eyes",
    "Forrest Gump"];

function personInfo (firstName="Gisele", lastName="Abzalov", favColor="white", hobby="fashion") {
    let sum = firstName + lastName + favColor + hobby;
    return sum;
}

function sumAdd (x=100, y=200, z=300) {
    let sum = x + y + z;
    return sum;
}

console.log ("Hi my full name is "+ person.firstName + " " + person.lastName + "." + " Fav color is " + person.favColor + " " + "and love " + person.hobby );

console.log ("I like these 3 movies, " + movieArray);

console.log (sumAdd(100, 200, 300));

console.log (personInfo(Gisele, Abzalov, white, fashion));
