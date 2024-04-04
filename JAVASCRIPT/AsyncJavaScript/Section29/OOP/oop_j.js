// PROTOTYPE is a place to store properties common to object
// __proto__ is a reference to actual prototype object
// -> we can assign new properties
String.prototype.yell = function(){
    return `Ram Ram ${this}` ;
}
const name = "Digvijay" ;
console.log(name.yell()) ;
// -> we can assign new value to alreday existing properties
Array.prototype.pop = function(){
    return "I will not POP this out" ;
}
const arr = [7,8,9] ;
console.log(arr.pop()) ;


// OOP
// Factory function
function hex(r,g,b){
    return '#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1) ;
}
function rgb(r,g,b){
    return `rgb(${r},${g},${b})` ;
}

console.log(hex(255,56,24)) ;
// "#ff3818"

function makeColor(r,g,b){
    const color = {} ;
    color.r = r ;
    color.g = g ;
    color.b = b ;
    color.rgb = function(){
        const {r,g,b} = this ;
        // console.log(this) ;
        return `rgb(${r},${g},${b})` ;
    }
    color.hex = function(){
        const {r,g,b} = this ;
        return '#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1) ;
    }
    return color ;
}
// console.log(makeColor(45,56,89)) ;
const firstColor = makeColor(56,87,94) ;
console.log(firstColor.rgb()) ;
console.log(firstColor.hex()) ;
// console.log(firstColor) ;