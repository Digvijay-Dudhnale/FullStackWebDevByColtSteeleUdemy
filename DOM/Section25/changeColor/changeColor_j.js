let heading = document.querySelector('h1') ;
let button = document.querySelector('button') ;
button.addEventListener('click',function(){
    let backgroundColor = makeRandomColor() ;
    // let red = Math.floor(Math.random()*256) ;
    // let green = Math.floor(Math.random()*256) ;
    // let blue = Math.floor(Math.random()*256) ;
    // document.body.style.backgroundColor = `rgb(${red},${green},${blue})` ;
    // heading.innerText = `rgb(${red},${green},${blue})` ;
    document.body.style.backgroundColor = backgroundColor ;
    heading.innerText = backgroundColor ;
})

function makeRandomColor(){
    let red = Math.floor(Math.random()*256) ;
    let green = Math.floor(Math.random()*256) ;
    let blue = Math.floor(Math.random()*256) ;
    return `rgb(${red},${green},${blue})` ;
}