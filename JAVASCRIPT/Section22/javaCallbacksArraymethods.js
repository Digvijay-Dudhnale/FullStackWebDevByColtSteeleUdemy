// GOALS -> Use the new arrow function syntax and Understand the use of methods
// 1. forEach
// 2. map
// 3. every
// 4. filter
// 5. find
// 6. reduce 
// 7. some

// forEach method -->> accepts a callback function. Calls the function once per element of array
console.log("forEach Method----->>>>>>") ;
const nums = [5,6,7,8,9,10,11,12] ;
function square(n){
    console.log(`${n*n}`) ;
}
nums.forEach(square) ;

nums.forEach(function(n){
    console.log(n)  ;
})

const movies = [
    {
        title:"Bahubali",
        ratings:90
    },
    {
        title:"Salaar",
        ratings:93
    },
    {
        title:"KGF",
        ratings:89
    }
]
movies.forEach(function(movie){
    console.log(movie) ;
    console.log(`${movie.title} -> ${movie.ratings}/100.`) ;
})


// map method -->> creates a new array with the results of calling of callback function on every element in the array
console.log("map Method------>>>>>>")
const texts=["ram","krushna","hari","mahadev","shiv","bhole","bhairav"] ;
const capTexts = texts.map(function(text){
    // console.log(text) ;
    return text.toUpperCase() ;
})
console.log(capTexts) ;
capTexts.forEach(function(text){
    console.log(text) ;
})

const movieTitle = movies.map(function(movie){
    return movie.title ;
})
console.log(movieTitle) ;
movieTitle.forEach(function(movie){
    console.log(movie) ;
})


// arrow functions -->> newer method of defining functions
// allows us to define a function without keyword "function"
console.log("arrow '=>' function------->>>>>>>") ;
const addArrowFunction = (x,y) => {
    return x+y ;
} 
let addition = addArrowFunction(8,9) ;
console.log(addition) ;

const rollDie = () => {
    return Math.floor(Math.random()*6 + 1) ;
}
console.log(rollDie()) ;

const singleArgument = num => {
    return num*num ;
}
console.log(singleArgument(8)) ;
// arrow function implicit returns 
// oneliner code
const rollDie1 = () => (
    Math.floor(Math.random()*6 + 1) 
)
const rollDie2 = () => Math.floor(Math.random()*6 + 1) 
console.log(rollDie2()) ;


// NON array methods -->> setTimeout and setInterval
// they are used to postponing or scheduling the execution
console.log("Using functions setTimeout and setInterval----->>>>>") ;
//setTimeout(function,time)
const i = setTimeout(function timeDelay(){
    console.log("TIME Delay!!") ;
},3000) ;  
clearTimeout(i) ;

// console.log(setTimeout(rollDie()),3000) ; // not works
//setInterval(function,time)
const id = setInterval(function timeInteval(){
    console.log(Math.floor(Math.random()*10 + 1)) ;
},2000)
clearInterval(id) ;


// filter method------->>>>>>
// creates a new array with all elements that pass the test implemented by the provided function
console.log("filter method-------->>>>>>") ;
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13] ;
const odd = numbers.filter(function (n){
    return (n%2)===1 ;
})
odd.forEach(oddNum => {
    console.log(oddNum) ;
})

// every and some method
// 1. every -->> tests whether all elements in the array pass the provided function. It returns a boolean value
console.log("every method--------->>>>>>>>>") ;
const words = ["dog","dig","log","bag","wag"] ;
let flag = words.every(word => {
    return word.length === 3 ;
})
console.log(flag) ;
flag = words.every(word => {
    return word[0]==="d" ;
})
console.log(flag) ;
flag = words.every(word => {
    let lastElement = word[word.length-1] ;
    return lastElement==="g" ;
})
console.log(flag) ;

// 2. some -->> similar to every, but returns true if any of the array elements passes the test 
console.log("some method------>>>>>>>>>>>") ;
flag = words.some(word => {
    return word[0]==="d" ;
})
console.log(flag) ;