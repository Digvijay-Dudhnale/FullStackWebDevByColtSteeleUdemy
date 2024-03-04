// FUNCTIONS
// Intro to Functions
// basically functions are reusable procedures or lines of code
// first we define the functions and then run them
// syntax for defining -->>
// function functionName(){ write your code}

// Creating a function
function printPrabhuNaam(){
    console.log("Ram Krushna Hari!") ;
    console.log("Har Har Mahadev!") ;
    console.log("Jay Bhairav Baba!") ;
}

// Calling a created function
printPrabhuNaam() ;

// Arguments in functions -->> inputs to functions
function greet(name){
    console.log(`Ram Ram ${name} 🙏`) ;
}
let name = "Digvijay" ;
// let name = prompt("What is your name?") ;
greet(name) ;
// Multiple Arguments 
function greetMultiple(firstName,lastName){
    console.log(`Ram Ram ${firstName} ${lastName}`) ;
}
let firstName = "Digvijay" ;
let lastName = "Dudhnale" ;
greetMultiple(firstName,lastName) ;

function repeat(name,repNum){
    for(let i=0 ; i<repNum ; i++){
        console.log(`Ram Ram ${name}`) ;
        console.log("Jay Hanuman") ;
        console.log(i+1) ;
    }
}
let repNum = 9 ;
repeat(name,repNum) ;

// "Return" Keyword
function demoReturn(num){
    console.log(`This function returns random number from 1 to ${num}.`) ;
    if(typeof num === "number"){
        return Math.floor(Math.random()*num + 1) ;
    }
    return "Your input is not valid!" ;
}
let randomNum ;
randomNum = demoReturn(5) ;
console.log(randomNum) ;
