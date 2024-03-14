// EVENTS -->> Responding to user inputs and actions
// clicks, drags, drops, hovers, scroll, form submission, key presses, focus/blur
// mouse wheel, double click, copying, pasting, audio start, screen resize, printing

// Onclick event
console.log("onclick event----->>>>>>>") ;
let btn = document.querySelector('#v2') ;
btn.onclick = function(){
    console.log("You Clicked Me!!") ;
    console.log("I hope it worked!!") ;
    console.log("Bola Jay Shree Ram!!") ;
    alert("Jay Shree Ram!") ;
}

btn.onmouseenter = function(){
    console.log("Ram Ram!") ;
}

let heading = document.querySelector('h1') ;
heading.onclick = function(){
    alert("This is funnYY") ;
}

// addEventListener 
console.log("addEventListener()----->>>>>") ;
let btn3 = document.querySelector('#v3') ;
btn3.addEventListener('click',function(){
    console.log("You Clicked Third button.") ;
    alert("3rd version of button") ;
})

// Why to use addEventListener
let tasButton = document.querySelector('#tas') ;
function shout(){
    console.log("shout") ;
}
function twist(){
    console.log("twist") ;
}
// property onclick gets overwritten 
// tasButton.onclick = shout ;
// tasButton.onclick = twist ;
// property onlick does not get overwritten 
tasButton.addEventListener('click',shout) ;
tasButton.addEventListener('click',twist) ;
// tasButton.addEventListener('click',shout,{once:true}) ;