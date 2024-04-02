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