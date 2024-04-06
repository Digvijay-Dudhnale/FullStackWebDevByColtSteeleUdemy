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
// Factory function ---->>>>>>>
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


// Constructor Functions -------->>>>>>>>>
// -> creates a blank plain javascript object when used with new keyword
// -> Links (sets the constructor of) this object to another object
// -> Passes newly created object from step 1 as the this context
// -> returns this if the function doesn't return its own object

function Color(r,g,b){
    this.r = r ;
    this.g = g ;
    this.b = b ;
    // console.log(this) ;
}

    // console.log(Color(45,75,84)) ;
    // console.log(new Color(45,75,84)) ;
Color.prototype.rgb = function(){
        const {r,g,b} = this ;
        // console.log(this) ;
        return `rgb(${r},${g},${b})` ;
}

const color1 = new Color(78,220,210) ;
console.log(color1.rgb()) ;
const color2 = new Color(55,45,67) ;
    // console.log(color1.rgb === color2.rgb ) ;

    

// JavaScript Classes --->>>
// defined using class keyword
// whenever we create object of class constructor runs automatically
// to create class object use new keyword it is mandatory

class ColorClass{
    constructor(r,g,b){
        // console.log("Inside Constructor") ;
        // console.log(r,g,b) ;
        // this.a = r ;
        this.r = r ;
        this.g = g ;
        this.b = b ;
        // console.log(this) ;
    }
    greet(){
        console.log("Ram Ram Bhai Sariyane") ;
    }
    rgb(){
        return(`rgb(${this.r},${this.g},${this.b})`) ;
    }
};

const c1 = new ColorClass(45,67,83) ;
c1.greet() ;
console.log(c1.rgb()) ;
document.body.style.backgroundColor = c1.rgb() ;


// extends and super keywords ------>>>>>
class Pet{
    constructor(name,age){
        this.name = name ;
        this.age = age ;
    }
    eat(){
        return `${this.name} is eating.` ;
    }
};

class Cat extends Pet{
        constructor(name,age,livesLeft = 9){
        //     this.name = name ;
        //     this.age = age ;
            super(name,age) ; // calls the constructor of Parent class
            this.livesLeft = livesLeft ;
        }
        // eat(){
        //     return `${this.name} is eating.` ;
        // }
    mewo(){
        return "MEWOOOO" ;
    }
};
    // const cat1 = new Cat('Viraj',22) ;
    // console.log(cat1.eat()) ;
class Dog extends Pet{
        // constructor(name,age){
        //     this.name = name ;
        //     this.age = age ;
        // }
        // eat(){
        //     return `${this.name} is eating.` ;
        // }
    bark(){
        return "BHOOO BHOOO" ;
    }
}

const cat1 = new Cat("HusharManjar",1000) ;
const dog1 = new Dog("HusharKutra",999) ;
console.log(dog1) ;
console.log(cat1) ;