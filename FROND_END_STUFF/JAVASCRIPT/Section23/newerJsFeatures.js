// Default Params
console.log("Default Params------->>>>>>>>") ;
// old way
console.log("Old way------->>>>>>>") ;
function multiply(a,b){
    // b = typeof b !== undefined ? b : 1 ;
    if(b===undefined){
        b=1 ;
    }
    return a*b ;
}
let c = multiply(7,9) ;
console.log(c) ;
c = multiply(8,) ;
console.log(c) ;
// new way 
console.log("New way---------->>>>>>>>>") ;
function multiplyDP(a=3,b=1,e=5){ // order matters
    console.log(a) ;
    console.log(b) ;
    console.log(e) ;
    return a*b*e ;
}
c = multiplyDP(7,9,6) ;
console.log(c) ;
c = multiplyDP(4,undefined,8) ;
console.log(c) ;


// SPREAD 
// Spread function allows an iterable such as an array to be expanded in the places where one or more arguments (for function calls)
// or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs
// (for object literals) are expected.
console.log("spread ---------->>>>>>>>>>>") ;
// 1. function calls
console.log("spread in functions----->>>>>> ") ;
let nums = [58,34,23,59,20,40] ;
console.log(Math.max(nums)) ;
console.log(Math.max(...nums)) ; // spread 
console.log(Math.min(...nums)) ;
console.log(nums) ;
console.log(...nums) ;
// 2. array literals
console.log("spread with array literals--------->>>>>>>") ;
// creates a new array using previously defined array
let nums1 = [1,3,nums] ;
console.log(nums1) ;
nums1 = [1, 3, ...nums] ;
console.log(nums1) ;
// 3. object literals
console.log("spread with object literals--------->>>>>>>>>") ;
const restore1 = {
    prabhu1:"Ram",
    place1:"Aayodhya"
}
const restore2 = {
    prabhu2:"Mahadev",
    place2:"Kashi"
}
const restore3 = {
    prabhu3:"Krushna",
    place3:"Mathura"
}
const restoration = {...restore1,...restore2,restore3} ;
console.log(restoration) ; // if key names are same in both the objects the later object will get priority
// if we spread array in object key-index value-elements


// rest params
console.log("rest params------->>>>>>") ;
// looks like spread but it's not

// arguments object
// available inside every function, not in arrow functions
// array like object has length, don't has push/pop etc.
// stores all arguments passed into the function
function sumAll(){
    let total=0 ;
    for(let i=0 ; i<arguments.length ; i++){
        total+=arguments[i] ;
    }
    console.log(total) ;
    // const t = arguments.reduce(function(t,num){ // this gives error
    //     return t+num ;
    // })
}
sumAll(4,8,9,29) ;
// rest collects all remaining arguments in actual array
function sumAllRest(...nums){
    let total=0 ;
    for(let i=0 ; i<arguments.length ; i++){
        total+=arguments[i] ;
    }
    console.log(total) ;
    const t = nums.reduce(function(t,num){
        return t+num ;
    })
    console.log(t) ;
}
sumAllRest(4,8,9,29) ;


// destructuring
console.log("Destructuring------>>>>>>>>") ;
// 1. arrays
console.log("arrays-------->>>>>>") ;
const scores = [4756,9584,757,97493,95847,1294] ;

let firstValue = scores[0] ;
let secondValue = scores[1] ;
console.log(firstValue);
console.log(secondValue) ;
let [thirdValue,fourthValue] = scores ; // order matters
console.log(thirdValue) ;
console.log(fourthValue) ;

// 2. objects
// we access the properties using key names
console.log("objects------>>>>>>>") ;
const person = {
    email:"go@gmail.com",
    password:"tyshsh",
    firstName:"Namaste",
    lastName:"Namaste",
    born:7543,
    died:8474,
    bio:"hduhugsdfhsdfhheuhuhdhf",
    city:"aplya ghari",
}

let{email,lastName}=person ; // order doesn't matter
console.log(email) ;
console.log(lastName) ;
let {born:birthYear} = person ; // giving a name to variable
console.log(birthYear) ;
let {username:UserName='huu'} = person ; // setting default value
console.log(UserName) ;

// 3. parameters
function fullName({firstName,lastName}){
    console.log(`${firstName} ${lastName}.`) ;
}
fullName(person) ;