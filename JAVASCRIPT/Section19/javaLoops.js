// LOOPS
// Loops allow us to repeat code
// 1. For Loop
// 2. While Loop
// 3. For...of Loop
// 4. For...in Loop

// 1. FOR loop
// for(initialExpression;condition;increment/decrementExpression)
// print numbers from 1 to 10 using for loop
console.log("Printing numbers from 1 to 10 , using for loop") ;
let n = 10 ;
// n = prompt("Enter how many numbers you want to print starting from 1") ;
for(let i=1 ; i<=n ; i++){
    console.log(i) ;
}
// print even numbers from 0 to 20
console.log("Printing even numbers from 0 to 20 , using for loop") ;
for(let i=0 ; i<=20 ; i++){
    if(i%2===0){
        console.log(i) ;
    }
}
// for(let i=0 ; i<=20 ; i+=2){
//     console.log(i) ;
// }
// print 100,90,80,....,0
console.log("Printing the sequence 100,90,80,....,0 using for loop") ;
for(let i=100 ; i>=0 ; i-=10){
    console.log(i) ;
}
// for(let i=100 ; i>=0 ; i--){
//     if(i%10===0){
//         console.log(i) ;
//     }
// }

// INFINITE LOOP --->>> make sure each time the terminating condition meets at one point 

// looping over arrays
console.log("Iterating over array using for loop") ;
let loopArray = ["ram",4,5,6,"sita",7,8,9] ;
let sizeOfArray = loopArray.length ;
for(let i=0 ; i<sizeOfArray ; i++){
    console.log(i,loopArray[i]) ;
}
// nesting for loops
console.log("Nesting the for loops")
for(let outer=0 ; outer<= 10 ; outer++){
    console.log(`Outer is : ${outer}`) ;
    for(let inner=0 ; inner<=2 ; inner++){
        console.log(`       Inner is : ${inner}`) ;
    }
}
// iterating over nested arrays using nested for loops
console.log("Nested arrays Nested for Loops") ;
let nestArray = [[1,2,3],[4,5,6],[7,8,9]] ;
// console.log(nestArray.length) ;
// console.log(nestArray[0].length) ;
for(let i=0 ; i<nestArray.length;i++){
    let output = '' ;
    for(let j=0 ; j<nestArray[0].length;j++){
        // console.log(nestArray[i][j]) ;
        output += " "+nestArray[i][j] ;
    }
    console.log(output) ;
}


// 2. WHILE loop
// while(condition){} --->>> runs as long as condition is true
console.log("Print numbers from 0 to 10, using while loop") ;
let countWhile=0 ;
while(countWhile<=10){
    console.log(countWhile) ;
    countWhile++ ;
}
// const SECRET="BabyBoy" ;
// let guess = prompt("Enter the secret code : ") ;
// while(guess!==SECRET){
//     guess=prompt("Enter the secret code : ") ;
// }
console.log("You Got the Secret Right!!!") ;
// break keyword
let copyYou ;
// while(true){
//     copyYou = prompt("Type Something Other than QUIT or quit") ;
//     if(copyYou==="QUIT" || copyYou==="quit"){
//         console.log("I said you not to enter those words..") ;
//         break ;
//     }
//     else{
//         console.log(copyYou) ;
//     }
// }

// copyYou = prompt("Hey Say Something!") ;
// while(true){
//     if(copyYou.toLowerCase()==="stop copying me"){
//         break ;
//     } 
//     copyYou = prompt(copyYou) ;
// }

// 3. FOR...OF loop
console.log("Iterating over array using for loop") ;
for(let i=0 ; i<sizeOfArray ; i++){
    console.log(i,loopArray[i]) ;
}
console.log("Iterating over array using for...of loop") ;
for(let num of loopArray){
    console.log(num) ;
}
console.log("Iterating over nested array using nested for loop") ;
for(let i=0 ; i<nestArray.length;i++){
    let output = '' ;
    for(let j=0 ; j<nestArray[0].length;j++){
        // console.log(nestArray[i][j]) ;
        output += " "+nestArray[i][j] ;
    }
    console.log(output) ;
}
console.log("Iterating over nested array using nested for...of loop") ;
for(let num of nestArray){
    let output = '' ;
    for(let numnum of num){
        // console.log(nestArray[i][j]) ;
        output += " "+numnum ;
    }
    console.log(output) ;
}

// 4. FOR..IN loop used to Iterate over Object Literal
let iterateObject = {
    CS:34,
    AIDS:40,
    ENTC:59
};

for(let students in iterateObject){
    console.log(`From ${students} department ${iterateObject[students]} are placed till now.`) ;
}

for(let students of Object.values(iterateObject)){
    console.log(students) ;
}

for(let students of Object.keys(iterateObject)){
    console.log(students) ;
}