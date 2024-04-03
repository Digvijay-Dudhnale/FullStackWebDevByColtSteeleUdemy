const form = document.querySelector('#searchForm') ;
const search = document.querySelector('#search') ;
const submit = document.querySelector('#submit') ;
const showNames = document.querySelector('#showNames') ;

form.addEventListener('submit',async function(evt){
    evt.preventDefault() ;
    // console.log("submitted") ;
    // console.dir(search) ;
    let name = search.value ;
    // console.log(name) ;
    const config = { params : {q:name}}
    // await axios.get(`https://api.tvmaze.com/search/shows?q=${name}`)
    await axios.get(`https://api.tvmaze.com/search/shows?q=`,config)
    .then((data)=>{
        // console.log(data.data) ;
        for(let show of data.data){
            let newLi = document.createElement('li') ;
            newLi.append(show.show.name) ;
            showNames.append(newLi) ;
            // console.log(show.show.name) ;
        }
        search.value = "" ;
    })
    .catch((err)=>{
        let newLi = document.createElement('li') ;
        newLi.append("Sorry Can't find any show :(:(") ;
        showNames.append(newLi) ;
        // console.log("Error") ;
        search.value = "" ;
    })
})