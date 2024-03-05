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


// SECTION ---->>>> 21 - Leveling Up Our Functions

// Function Scope -> Variable visibility, the location where we define a variable dictates where we have access to that variable
// variables declared inside function can't be accessed from outside of function
console.log("Function Scope------->>>>>>") ;
let prabhuNaam = "Ram" ;
function scopeFunction(){
    let prabhuNaam = "Bhairav" ;
    let totalNaamjap = 108 ;
    var count = 88 ;
    console.log(prabhuNaam) ;
    console.log(totalNaamjap) ;
}
// console.log(count) ;
scopeFunction();
// console.log(totalNaamjap) ; // totalNaamjap is limited only to scopeFunction
// Variables declared one outside of function and other inside of function are totally different even if their name is same
console.log(prabhuNaam) ; 


// Block Scope -> 
// Also variables declared inside conditinals and loops can't be accessed from outside
console.log("Block Scope--------->>>>>>") ;
console.log("Conditionals and Loops") ;
let blockScope = 8 ;
if(blockScope < 9){
    let PI = 3.14 ;
    let shape = "circle" ;
}  
console.log(blockScope) ;
// console.log(PI) ; // throws error PI is not defined
for(var i=0 ; i<1 ; i++){
    let msg2 = "kahi nahi bhau, nivant." ;
    var msg ="kay Karat Aahes Bhau!" ;
}
// If we define a variable using "var" insead of "let" it becomes accessible outside the block entities
// In functions' case the scope remains limited to function 
console.log(i) ;
// console.log(msg2) ;
console.log(msg) ;


// Lexical Scope ->
// variables declared in parent can be accessed by child but reverse is not true
// For nested functions
console.log("Lexical Scope --------->>>>>>>>>") ;
console.log("Nested Functions") ;
function bankRobbery(){
    let heroes=['spiderman','wolverine','black panther','peaky blinders'] ;
    function cryForHelp(){
        for(let hero of heroes){
            let heroName = hero ;
            console.log(`PLEASE HELP US, ${hero.toUpperCase()}.`) ;
        }
    }
    // console.log(hero) ; // throws error hero is not defined
    // console.log(heroName) ;
    cryForHelp() ;
}
bankRobbery() ;


// Function Expression
// another way of defining function
// assigning a function result to variable
console.log("Function Expression ------>>>>>>") ;
function exprFunction(){
    console.log("Expression Function.") ;
} ;
exprFunction() ;
const functionExpression = function(x,y){
    console.log("Actual Function Expression!") ;
    return x+y ;
}
let addition = functionExpression(8,8) ;
console.log(addition) ;
console.log(functionExpression(8,9));


// Higher Order Functions 
// Using a function with/inside other function
console.log("Higher Order Functions ------->>>>>>>>") ;
// 1. Pasing as argument
console.log("1.Passing as an argument to other function.") ;
function callTwice(higherFunc){
    higherFunc() ;
    higherFunc() ;
}

function callTenTimes(tenTimes){
    for(let i=0 ; i<10 ; i++){
        tenTimes() ;
    }

}

function rollDie(){
    let roll = Math.floor(Math.random()*6 + 1) ;
    console.log(roll) ;
}
// callTwice(rollDie()) ; // throws error this passes random number 
callTwice(rollDie) ;
// callTenTimes(callTwice(rollDie)) // throws error
callTenTimes(rollDie) ;
// 2. Return function from function
console.log("2.Returning function from function.") ;
function makeMysteryFunc(){
    let rand = Math.random() ;
    if(rand > 0.5){
        return function (){
            console.log("I am a good Function!") ;
        }
    }
    else{
        return function (){
            console.log("I am a bad Function!!!") ;
            // alert("I am a bad Function!!!") ;
            // alert("I am a bad Function!!!") ;
            // alert("I am a bad Function!!!") ;
            // alert("I am a bad Function!!!") ;
            // alert("I am a bad Function!!!") ;
            // alert("I am a bad Function!!!") ;
        }
    }
}
// makeMysteryFunc() ;
const mystery = makeMysteryFunc() ;
mystery() ;

function makeBetweenFunc(min,max){
    return function(num){
        return min <= num && max >= num ;
    }
}

const isChild = makeBetweenFunc(0,18) ;
console.log(isChild(80)) ;
console.log(isChild(5)) ;

const isAdult = makeBetweenFunc(19,40) ;
console.log(isAdult(40)) ;
console.log(isAdult(90)) ;