function makeRandomColor(){
    let red = Math.floor(Math.random()*256) ;
    let green = Math.floor(Math.random()*256) ;
    let blue = Math.floor(Math.random()*256) ;
    return `rgb(${red},${green},${blue})` ;
}

let buttons = document.querySelectorAll('button') ;

// for(let button of buttons){
//     button.addEventListener('click',function(){
//         button.style.backgroundColor = makeRandomColor() ;
//     })
// }

for(let i=0 ; i<buttons.length ; i++){
    // buttons[i].addEventListener('click',function(){
    //     buttons[i].style.backgroundColor = makeRandomColor() ;
    //     buttons[i].style.color = makeRandomColor() ;
    // })
    buttons[i].addEventListener('click',colorize) ;
}

let h1s = document.querySelectorAll('h1') ;

for(let h1 of h1s){
    // h1.addEventListener('click',function(){
    //     h1.style.backgroundColor = makeRandomColor() ;
    //     h1.style.color = makeRandomColor() ;
    // })
    h1.addEventListener('click',colorize) ;
}

function colorize(){
    this.style.backgroundColor = makeRandomColor() ;
    this.style.color = makeRandomColor() ;
}