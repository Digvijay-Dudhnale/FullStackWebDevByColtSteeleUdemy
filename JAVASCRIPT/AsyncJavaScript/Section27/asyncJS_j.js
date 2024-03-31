// CALL STACK
// --->>> The mechanism the JS interpreter uses to keep track of its place in a script that calls multiple functions.
// --->>> How JS knows what function is currently being run and what functions are called from within that function,etc.
// STACK --->>> Last in First out
// --->>> When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the functions.
// --->>> Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
// --->>> When the current function is finished, the interpreter takes it off the stack and resumes the exection where it left off in the last code listing
let multiply = (x,y) => {
    return x*y ;
}

let square = (x) => {
    return multiply(x,x) ;
}

let isRightAngledTriangle = (a,b,c) => {
    return square(a) + square(b) === square(c) ;
}

console.log(isRightAngledTriangle(3,4,5)) ; 
// Call Stack for above fucntion call -->>
// multiply(c,c) -> 4 add
// square(c) -> 4 remove, remove, add
// multiply(b,b) -> 3 add
// square(b) -> 3 remove , remove , add
// multiply(a,a) -> 2 add
// square(a) -> 2 add
// isRightAngledTriangle(a,b,c) -> 1 add -> remove, remove, remove


// JS is Single Threaded
// --->>> At any given point in time, that single JS thread is running at most one line of Js code
// --->>> Browsers come with web APIs that are able to handle certain tasks in the background (like making requests and setting TimeOut)
// --->>> The JS call stack recognizes these web APIs and passess them off to the browser to take care of
// --->>> Once the browser finishes those tasks, they return and are pushed onto the stack as a callback
console.log("I will print out first.") ;
    // setTimeout(() => {
    //     console.log("I will print out third.") ;
    // }, 3000); 
console.log("I will print out second.") ;


// CALLBACK HELL
let divCallbackHell = document.getElementById('callbackHell') ;
    // setTimeout(() => {
    //     divCallbackHell.style.backgroundColor = 'red';
    //     setTimeout(() => {
    //         divCallbackHell.style.backgroundColor = 'orange';
    //         setTimeout(() => {
    //             divCallbackHell.style.backgroundColor = 'yellow';
    //             setTimeout(() => {
    //                 divCallbackHell.style.backgroundColor = 'green';
    //                 setTimeout(() => {
    //                     divCallbackHell.style.backgroundColor = 'pink';
    //                 }, 1000);
    //             }, 1000);
    //         }, 1000);
    //     }, 1000);
    // }, 1000);

        // setTimeout(() => {
        //     divCallbackHell.style.backgroundColor = 'orange';
        // }, 2000);
        // setTimeout(() => {
        //     divCallbackHell.style.backgroundColor = 'yellow';
        // }, 3000);

    // let delayedColorChange = (delay,newColor,doNext) => {
    //     setTimeout(() => {
    //         divCallbackHell.style.backgroundColor = newColor ;
    //         doNext && doNext() ;
    //     }, delay);
    // }

    // delayedColorChange(1000,'red',() =>{
    //     delayedColorChange(1000,'orange',() =>{
    //         delayedColorChange(1000,'yellow',() =>{
    //             delayedColorChange(1000,'green',() =>{
    //                 delayedColorChange(1000,'pink',() =>{

    //                 })
    //             })
    //         })
    //     })
    // })


// PROMISES
// --->>> A promise is an object representing the eventual completion or failure of an asynchronous operation
// Fake Request Using CallBacks 
const fakeRequestCallback = (url,success,failure) =>{
    const delay = Math.floor(Math.random() * 4500) + 500 ;
    setTimeout(() => {
        if(delay>4000){
            failure("Connection Timeout :(") ;
        }
        else{
            success(`Here is your fake data from ${url}`) ;
        }
    }, delay);
}
// Fake Request Using Promise
const fakeRequestPromise = (url) =>{
    return new Promise((resolve,reject)=>{
        const delay = Math.floor(Math.random() * 4500) + 500 ;
    setTimeout(() => {
        if(delay>4000){
            reject("Connection Timeout :(") ;
        }
        else{
            resolve(`Here is your fake data from ${url}`) ;
        }
    }, delay);
    })
}

    // fakeRequestCallback("books.com/page1",
    //     function(data){
    //         console.log("It worked 1st time!") ;
    //         console.log(data) ;
    //         fakeRequestCallback("books.com/page2",
    //             function(data){
    //                 console.log("It worked 2nd time!") ;
    //                 console.log(data) ;
    //                 fakeRequestCallback("books.com/page3",
    //                     function(data){
    //                         console.log("It worked 3rd time!") ;
    //                         console.log(data) ;
    //                     },
    //                     function(err){
    //                         console.log("3rd ERROR!") ;
    //                         console.log(err) ;
    //                     })
    //             },
    //             function(err){
    //                 console.log("2nd ERROR!") ;
    //                 console.log(err) ;
    //             })
    //     },  
    //     function(err){
    //         console.log("1st ERROR!") ;
    //         console.log(err) ;
    // })

// --->>> A promise is a returned object to which you attach callbacks, instead of passing callbacks into a function
    // let request = fakeRequestPromise('books.com/page1/king') ;
    // request
    //     .then((data)=>{
    //         console.log("Promise Resolved") ;
    //         console.log(data) ;
    //         console.log("It Worked!") ;
    //     })
    //     .catch((err)=>{
    //         console.log("Promise Rejected") ;
    //         console.log(err) ;
    //         console.log("Oh no, Error!") ;
    //     })

        // fakeRequestPromise('books.com/page1/king')
        //     .then((data)=>{
        //         console.log("Promise Resolved") ;
        //         console.log(data) ;
        //         console.log("It Worked! 1st time") ;
        //         fakeRequestPromise('books.com/page2/king')
        //             .then((data)=>{
        //                 console.log("Promise Resolved") ;
        //                 console.log(data) ;
        //                 console.log("It Worked! 2nd time") ;
        //             })
        //             .catch((err)=>{
        //                 console.log("Promise Rejected") ;
        //                 console.log(err) ;
        //                 console.log("Oh no, Error! 2nd time") ;
        //             })
        //     })
        //     .catch((err)=>{
        //         console.log("Promise Rejected") ;
        //         console.log(err) ;
        //         console.log("Oh no, Error! 1st time") ;
        //     })

fakeRequestPromise("books.com/page1/king")
    .then((data)=>{
        console.log(data) ;
        return fakeRequestPromise("books.com/page2/king") ;
    })
    .then((data)=>{
        console.log(data) ;
        return fakeRequestPromise("books.com/page3/king") ;
    })
    .then(function(data){
        console.log(data) ;
    })
    .catch((err)=>{
        console.log(err) ;
    })


// Creating Our Own Promises
const fakeRequest = (url) =>{
    return new Promise((resolve,reject)=>{
        let rand = Math.random() ;
        setTimeout(() => {
            if(rand > 0.7){
                resolve("Promise Fulfilled") ;
            }
            reject("Request error") ;
        }, 1000);
    })
}
let request = fakeRequest("books/Ram/Sita") 
    .then((data)=>{
        console.log("Ok", data) ;
    })
    .catch((err)=>{
        console.log("Oh No,", err) ;
    })

let delayedColorChange = (newColor) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            divCallbackHell.style.backgroundColor = newColor ;
            resolve(newColor)
        }, 2000);
    })
}
delayedColorChange('red')
    .then((data)=>{
        // divCallbackHell.style.backgroundColor = data ;
        return delayedColorChange('green') ;
    })
    .then((data)=>{
        // divCallbackHell.style.backgroundColor = data ;
        return delayedColorChange('blue') ;
    })
    .then((data)=>{
        // divCallbackHell.style.backgroundColor = data ;
        return delayedColorChange('orange') ;
    })
    .then((data)=>{
        // divCallbackHell.style.backgroundColor = data ;
    })
