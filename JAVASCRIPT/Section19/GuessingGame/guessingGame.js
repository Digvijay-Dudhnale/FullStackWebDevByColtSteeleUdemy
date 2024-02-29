let maximum = parseInt(prompt("Enter the maximum number!")) ;

while(!maximum){
    maximum=parseInt(prompt("Enter a valid number!!")) ;
}

let targetNum = Math.floor(Math.random()*maximum) + 1 ;
// console.log(targetNum) ;
let attempts = 1 ;
// let guess = parseInt(prompt("Enter your guess")) ;
let guess = prompt("Enter your guess or 'q' to quit.") ;

while(parseInt(guess) !== targetNum){
    if(guess==='q') break ;
    guess = parseInt(guess) ;
    // attempts++ ;
    if(guess>targetNum){
        // guess = parseInt(prompt("Too High!! Enter a new guess.")) ;
        guess = prompt("Too high!! Enter a new guess.") ;
        attempts++ ;
    }
    else if(guess<targetNum){
        // guess = parseInt(prompt("Too Low!! Enter a new guess.")) ;
        guess = prompt("Too low!! Enter a new guess.") ;
        attempts++ ;
    }
    else{
        guess = prompt("Invalid guess!! Please enter a number or 'q' ") ;
    }
}
if(guess==='q'){
    prompt("You Quit the game..Better luck next Time!") ;
    console.log("You Quit the game..Better luck next Time!") ;
}
else{
    prompt(`YOU got IT! It took you ${attempts} guesses!`) ;
    console.log(`YOU got IT! It took you ${attempts} guesses!`) ;
}