console.log("This is our First Javascript File which we run by using HTML file") ;

let a ;
let b ;
a = 4 ;
b = 5 ;
let c = a+b ;
console.log(a) ;
console.log(b) ;
console.log("Sum of a and b is : " + (a+b)) ;

// Conditional Statements
console.log("Conditional Statements") ;
console.log("1. if \n2. if-else \n3. if-else if-else") ;
// if
if(a<b){
    console.log("a is less than b and b is greater than a") ;
}

// if-else
g = 34 ;
h = 40 ;
if(g===h){
    console.log("g is equal to h") ;
}
else{
    console.log("g is not equal to h") ;
} 

// if-else if-else
var k = "Monday" ;
var l = "Tuesday" ;
var m = "Wednesday" ;
if(k==="Mon"){
    console.log("Today is Monday") ;
}
else if(l==="Tuesday"){
    console.log("Today is Tuesday") ;
}
else if(m==="Wednesday"){
    console.log("Today is Wednesday") ;
}
else{
    console.log("You don't know what day it is") ;
}

// Nested Conditionals
const password = prompt("Enter your password!!") ;
// // password must be 6+ characters
// if(password.length >= 6){
//     console.log("Password is long enough.!!") ;
// }
// else{
//     console.log("Password is not long enough.!!") ;
// }
// // password can't contain space
// if(password.indexOf(" ") === -1){
//     console.log("Good Job Password don't have space.") ;
// }
// else{
//     console.log("Password Can't have space!!!") ;
// }

if(password.length >= 6){
    if(password.indexOf(" ")=== -1){
        console.log("Valid Password.") ;
    }
    else{
        console.log("Password Can not contain space.") ;
    }
}
else{
    console.log("Password is too short.") ;
}

// Truthy and Falsy Values
// Falsy Values --->>> false, 0, empty string, null, undefined, NaN.
// Truthy Values --->>> Everything else is true.
const userInput = prompt("Enter Your Username.") ;

if(userInput){
    console.log("Truthy Value.") ;
}
else{
    console.log("Falsy Values.") ;
}

// Logical Operators
// 1. AND, 2. OR, 3. NOT
// AND
// false && false
// false
// true && true
// true
// false && true
// false
if(password.length >= 6 && password.indexOf(" ") === -1){
    console.log("Password is Valid") ;
}
else{
    console.log("Password is either too short OR contains spaces.") ;
}
// OR
// true || true
// true
// true || false
// true
// false || false
// false
if(password.length >= 6 || password.indexOf(" ")===-1){
    console.log("Valid Password!") ;
}
else{
    console.log("Invalid Password") ;
}
// NOT
// !false
// true
// !true
// false
if(!(password.length >= 6 && password.indexOf(" ") === -1)){
    console.log("Password is either too short OR contains spaces.") ;
}
else{
    console.log("Password is Valid") ;
}

// Switch Statement
let day = prompt("Enter days order in week..") ;
const dayOrder = parseInt(day) ;
switch(dayOrder){
    case 1 : 
        console.log("Monday") ;
        break ;
    case 2 : 
        console.log("Tuesday") ;
        break ;
    case 3 : 
        console.log("Wednesday") ;
        break ;
    case 4 : 
        console.log("Thursday") ;
        break ;
    case 5 : 
        console.log("Friday") ;
        break ;
    case 6 : 
        console.log("Saturday") ;
        break ;
    case 7 : 
        console.log("Sunday") ; 
        break ;
    default : 
        console.log("Invalid day order") ;
}