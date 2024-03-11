// The DOM is a javascript representation of a webpage
// It's your JS "window" into the conetnts of webpage
// It's just a bunch of objects you can interact with via JS

// DOM -->> Document Object Model
// The Document object is our entry point into the world of DOM
// It contains representaion of all the content on a page, plus 
// tons of useful methods and properties.


// SELECTING The elements/objects in DOM------>>>>>>>
// we actually select the objects in DOM not elements in html/css
// 1. getElementById()
// 2. getElementsByTagName()
// 3. getElementsByClassName()
// 4. querySelector()
// 5. querySelectorAll()

// 1. getElementById()
// returns object
const banner = document.getElementById("banner") ; // banner is a object in DOM with bunch of properties
console.dir(banner) ;

// 2. getElementsByTagName()
// returns HTMLcollection of objects
const allImages = document.getElementsByTagName("img") ; // allImages is a HTMLCollection conataining Elements
console.dir(allImages) ;
console.dir(allImages[2]) ;
for(let img of allImages){
    console.log(img.src) ;
    // img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg" ;
}

// 3. getElementsByClassName()
// returns HTMLcollection of objects
const images = document.getElementsByClassName("square") ; // images is a HTMLCollection containing Elements
console.dir(images) ;
console.dir(images[0]) ;
for(let img of images){
    console.log(img.src) ;
    // img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg" ;
}

// 4. querySelector()
// bydefault it selects first occurrence
// A newer all-in-one method to select single element
// tag - ("tagName")
// id - ("#idName")
// class - (".className")
let image = document.querySelector("img:nth-of-type(3)") ;
console.dir(image) ;
image = document.querySelector("#banner") ;
console.dir(image) ;
image = document.querySelector(".square") ;
console.dir(image) ;

let anchor = document.querySelector("a[title='Java']") ;
console.dir(anchor) ;

// 5. querySelectorAll()
// it selects all elements
// it returns nodeList of elements
let tocText = document.querySelectorAll(".toctext") ;
console.dir(tocText) ;
console.dir(tocText[0]) ;