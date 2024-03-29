// Event Bubbling is when we want to trigger the event for particular element
// but along with it the same events of it's parent elements also get triggered 

let button = document.querySelector('#btn') ;
let container = document.querySelector('#container') ;

button.addEventListener('click',function(e){
    e.preventDefault() ;
    let bgColor = makeRandomColor() ;
    container.style.backgroundColor = bgColor ;
    button.style.color = bgColor ;
    // to stop event bubbling we can use --->>>> e.stopPropogation() method
    e.stopPropagation() ;
})

container.addEventListener('click',function(e){
    e.preventDefault() ;
    container.classList.toggle('hide') ;
})

function makeRandomColor(){
    let red = Math.floor(Math.random()*256) ;
    let green = Math.floor(Math.random()*256) ;
    let blue = Math.floor(Math.random()*256) ;
    return `rgb(${red},${green},${blue})` ;
}