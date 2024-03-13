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
console.log("getElementById()---->>>>>") ;
const banner = document.getElementById("banner") ; // banner is a object in DOM with bunch of properties
console.dir(banner) ;

// 2. getElementsByTagName()
// returns HTMLcollection of objects
console.log("getElementByTagName()------>>>>>>") ;
const allImages = document.getElementsByTagName("img") ; // allImages is a HTMLCollection conataining Elements
console.dir(allImages) ;
console.dir(allImages[2]) ;
for(let img of allImages){
    console.log(img.src) ;
    // img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg" ;
}

// 3. getElementsByClassName()
// returns HTMLcollection of objects
console.log("getElementByClassName()---->>>>>>") ;
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
console.log("querySelector()------->>>>>>>>") ;
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
console.log("querySelectorAll()------->>>>>>>>") ;
let tocText = document.querySelectorAll(".toctext") ;
console.dir(tocText) ;
console.dir(tocText[0]) ;



// DOM Manipulation
// Properties and Methods
// 1. classList 2. getAttribute() 3. setAttribute() 4. appendChild() 5. append() 6. prepend()
// 7. removeChild() 8. remove() 9. createElement 10. innerText 11. textContent 12. innerHTML
// 13. value 14. parentElement 15. children 16. nextSibling 17. previousSibling 18. style

// 1. innerText
// we can only manipulate the text inside element we are accessing
console.log("innerText()----->>>>>>") ;
console.log(document.querySelector('p').innerText) ;
// document.querySelector('p').innerText = "Jay Shriram" ;
// console.log(document.querySelector('p').innerText) ;
let allLinks = document.querySelectorAll('ul a') ;
for(let link of allLinks){
    link.innerText = "I am a Link!" ;
} 

// 2. innerHTML
// we can manipulate whole html inside element we are accessing
console.log("innerHTML()----->>>>>>") ;
let para = document.querySelector('p') ;
// console.dir(para) ;
document.querySelector('p').innerHTML = "<i>Using InnerHTML</i>" ;
console.dir(para) ;

// NOTE -->> if you don't want to over write the content present inside the element use += insetead of =

// Attributes id,class,type,value,etc.
// document.querySelector('#banner').id = "notBanner" ; // changed id of image from banner to notBanner

// 3. getAttribute()
// returns name of attribute or null
console.log("getAttribute()----->>>>>>") ;
console.log(image.getAttribute('class')) ;

// 4. setAttribute()
// sets a new value to existing attribute
let input = document.querySelector('input[type="text"]') ;
console.log(input.type) ;
console.log("setAttribute()----->>>>>>") ;
// input.type = "password" ;
input.setAttribute('type','password') ;
console.log(input.type) ;

// 5. style
console.log("style--------->>>>>>>>>>>") ;
let heading = document.querySelector('h1') ;
heading.style.color = "red" ;
heading.style.backgroundColor = "purple" ;
console.dir(heading.style) ;
console.log(window.getComputedStyle(heading).margin) ;

// 6. classList
console.log("classList------>>>>>>>>>>") ;
heading = document.querySelector('h2') ;
// heading.setAttribute('class','purple') ;
heading.setAttribute('class','border') ;
let className = heading.getAttribute('class') ;
// let className = heading.class ; // doesn't work returns undefined
console.log(className) ;
// console.log(heading.class) ;
heading.setAttribute('class',`${className} purple`) ;
console.log(heading.classList) ;
// heading.classList.add('className') ;
// heading.classList.remove('className') ;
// heading.classList.toggle('className') ;
// heading.classList.contains('className') ;

// 7. Traversing parent/sibling/children
console.log("Traversing parent/sibling/children------->>>>>>>") ;
// 1. parentElement
console.log("parentElement------->>>>>>") ;
let firstBold = document.querySelector('b') ;
console.log(firstBold) ;
let parentFirstBold = firstBold.parentElement ;
// console.log(`parnet element of firstBold is ${parentFirstBold}`) ;
console.log(parentFirstBold) ;
parentFirstBold = firstBold.parentElement.parentElement ;
console.log(parentFirstBold) ;

// 2. children / childElement / nextElementSibling / previousElementSibling
console.log("children----->>>>>>") ;
let paragraph = firstBold.parentElement ;
console.dir(paragraph.children) ;
let imageSquare = document.querySelector(".square") ;
console.log(imageSquare.nextElementSibling) ;
console.log(imageSquare.previousElementSibling) ;


// 8. createElement() / appendChild() / append() / prepend() / insertAdjacentElement()
// creates new element and adds it to the page
console.log("createElement()----->>>>>>") ;
const newImage = document.createElement('img') ;
newImage.src = 'https://images.unsplash.com/photo-1580980407668-6bb45a674180?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBpZ2VvbnxlbnwwfHwwfHx8MA%3D%3D' ;
console.log("appendChild()------>>>>>>>>") ;
document.body.appendChild(newImage) ;
newImage.classList.add('square') ;
console.log("append()-------->>>>>>>>>") ;
para = document.querySelector('p') ;
para.append(" I am new text!!!! appended using append()") ;
console.log("prepend()------->>>>>>>>>") ;
para.prepend("I am prepended text!!!! using prepend(). ") ;
console.log("insertAdjacentElement()------>>>>>>>") ;
let mainHeading = document.querySelector('h1') ;
let newh2 = document.createElement('h2') ;
newh2.append("Are adorable chickens!!!") ;
mainHeading.insertAdjacentElement("afterend",newh2) ;

// 9. removeChild() / remove()
// remove element from the page
console.log("removeChild()------->>>>>>>>>") ;
// document.body.removeChild(para) ;
console.log("remove------>>>>>>>") ;
// newImage.remove() ;