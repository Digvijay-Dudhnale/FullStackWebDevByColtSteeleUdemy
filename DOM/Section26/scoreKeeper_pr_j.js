// // part 1
        // let p1Score = document.querySelector('#p1Score') ;
        // let p2Score = document.querySelector('#p2Score') ;
        // let p1Button = document.querySelector('#p1Button') ;
        // let p2Button = document.querySelector('#p2Button') ;
        // let resetButton = document.querySelector('#reset') ;
        // let score1=0 ;
        // let score2=0 ;
        // let isGameOver = false ;
        // let winningScore = 3 ;

        // p1Button.addEventListener('click',function(e){
        //     e.preventDefault() ;
        //     if(!isGameOver){
        //         score1++ ;
        //         if(score1===winningScore){
        //             isGameOver = true ;

        //             // part 2
        //             // p1Score.classList.add('winner') ;
        //             // p2Score.classList.add('loser') ;

        //             // part 3
        //             p1Score.classList.add('has-text-success') ;
        //             p2Score.classList.add('has-text-danger') ;
        //             p1Button.disabled = true ;
        //             p2Button.disabled = true ;
        //         }
        //     }
        //     p1Score.innerText = `${score1}` ;    
        // })

        // p2Button.addEventListener('click',function(e){
        //     e.preventDefault() ;
        //     if(!isGameOver){
        //         score2++ ;
        //         if(score2 === winningScore){
        //             isGameOver = true ;

        //             // part 2
        //             // p2Score.classList.add('winner') ;
        //             // p1Score.classList.add('loser') ;

        //             // part 3
        //             p2Score.classList.add('has-text-success') ;
        //             p1Score.classList.add('has-text-danger') ;
        //             p1Button.disabled = true ;
        //             p2Button.disabled = true ;
        //         }
        //     }
        //     p2Score.innerText = `${score2}` ;    
        // })

// // part 2
        // resetButton.addEventListener('click',resetFunction) 
        // function resetFunction(){
        //     // e.preventDefault() ;
        //     isGameOver = false ;
        //     score1 = 0 ;
        //     score2 = 0 ;
        //     p1Score.innerText = "0" ;
        //     p2Score.innerText = "0" ;
        //     p1Score.classList.remove('has-text-success','has-text-danger') ;
        //     p2Score.classList.remove('has-text-success','has-text-danger') ;
        //     p1Button.disabled = false ;
        //     p2Button.disabled = false ;
        // }

        // let playUpTo = document.querySelector('#playto') ;
        // playUpTo.addEventListener('change',function(e){
        //     e.preventDefault() ;
        //     winningScore = parseInt(playUpTo.value) ;
        //     resetFunction() ;
        // })


// part 4
// REFACTORING OF CODE
let p1 = {
    score: 0,
    display: document.querySelector('#p1Score'),
    button: document.querySelector('#p1Button')
}
let p2 = {
    score: 0,
    display: document.querySelector('#p2Score'),
    button: document.querySelector('#p2Button')
}
let resetButton = document.querySelector('#reset') ;
let winningScore = 3 ;
let playUpTo = document.querySelector('#playto') ;
let isGameOver = false ;

function updateScore(player,opponent){
    if(!isGameOver){
        player.score += 1 ;
        if(player.score === winningScore){
            isGameOver = true ;
            player.display.classList.add('has-text-success') ;
            opponent.display.classList.add('has-text-danger') ;
            player.button.disabled = true ;
            opponent.button.disabled = true ;
        }
        player.display.innerText = `${player.score}` ;
    }
}

p1.button.addEventListener('click',function(e){
    e.preventDefault() ;
    updateScore(p1,p2) ;
})
p2.button.addEventListener('click',function(e){
    e.preventDefault() ;
    updateScore(p2,p1) ;
})

resetButton.addEventListener('click',resetFunction) ;
function resetFunction(){
    isGameOver = false ;
    for(let p of [p1,p2]){
        p.score = 0 ;
        p.display.innerText = "0" ;
        p.display.classList.remove('has-text-success', 'has-text-danger')
        p.button.disabled = false ;
    }
}

playUpTo.addEventListener('change',function(e){
    e.preventDefault() ;
    winningScore = parseInt(playUpTo.value) ;
    resetFunction() ;
})