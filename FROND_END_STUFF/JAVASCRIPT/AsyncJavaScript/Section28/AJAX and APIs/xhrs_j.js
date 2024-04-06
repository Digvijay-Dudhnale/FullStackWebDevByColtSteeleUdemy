let req = new XMLHttpRequest() ;

req.onload = function(){
    console.log("Its Done") ;
    console.log(this) ;
    console.log(this.responseText) ;
    // we can not perform any action on responseText we received because it is all in string format
    // we need to convert it into JSON object by parsing it
    const data = JSON.parse(this.responseText) ;
    console.log(data) ;
    console.log(data.mass) ;

    // --->>> this is not a good way to make requests as it do not support promises and async 
}

req.onerror = function(){
    console.log("Error Occurred") ;
    console.log(this) ;
}

req.open("GET","https://swapi.dev/api/people/1/") ;
req.send() ;


// FETCH method
// -->> the newer way of making requests through JS
// -->> supports promises
// -->> it uses function fetch()
// -->> fetch returns promise

        // console.log("fetch()------->>>>>>>>") ;
        // const req1 = fetch("https://swapi.dev/api/people/1/") ;
        // console.log(req1) ;
        // req1.then((res)=>{
        //     console.log("DONE", res) ;
        //     // -->> .json() returns promise
        //     // res.json().then((data)=> console.log(data)) ;
        //     return res.json() ;
        // })
        // // this .then is used for res.json() ;
        // .then((data)=>{
        //     console.log(data) ;
        //     const req2 = fetch("https://swapi.dev/api/people/2/") ;
        //     return req2 ;
        // })
        // .then((res)=>{
        //     console.log("Resolved Second request", res) ;
        //     return res.json() ;
        // })
        // .then((data)=>{
        //     console.log(data) ;
        // })
        // req1.catch((err)=>{
        //     console.log("ERROR", err) ;
        // })

async function starWarPeople (num) {
    // return new Promise((resolved,reject)=>{
        // })
    try{
        const res = await fetch(`https://swapi.dev/api/people/${num}/`) ;
        const data = await res.json() ;
        console.log(data) ;
    }
    catch(e){
        console.log("Error" , e) ;
    }
}

async function People(){
    await starWarPeople(3) ;
    await starWarPeople(4) ;
    // await starWarPeople(n) ;
} 

People() ;


// AXIOS
// --->>> A library for making http requests

    // let axios_var = axios.get("https://swapi.dev/api/people/3/") ;
    // axios_var.then((data)=>{
    //     console.log(data.data.skin_color) ;
    // })

async function axiosDemoStarwarPerson(){
    try{
        let axios_var = await axios.get("https://swapi.dev/api/people/3/") ;
        console.log(axios_var.data.skin_color) ;
    }
    catch(e){
        console.log("Error", e) ;
    }
}
axiosDemoStarwarPerson() ;


const jokesButton = document.querySelector('#jokesButton') ;
const jokes = document.querySelector('#jokes') ;
const getDadJoke = async ()=>{
    const config = {headers : {Accept:"application/json"}} ;
    const res = await axios.get("https://icanhazdadjoke.com/" , config) ;
    // console.log(res.data.joke) ;
    // return res ;
    const newLi = document.createElement('li') ;
    newLi.innerText = res.data.joke ;
    jokes.append(newLi) ;
}
jokesButton.addEventListener('click',function(){
// let res = getDadJoke() ;
    getDadJoke() ;
})

// getDadJoke() ;
        // const jokesButton = document.querySelector('#jokesButton') ;
        // const jokes = document.querySelector('#jokes') ;
        // jokesButton.addEventListener('click',function(){
        //     const newLi = document.createElement('li') ;
        //     let res = getDadJoke() ;
        //     newLi.innerText = res.data.joke ;
        //     jokes.append(newLi) ;
        // })
