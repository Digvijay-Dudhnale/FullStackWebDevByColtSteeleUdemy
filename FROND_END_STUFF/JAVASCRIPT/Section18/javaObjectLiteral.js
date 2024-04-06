// Objects
// Objects are collection of Properties
// Properties are key-value pairs
// we access value by using key unlike in array we use index 

// Creating and Using an Object
const fitBitData = {
    totalSteps:123048,
    totalMiles:384,
    avgCalorieBurn:353,
    workoutsThisWeek:'4 of 7',
    avgGoodSleep:'2.13'
};

const person = {
    firstName:'Digvijay',
    lastName:'Dudhnale'
};

// Accessing Data from Object Literal
// 1. using square brackets
console.log(fitBitData["totalSteps"]) ;
// 2. using dot operator
console.log(fitBitData.avgCalorieBurn) ;
// Difference 
// if we assign a key to variable and try to access the value usig the variable 
// square brackets will access and dot operator won't
let varTotalSteps = 'totalSteps' ; // Object Literal converts all the key's to string data type
console.log(fitBitData[varTotalSteps]) ;
console.log(fitBitData.varTotalSteps) ;
let varPerson = 'firstName' ;
console.log(person[varPerson]) ;

// Modifying the values from Object Literal
console.log(fitBitData) ;
fitBitData.workoutsThisWeek = '5 of 7' ;
console.log(fitBitData) ;
fitBitData.pushUps = 8 ;
fitBitData["pullUps"] = 10 ;
console.log(fitBitData) ;

// Nesting arrays and Objects
// 1. Objects inside array 
const arrayObject = [
    {
        attendance:'78%',
        marks:97,
        division:"B",
        year:"TE"
    },
    {
        attendance:'65%',
        marks:90,
        division:"A",
        year:"BE"
    },
    {
        attendance:'68%',
        marks:80,
        division:"A",
        year:"TE"
    }
] ;
console.log(arrayObject) ;
console.log(arrayObject[0]) ;
console.log(arrayObject[0]["attendance"]) ;
console.log(arrayObject[0].marks) ;
// 2. Arrays inside Objects
const objectArray = {
    books:['Rich Dad Poor Dad','The Art of Pubic Speaking','Mrityunjay','ShrimantYogi'],
    pages:[450,432,235,700],
    author:["Don't Know","Dale Carnegie","Ranjit Desai","Ranjit Desai"]
};
console.log(objectArray) ;
console.log(objectArray.author) ;
console.log(objectArray["books"][0]) ;
