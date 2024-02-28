// Creating arrays
// 1. Empty array1
let emptyArray = [] ;
// 2. An array of Nubmers
let numberArray = [3,5,7,8] ;
// 3. An array of strings
let stringArray = ['ram','sham','radha','sita','shiv','parvati'] ;
// 4. A mixed array
let mixedArray = ['ram',42101,'krushna',null,NaN,undefined,'goodStuff'] ;

console.log(emptyArray) ;
console.log(numberArray) ;
console.log(stringArray) ;
console.log(mixedArray) ;

// Accessing array by index ;
console.log(numberArray[0]) ;
console.log(stringArray[2]) ;
console.log(mixedArray[6]) ;
// Changing array through index
numberArray[0] = 10 ;
console.log(numberArray) ;

// Inbuilt array methods
// 1. Push --->>> add at the end of array and returns new length of array
// 2. Pop --->>> remove from the end of array and returns last elemnt
let length = emptyArray.push(4) ;
console.log(emptyArray) ;
console.log(length) ;
let lastElement = emptyArray.pop() ;
console.log(emptyArray) ;
console.log(lastElement) ;
// 3. Shift --->>> remove from start of array and returns first elemnt
// 4. Unshift --->>> add at the start of array and returns new length of array
length = emptyArray.unshift(4) ;
console.log(emptyArray) ;
console.log(length) ;
lastElement = emptyArray.shift() ;
console.log(emptyArray) ;
console.log(lastElement) ;
// 5. concat --->>> concatenates two arrays
let concatenatedArray = numberArray.concat(stringArray) ;
console.log(concatenatedArray) ;
// 6. includes --->>> returns true or false 
console.log("concatenated array includes ram : " + concatenatedArray.includes('ram')) ;
console.log("concatenated array includes krushna : " + concatenatedArray.includes('krushna')) ;
// 7. indexOf --->>> returns index of element if present else -1 
console.log(numberArray.indexOf(23)) ;
console.log(numberArray.indexOf(10)) ;
// 8. reverse --->>> reverses the original array ;
concatenatedArray.reverse() ;
console.log(concatenatedArray) ;
// 9. slice --->>> slice(start,end) creates a copy of original array from start index to end index excludes end index 
let slicedArray = concatenatedArray.slice(2,7) ;
console.log(slicedArray) ;
// 10. splice --->>> splice(start,count of items to be deleted,items to insert) changes original array deletes and inserts elements
let splicedArray = concatenatedArray.splice(6,4,'bhairav','yogini','krushna','amba') ;
console.log(splicedArray) ;
console.log(concatenatedArray) ;


// Reference types and Equality testing
// Equality is checked by referencing variable adress in memory 
// 1 ---->>>>
// let nums = [1,2,3]
// undefined
// let numsCopy = nums 
// undefined
// nums === numsCopy
// // true
// nums.push(4)
// 4
// nums
// (4) [1, 2, 3, 4]
// numsCopy
// (4) [1, 2, 3, 4]
// 2 ---->>>>
// let nums = [1,2,3] 
// undefined
// let numsCopy = [1,2,3]
// undefined
// nums === numsCopy
// false
// nums.push(4)
// 4
// nums
// (4) [1, 2, 3, 4]
// numsCopy
// (3) [1, 2, 3]

// Declaring array using const
// we can perform all inbuilt operations on array but if we try to reassign new values to array we get error 
// inshort the adress will reamin constant 
const constantArray = ['digvijay','pranjali','mahesh','manoj','pratibha'] ;
constantArray.push('samarth','srushti') ;
console.log(constantArray) ;
// Following line gives error
// constantArray = [1,2,3] ;


// Multidimensional Arrays 
let mulitdimensionalArray = [[1,2,3],[4,5,6],[7,8,9]] ;
console.log(mulitdimensionalArray) ;
console.log(mulitdimensionalArray[2][1]) ;


